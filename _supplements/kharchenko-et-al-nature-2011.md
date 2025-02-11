---
layout: supplement
page_name: supplement
year: 2011
journal: "Nature"
abstract_description: "Chromatin is composed of DNA and a variety of modified histones and non-histone proteins, which have an impact on cell differentiation, gene regulation and other key cellular processes. Here we present a genome-wide chromatin landscape for Drosophila melanogaster based on eighteen histone modifications, summarized by nine prevalent combinatorial patterns. Integrative analysis with other data (non-histone chromatin proteins, DNase I hypersensitivity, GRO-Seq reads produced by engaged polymerase, short/long RNA products) reveals discrete characteristics of chromosomes, genes, regulatory elements and other functional domains. We find that active genes display distinct chromatin signatures that are correlated with disparate gene lengths, exon patterns, regulatory functions and genomic contexts. We also demonstrate a diversity of signatures among Polycomb targets that include a subset with paused polymerase. This systematic profiling and integrative analysis of chromatin signatures provides insights into how genomic elements are regulated, and will serve as a resource for future experimental investigations of genome structure and function."
link: "./kharchenko-et-al-nature-2011"
link_text: "Kharchenko et al, Comprehensive analysis of the chromatin landscape in Drosophila melanogaster, Nature, 2011"
---

Please direct your questions to Peter J. Park.

The page provides download links for various data and results from the following paper: Kharchenko _et al_, __"Comprehensive analysis of the chromatin landscape in Drosophila melanogaster"__, Nature _doi:10.1038/nature09725_.

Folded-view browser can be accessed [here](https://compbio.med.harvard.edu/flychromatin/).<br/>Raw data is available at the [main modEncode site](http://www.modencode.org/).

### Chromatin segmentations
Wig files showing association of different genomic regions with the identified chromatin states: [[S2]](http://compbio.hms.harvard.edu/files/parklab/files/s2.9state.wig_.zip) [[BG3]](http://compbio.hms.harvard.edu/files/parklab/files/bg3.9state.wig_.zip)

### DNase I sensitivity
__Raw data__<br />
Links to the fastq files: [[S2]](http://submit.modencode.org/submit/public/download/3324?root=data) [[BG3]](http://submit.modencode.org/submit/public/download/3323?root=data) [[Kc167]](http://submit.modencode.org/submit/public/download/3325?root=data)

__Smoothed read density__<br />
The wig files show DNaseI read density profiles, smoothed with a 150bp Gaussian kernel (primarily meant for visualization purposes): [[S2]](http://compbio.hms.harvard.edu/files/parklab/files/s2.r2c.dhs_.density.wig_.zip) [[BG3]](http://compbio.hms.harvard.edu/files/parklab/files/bg3.r2c.dhs_.density.wig_.zip) [[Kc167]](http://compbio.hms.harvard.edu/files/parklab/files/kc.r2c.dhs_.density.wig_.zip)

__DNase I hypersensitive sites__<br />
The detected (high-magnitude) DHS positions: [[S2]](http://compbio.hms.harvard.edu/files/parklab/files/s2.dhs_.high_.zip) [[BG3]](http://compbio.hms.harvard.edu/files/parklab/files/bg3.dhs_.high_.zip) [[Kc167]](http://compbio.hms.harvard.edu/files/parklab/files/kc.dhs_.high_.zip)

The tab-delimited files report the following columns:
- chromosome
- position on the chromosome
- magnitude of the DNase I peak
- maximum likelihood estimate of DNaseI reads enrichment over genomic background expectation (log2 scale)

