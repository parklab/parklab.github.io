---
layout: supplement
page_name: supplement
year: 2010
journal: "BMC Bioinformatics"
abstract_description: "We develop a method for identification of copy number alterations in a tumor genome compared to its matched control, based on application of Smith-Waterman algorithm to single-end sequencing data. In a performance test with simulated data, our algorithm shows >90% sensitivity and >90% precision in detecting a single copy number change that contains approximately 500 reads for the normal sample. With 100-bp reads, this corresponds to a ~50 kb region for 1X genome coverage of the human genome. We further refine the algorithm to develop rSW-seq, (recursive Smith-Waterman-seq) to identify alterations in a complex configuration, which are commonly observed in the human cancer genome. To validate our approach, we compare our algorithm with an existing algorithm using simulated and publicly available datasets. We also compare the sequencing-based profiles to microarray-based results."
link: "./kim-et-al-bmc-bioinformatics-2010"
link_text: "Kim et al, rSW-seq: Algorithm for detection of copy number alterations in deep sequencing data, BMC Bioinformatics, 11:432, 2010"
data_files:
    - title: "Source code (in C)"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/rswseq_src.zip"
      src: "rswseq_src.zip"
      size: "10 KB"
    - title: "Compilation instructions and a simple example"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/rsw-seq_tutorial_may18.pdf"
      src: "rsw-seq_tutorial_may18.pdf"
      size: "178 KB"
---

Please direct your questions to Peter J. Park.