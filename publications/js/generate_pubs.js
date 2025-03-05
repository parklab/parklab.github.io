// Script for generating the publications page

// Get the sort parameter from the URL
const params = new URLSearchParams(window.location.search);
const sort_param = params.get('sort') || 'year';

const group_field = sort_param === "key-papers" ? "year" : sort_param;

// Listen for change in sort field selector
const selectElement = document.getElementById('sort-select');
const selectElementValue = selectElement.value;

selectElement.appendChild(new Option('Year', 'year', false, sort_param === 'year'));
selectElement.appendChild(new Option('Journal', 'journal', false, sort_param === 'journal'));
selectElement.appendChild(new Option('Key Papers', 'key-papers', false, sort_param === 'key-papers'));

selectElement.addEventListener('change', (event) => {
  window.location.href = `?sort=${event.target.value}`;
});

// DISPLAY OPTIONS -------
SHOW_THUMBNAILS = false;
SHOW_YEAR_HEADINGS = false;
SHOW_TYPE_HEADINGS = false;
//-------------------------

// The order the that types are grouped during each year
GROUP_ORDER = ['dissertation', 'journal', 'conference', 'chapter', 'workshop',
  'poster', 'article', 'demo'
];
// If using custom grouping
// GROUP_ORDER = ['journal/chapter','conference/workshop', 'other'];

ICON_PATH = "thumbnails/";
ICON_SIZE = 85;

// Assumes that we are only going to have 10
var tagColor;
// If we use customs group, this maps orig type name to custom group name
var groupMap;

// Generate a map of authors to their publications
// const generateAuthorMap = (publications) => {

//   publications.reduce((acc, pub, i) => {
//     console.log("pub:", pub, acc);
//     for (const author of pub.author) {
//       const { name, lab_member } = author;

//       const filtered_name = name?.replace(/\*/g, '');

//       // Author not present in map
//       if (filtered_name && !acc?.[filtered_name]) {
//         acc[name] = [];
//       }

//       // Add publication to author entry
//       acc?.[name]?.push(pub);
//     }
    
//     return acc;
//   }, {});
// }



// Load category links
const data = fetch('/publication-data.json').then(response => response.json()).then(data => data.publications.filter(d => d.is_key_paper));


// Group [data] by [group_field]
// const grouped_data = Object.groupBy(data, (d) => d[group_field]);


d3.json('/publication-data.json', function(json) {

  // const authorMap = generateAuthorMap(json.publications);

  createTypeColors(json.publications);

  let data = json.publications;
  
  if (sort_param === 'key-papers') {
    data = data.filter(d => d.is_key_paper);
  }

  // Group [data] by [group_field]
  const grouped_data = Object.groupBy(data, (d) => d[group_field]);

  // Sort [grouped_data] by comparing values for various [group_field] types
  let sorted_keys;
  switch (sort_param) {
    case 'key-papers':
      sorted_keys = Object.keys(grouped_data).sort((a, b) => b - a);
      break;
    case 'year':
      sorted_keys = Object.keys(grouped_data).sort((a, b) => b - a);
      break;
    case 'journal':
      sorted_keys = Object.keys(grouped_data).sort(
        (a, b) => 
          grouped_data[b].length - grouped_data[a].length || b.localeCompare(a)
      );
      break;
    default:
      sorted_keys = Object.keys(grouped_data).sort((a, b) => b - a);
  }
  
  // Render links to the different categories
  renderCategoryLinks(sorted_keys, grouped_data);
  
  // Render each category list
  renderPubGroups(sorted_keys, grouped_data, `#publications`);

});

function renderCategoryLinks(data, data_groups_by_venue) {
  const pubsContainer = d3.select('#publications');
  const categoryLinksContainer = pubsContainer.append('div').classed('category-links-container', true);
 
  // Title of the category links
  categoryLinksContainer.append('h2').text(sort_param === "key-papers" ? "Year" : selectElement.options[selectElement.selectedIndex].innerText)

  // Links to the different category values
  const categoryLinks = categoryLinksContainer.append('ul').classed('category-links', true);
  data.forEach(category => {
    categoryLinks.append('li')
      .classed('category-link-item', true)
      .append('a')
      .attr('href', `#${category}`)
      .attr('class', 'category-link')
      .text(category + ' (' + data_groups_by_venue[category].length + ')');
  });
}

