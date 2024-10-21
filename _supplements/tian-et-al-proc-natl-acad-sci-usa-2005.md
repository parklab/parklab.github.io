---
layout: supplement
page_name: supplement
year: 2005
abstract_description: "Accurate and rapid identification of perturbed pathways through the analysis of genome-wide expression profiles facilitates the generation of biological hypotheses. We propose a statistical framework for determining whether a specified group of genes for a pathway has a coordinated association with a phenotype of interest. Several issues on proper hypothesis-testing procedures are clarified. In particular, it is shown that the differences in the correlation structure of each set of genes can lead to a biased comparison among gene sets unless a normalization procedure is applied. We propose statistical tests for two important but different aspects of association for each group of genes. This approach has more statistical power than currently available methods and can result in the discovery of statistically significant pathways that are not detected by other methods. This method is applied to data sets involving diabetes, inflammatory myopathies, and Alzheimer's disease, using gene sets we compiled from various public databases. In the case of inflammatory myopathies, we have correctly identified the known cytotoxic T lymphocyte-mediated autoimmunity in inclusion body myositis. Furthermore, we predicted the presence of dendritic cells in inclusion body myositis and of an IFN-alpha/beta response in dermatomyositis, neither of which was previously described. These predictions have been subsequently corroborated by immunohistochemistry."
link: "./tian-et-al-proc-natl-acad-sci-usa-2005"
link_text: "Tian et al, Discovering statistically significant pathways in expression profiling studies, Proc Natl Acad Sci USA, 2005"
data_files:
    - title: "Updated U74av2 (mouse)"
      size: "7.31 MB"
      src: "genesetsu74av2_rdata.zip"
    - title: "Updated U430v2 (mouse)"
      size: "6.64 MB"
      src: "genesetsu430v2_rdata.zip"
    - title: "Updated U95av2 (human)"
      size: "7.14 MB"
      src: "genesetsu95av2_rdata.zip"
    - title: "Updated U133a (human)"
      size: "7.13 MB"
      src: "genesetsu133a_rdata.zip"
    - title: "Updated U133plus2 (human)"
      size: "6.82 MB"
      src: "genesetsu133plus2_rdata.zip"
    - title: "Old U74av2 (mouse)"
      size: "4.13 MB"
      src: "genesetsu74av2_robject.zip"
    - title: "Old U95av2 (human)"
      size: "3.46 MB"
      src: "genesetsu95av2_robject.zip"
    - title: "Old U133a (human)"
      size: "3.72 MB"
      src: "genesetsu133a_robject.zip"
    - title: "R Script to Create Gene Sets from Bioconductor Annotations"
      size: "1 KB"
      src: "create_gene_sets_from_bioconductor_annotations_script.zip"
---

Please direct your questions to Peter J. Park.

**R package: _sigPathway_**

Implemented by Weil R. Lai

The latest version is available from the Bioconductor website: [http://www.bioconductor.org/packages/release/bioc/html/sigPathway.html](http://www.bioconductor.org/packages/release/bioc/html/sigPathway.html)

__Version__	| __Package (Windows)__      |  __Source Code__            | __Help__	| __Comment__	| __Date__
1.1-0   |	sigPathway_1.1-0.zip |	sigPathway_1.1-0.tar.gz	|  [sigPathway.pdf](../files/sigPathway.pdf) | | Sep. 2005
1.1-1   |	sigPathway_1.1-1.zip |	sigPathway_1.1-1.tar.gz	|  | a bug for the continuous phenotype case is fixed | Dec. 2005
1.1-2   |	sigPathway_1.1-2.zip |	sigPathway_1.1-2.tar.gz	|  | a memory allocation routine was modified | Feb. 2006
1.1-3   |	sigPathway_1.1-3.zip |	sigPathway_1.1-3.tar.gz	|  [sigpathway-1.1-3.manual.pdf](../files/sigpathway-1.1-3_manual.pdf)	| a minor bug for the weights w_{ki} option fixed | Mar. 2006
1.1-4   |	sigPathway_1.1-4.zip |	sigPathway_1.1-4.tar.gz	|  | minor bugs for permutations; for small samples, all possible permutations are now performed | Apr. 2006

*For compiling on non-Windows platforms, please type, "R CMD INSTALL <full path to sigPathway tar.gz file>"

__Expression Data__

[Muscle Data (49 samples)](../files/muscledata.txt)

__Gene sets (R object)__

For other array types, Entrez Gene IDs can be used as identifiers: Genesets_EntrezGeneIDs (all species, 3MB)

