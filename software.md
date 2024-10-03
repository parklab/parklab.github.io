---
layout: page
page_name: software
show_sidebar: false
title: Software
description: Software Description
toc: false
show_sidebar: false
hide_footer: false
---
# Software

Please report all software questions/issues [here](https://gitreports.com/issue/parklab/Software-Issues?email_public=on).

__Note:__ Our software packages are free for academic use. For commercial use, please contact the Harvard Office of Technology Development ([hms_otd@harvard.edu](mailto:hms_otd@harvard.edu)) with cc to Dr. Park. Patents have been filed for some algorithms.


<br>

### New!
---

__SigMA__ ([https://github.com/parklab/SigMA](https://github.com/parklab/SigMA))<br>For detection of homologous recombination deficiency (Signature 3) from panel, exome, or whole-genome data. See Gulhan et al, Nature Genetics, 2019.

__MosaicForecast__ ([https://github.com/parklab/MosaicForecast](https://github.com/parklab/MosaicForecast))<br>For identification of somatic mutation from bulk whole-genome sequencing data. See Dou et al, in press.

__LiRA__ ([https://github.com/parklab/LiRA](https://github.com/parklab/LiRA)A)<br>For identification of somatic mutation from single cell DNA whole-genome sequencing data using phasing information (calls are made for phasable regions). See Bohrson et al, Nature Genetics, 2019.

__SCAN-SNV__ ([https://github.com/parklab/scan-snv](https://github.com/parklab/scan-snv))<br>Single cell genotyper for whole-genome sequencing data (calls are made for the whole genome). See Luquette et al, Nature Communication, 2019.

__ShatterSeek__ ([https://github.com/parklab/ShatterSeek](https://github.com/parklab/ShatterSeek))<br>For identification of chromothripsis events from whole-genome sequencing data. See Ciriano-Cortes et al, Nature Genetics, in press.

__Tibanna__ ([https://github.com/4dn-dcic/tibanna](https://github.com/4dn-dcic/tibanna))<br>For running genomic pipelines on Amazon Web Services (AWS). It supports CWL/WDL (w/ docker), Snakemake (w/ conda) and custom Docker/shell commands. See Lee et al, Bioinformatics, 2019. 

__xTEA__ (available soon)<br>An improved version of our software package TEA for detecting transposable elements from whole-genome data

__HiNT__ ([https://github.com/parklab/HiNT](https://github.com/parklab/HiNT))<br>For identification of copy number and structural variants from Hi-C data.

<br>

### Whole-genome analysis
---

__Meerkat__ ([http://compbio.med.harvard.edu/Meerkat/](http://compbio.med.harvard.edu/Meerkat/))<br>This program identifies structural variations from whole-genome sequencing data using patterns of discordant read clusters

__Tea (Transposable Element Analyzer)__ ([http://compbio.med.harvard.edu/Tea/](http://compbio.med.harvard.edu/Tea/))<br>This is a tool for detection of retrotransposition events in whole-genome sequencing data.

__BIC-seq2 (Bayesian Information Criteria-seq)__ ([http://compbio.med.harvard.edu/BIC-seq](http://compbio.med.harvard.edu/BIC-seq/))<br>This program (R code) is for identification of copy number variants in whole-genome sequencing data. The original paper was published in 2011 (Xi et al, PNAS, 2011). An updated version, BIC-seq2, was published in 2016 (Xi et al, Nucleic Acids Research, 2016). The main difference in BIC-seq2 is to not require a paired control, i.e., it can be used both for somatic and germline CNV calls.

<br>

### Epigenetics
---

__Antibody Validation Database__ ([http://compbio.med.harvard.edu/antibodies/](http://compbio.med.harvard.edu/antibodies/))<br>This site contains antibody validation data from ENCODE, modENCODE, and Epigenome Roadmap projects. See Egelhoferet al(2011) for details

__ChIP-seq analysis (SPP)__ ([http://compbio.med.harvard.edu/Supplements/ChIP-seq](http://compbio.med.harvard.edu/Supplements/ChIP-seq))<br>This R package by Peter Kharchenko implements tools for analysis of sequencing data from chromatin immunoprecipitation experiments. It includes normalization of the binding profile, detection of enriched regions, and an estimate of read depth needed to achieve saturation of binding sites. See Kharchenkoet al,Nature Biotechnology(2008) for details.

__Repeat enrichment estimator__ ([http://compbio.med.harvard.edu/repeats/](http://compbio.med.harvard.edu/repeats/))<br>This tool aims to measure the enrichment of annotated repeat types in ChIP-seq data

__Quantized correlation coefficient (QCC)__ ([https://compbio.med.harvard.edu/Supplements/BMCBioinfo10.html](http://compbio.hms.harvard.edu/peng-et-al-bmc-bioinformatics-2010))<br>This R package computes a robust measurement of the reproducibility of ChIP-chip data.

ChIP-chip normalizationThe R package is available [here (v1.0.1)](http://compbio.hms.harvard.edu/files/parklab/files/chipchipnorm_1.0.1.tar.gz). Here is the [instruction sheet](http://compbio.hms.harvard.edu/files/parklab/files/chipchipnorm.pdf) (part of the package).

<br>

### RNA-seq data
---

__EMSAR__ ([https://github.com/parklab/emsar](https://github.com/parklab/emsar))<br>This program quantifies gene and mRNA isoform expression levels from RNA-seq data.

<br>

### Data Visualization
---

__Nozzle__ ([https://confluence.broadinstitute.org/display/GDAC/Nozzle](https://confluence.broadinstitute.org/display/GDAC/Nozzle))<br>A report generation toolkit for data analysis pipelines.

Also available at CRAN: [http://cran.r-project.org/web/packages/Nozzle.R1/index.html](http://cran.r-project.org/web/packages/Nozzle.R1/index.html). The source code is available at [https://github.com/parklab/Nozzle](https://github.com/parklab/Nozzle).

__StratomeX: Visual Analysis of Large-Scale Heterogeneous Genomics Data for Cancer Subtype__ ([http://compbio.med.harvard.edu/tcga/stratomex/](http://compbio.med.harvard.edu/tcga/stratomex/))<br>This is a visual exploration tool for identification and characterization of clusters and correlations in genomics data

__modENCODE chromatin data browser__ ([http://compbio.med.harvard.edu/flychromatin/](http://compbio.med.harvard.edu/flychromatin/))<br>This website allows one to explore the enrichment profiles of histone marks and chromosomal proteins in theDrosophilagenome.

<br>

### Others
---

__NGSCheckMate__ ([https://github.com/parklab/NGSCheckMate](https://github.com/parklab/NGSCheckMate))<br>Software for validating sample identity in next-generation sequencing studies within and across data types. It works for a variety of data types, including whole-genomes, whole-exomes, RNA-seq, ChIP-seq, and targeted panel.

__CGHweb__ ([http://compbio.med.harvard.edu/CGHweb](http://compbio.med.harvard.edu/CGHweb))<br>This tool provides an interface to apply several popular algorithms to segment a copy-number profile from CGH (comparative genomic hybridization) data. It generates a heatmap panel of the segmented profiles for each method as well as a consensus profile. The clickable heatmap can be moved along the chromosome and zoomed in or out. It also displays the time that each algorithm took and provides numerical values of the segmented profiles for download.

__nuScore__ ([http://compbio.med.harvard.edu/nuScore](http://compbio.med.harvard.edu/nuScore/))<br>This allows estimation of the affinity of the histone core to DNA and prediction of nucleosome arrangement on a given sequence. The algorithm is based on assessment of the energy cost of imposing the deformations required to wrap DNA around the histone surface

CrossChipThis tool is for integrating data from multiple generations of Affymetrix GeneChips. Matching probes based on Affymetrix "best-match" is inadequate for most analyses. This tool allows the user to derive a list of similar probes based on the user-specified criteria on probe sequence similarity and the minimum number of probe pairs needed for each probe set.

sigPathway(for finding significant pathways from microarray data)For the R package, please see the [Supplementary Material page](http://compbio.hms.harvard.edu/tian-et-al-proc-natl-acad-sci-usa-2005) for the Tian et al article (Proc Natl Acad Sci,2005).