function createTypeColors(d) {
  var types = [];
  d?.forEach(function(pub) {
    if (types.indexOf(pub.type) < 0) {
      types.push(pub.type);
    }
  });
  tagColor = d3.scale.category10().domain(types);
}


renderPubGroups = function(sorted_keys, pubData, target) {
  const pubsContainer = d3.select(target);
  const pubs = pubsContainer.append('div').attr('id', 'pubs').classed('pubs', true);

  sorted_keys.forEach(key => {
    renderPubGroup(pubData[key], "#pubs", key);
  })
}

// Generate publications
function renderPubGroup(pubData, target, category) {

  const pubsContainer = d3.select(target);
  
  pubsContainer.append('h3')
      .classed('header', true)
      .attr('id', category)
      .text(function(d) {
        return category + ' (' + pubData.length + ')';
      });

  pubsContainer.append('hr')
      .classed('year-header-break', true)
    
  var pubs = d3.select(target).selectAll('pub')
               .data(pubData);

  pubs.enter().append('div')
    .classed('pub', true);

  if (SHOW_THUMBNAILS) {
    // representative image
    var pubIcon = pubs.append('img')
      .classed('thumbnail', true)
      .attr('src', function(d) {
        return ICON_PATH + d.thumbnail;
      })
      .attr('width', ICON_SIZE)
      .attr('height', ICON_SIZE);
  }

  // Div for all the publication info
  var pubInfo = pubs.append('div')
    .classed('pubInfo', true)
    .style('height', ICON_SIZE);

  // title
  var titles = pubInfo.append('span')
    .classed('title', true)
    .append('a')
    .attr('href', function(d) {
      return d.title_link;
    })
    .attr('target', '_blank')
    .text(function(d) {
      return d.title;
    });

  // Add award icon and text
  var awardIcon = pubInfo.selectAll('.title')
    .filter(function(d) {
      return d.award || ''
    });

  awardIcon.append('img')
    .classed('award-icon', true)
    .attr('src', 'icons/cert.png')
    .attr('width', 13);

  awardIcon.append('text')
    .classed('award-text', true)
    .text(function(d) {
      return d.award;
    });

  //authors
  pubInfo.append('div')
    .classed('authors', true)
    .html(function(d) {
      return d.author.map((d) => `<span class="${d.lab_member ? "lab_member" : ""}">${d.name}</span>`)
      .join(", ")
    });

  // venue, year
  pubInfo.append('div')
    .classed('venue', true)
    .html(function(d) {
      return '<em>' + d.journal_location + '</em> ';
    });

  // add supplemental links
  pubInfo.append('text')
    .classed('supp', true)
    .html(function(d) {
      // First add paper pdf (if there is one)
      var supplementals = ''
      if (d.hasOwnProperty('abstract_link'))
        supplementals += '<a target="_blank" href="' + d.abstract_link + '"> Abstract </a>';
      else
        supplementals += ''
      if (d.hasOwnProperty('pdf_link') && d.pdf_link !== '')
        supplementals += '| <a target="_blank" href="' + d.pdf_link + '"> PDF </a>';
      else
        supplementals += ''
      if (d.hasOwnProperty('tutorialwebsite'))
        supplementals += '<a href="' + d.tutorialwebsite + '"> tutorial website </a>';
      else
        supplementals += ''
      if (d.hasOwnProperty('biosnapwebsite'))
        supplementals += '<a href="' + d.biosnapwebsite + '"> bioSNAP Open Dataset Collection </a>';
      else
        supplementals += ''

      // then add everything else
      for (var link in d.supp) {
        supplementals += '| <a href="' + d.supp[link] + '"> ' + link + '</a> ';
      }
      return supplementals;
    });

    // comments
  pubInfo.append('div')
    .classed('comment', true)
    .text(function(d) {
      return d.comment;
    });

    // authorship
  pubInfo.append('div')
    .classed('authorship', true)
    .text(function(d) {
      return d.authorship;
    });
}
