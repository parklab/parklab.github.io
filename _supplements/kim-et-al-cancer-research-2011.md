---
layout: supplement
page_name: supplement
year: 2011
journal: "Cancer Research"
abstract_description: "mRNA expression profiling has suggested the existence of multiple glioblastoma subclasses, but their number and characteristics vary among studies and the etiology underlying their development is unclear. In this study, we analyzed 261 microRNA expression profiles from The Cancer Genome Atlas (TCGA), identifying five clinically and genetically distinct subclasses of glioblastoma that each related to a different neural precursor cell type. These microRNA-based glioblastoma subclasses displayed microRNA and mRNA expression signatures resembling those of radial glia, oligoneuronal precursors, neuronal precursors, neuroepithelial/neural crest precursors, or astrocyte precursors. Each subclass was determined to be genetically distinct, based on the significant differences they displayed in terms of patient race, age, treatment response, and survival. We also identified several microRNAs as potent regulators of subclass-specific gene expression networks in glioblastoma. Foremost among these is miR-9, which suppresses mesenchymal differentiation in glioblastoma by downregulating expression of JAK kinases and inhibiting activation of STAT3. Our findings suggest that microRNAs are important determinants of glioblastoma subclasses through their ability to regulate developmental growth and differentiation programs in several transformed neural precursor cell types. Taken together, our results define developmental microRNA expression signatures that both characterize and contribute to the phenotypic diversity of glioblastoma subclasses, thereby providing an expanded framework for understanding the pathogenesis of glioblastoma in a human neurodevelopmental context."
link: "./kim-et-al-cancer-research-2011"
link_text: "Kim et al, A developmental taxonomy of glioblastoma defined and maintained by microRNAs, Cancer Research, 2011"
data_files:
    - title: "exp_470mir_261tcgagbm.txt"
      compbio_src: "sites/projects.iq.harvard.edu/files/parklab/files/exp_470mir_261tcgagbm.txt"
      src: "exp_470mir_261tcgagbm.txt"
      size: "1.4 MB"
---

Please direct your questions to Peter J. Park.

The classification labels and expression profiles for the 470 microRNAs across 261 glioblastoma multiforme (GBM) from TCGA are available below.

- The file contains two header lines of TCGA ID (12 characters) and 5 GBM classes (based on microRNA expression; see the article for details). The first two columns show the microRNA name and 5 microRNA classes (also see the article for details).
- Note that the microRNA classification (Neural precursors, Oligoneural precursors, Multipotent precursors, Astrocytic precursors, Neuromesenchymal precursors) is only available for top 121 microRNAs that were used for GBM classification ('NA' for the remaining 349 microRNAs).
- The order of microRNAs and GBMs in the file is the same with a heatmap in Fig.1 of the article.
- The expression profile was obtained as 'LV3 microRNA expression' from TCGA portal and quantile normalized per 470 microRNAs across 261 GBMs. For clustering and generation of a heatmap, we performed row-wise/column-wise normalization in GenePattern.


