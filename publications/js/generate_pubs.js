MY_NAME = "NAME";

// DISPLAY OPTIONS -------
SHOW_THUMBNAILS = false;
SHOW_TYPE_TAGS = false;
SHOW_YEAR_HEADINGS = false;
// Note that this is still organized by year,
// so it doesn't make sense for this to be true
// and SHOW_YEAR_HEADINGS to be false.
SHOW_TYPE_HEADINGS = false;
// If true, assumes that there is a pub_grouping mapping in the json object
USE_CUSTOM_GROUPS = false;
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

d3.json('/publication_data.json', function(json) {
  console.log("JSON", json);

  if (USE_CUSTOM_GROUPS) {
    groupMap = d3.map(json.pub_grouping)
  };

  createTypeColors(json.publications);

  data = json.publications;

  // var nested_data = d3.nest()
    // .key(function(d) {return d.year;})
      // .sortKeys(d3.descending)
  //   .key(function(d) { return USE_CUSTOM_GROUPS ? groupMap.get(d.type) : d.type; })
  //     .sortKeys(function(a,b) { return GROUP_ORDER.indexOf(a) - GROUP_ORDER.indexOf(b); })
    // .entries(json.publications);
  //
  // buildYears(nested_data, '#publications');

  renderPubs(data, '#publications');
});

function createTypeColors(d) {
  var types = [];
  d?.forEach(function(pub) {
    if (types.indexOf(pub.type) < 0) {
      types.push(pub.type);
    }
  });
  tagColor = d3.scale.category10().domain(types);
}

// Generate publications
function renderPubs(pubData, target) {
  var pubs = d3.select(target).selectAll('pub')
    .data(pubData);

    console.log("pubs", pubs);

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

  if (SHOW_TYPE_TAGS) {
    // tag that shows pub type
    pubs.append('text')
      .classed('type-tag', true)
      .text(function(d) {
        return d.type + '';
      })
      .style('background-color', function(d) {
        return tagColor(d.type);
      })
      .style('opacity', 0.5);
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
      return '<em>' + d.venue + '</em> ';
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
