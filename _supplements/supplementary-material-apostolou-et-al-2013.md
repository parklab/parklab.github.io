---
layout: supplement
page_name: supplement
year: 2013
journal: "Cell Stem Cell"
abstract_description: "The chromatin state of pluripotency genes has been studied extensively in embryonic stem cells (ESCs) and differentiated cells, but their potential interactions with other parts of the genome remain largely unexplored. Here, we identified a genome-wide, pluripotency-specific interaction network around the Nanog promoter by adapting circular chromosome conformation capture sequencing. This network was rearranged during differentiation and restored in induced pluripotent stem cells. A large fraction of Nanog-interacting loci were bound by Mediator or cohesin in pluripotent cells. Depletion of these proteins from ESCs resulted in a disruption of contacts and the acquisition of a differentiation-specific interaction pattern prior to obvious transcriptional and phenotypic changes. Similarly, the establishment of Nanog interactions during reprogramming often preceded transcriptional upregulation of associated genes, suggesting a causative link. Our results document a complex, pluripotency-specific chromatin “interactome” for Nanog and suggest a functional role for long-range genomic interactions in the maintenance and induction of pluripotency."
link: "./supplementary-material-apostolou-et-al-2013"
link_text: "Apostolou et al, Genome-wide Chromatin Interactions of the Nanog Locus in Pluripotency, Differentiation, and Reprogramming, Cell Stem Cell, 2013"
data_files:
    - title: "Annotations for HindIII fragments"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/fragments_annotation.csv.zip"
      src: "fragments_annotation.csv.zip"
      size: "10.08 MB"
    - title: "Datamatrix of fragment level read counts"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/datamatrix_fragments_readcounts.csv.zip"
      src: "datamatrix_fragments_readcounts.csv.zip"
      size: "9.34 MB"
    - title: "Datamatrix of gene level read counts"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/datamatrix_fragments_readcounts.csv.zip"
      src: "datamatrix_genes_readcounts.csv.zip"
      size: "526 KB"
    - title: List of m4C-seq samples
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/samplesdescription.txt"
      src: "samplesdescription.txt"
      size: "1 KB"
---

Please direct your questions to Peter J. Park.

- HindIII resctriction fragments in mm9 genome assembly are defined as the genomic region between two consecutive HindIII restriction site. The start/end coordinates are the midlle position within the HindIII restriction sites.
- Read counts per fragments are reads mapped at either the 5'-end or 3'-end of the HindIII fragment. Reads at bait fragments and other potential outliers have been excluded, as described in the article.
- Read counts per gene are obtained by summing read counts at individual fragments overlapping the gene locus or a 20kb window upstream the annotated transcription start site.
- Fragments annotations are reported as RefSeq genes where the fragment is overlapping either the gene body or a 20kb window upstream or downstream the annotated gene coordinates.