---
layout: supplement
page_name: supplement
year: 2007
journal: "BMC Bioinformatics"
abstract_description: "BACKGROUND Chromatin immunoprecipitation on tiling arrays (ChIP-chip) has been widely used to investigate the DNA binding sites for a variety of proteins on a genome-wide scale. However, several issues in the processing and analysis of ChIP-chip data have not been resolved fully, including the effect of background (mock control) subtraction and normalization within and across arrays."
link: "./peng-et-al-bmc-bioinformatics-2007"
link_text: "Peng et al, Normalization and experimental design for ChIP-chip data, BMC Bioinformatics, 2007"
data_files:
    - title: "NimbleGen Data: Probe Design File (NDF)"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/2004-11-30_kuroda_dmel_chip.zip"
      src: "2004-11-30_kuroda_dmel_chip.zip"
      size: "16.56 MB"
---

Please direct your questions to Peter J. Park.

All work was done in R; RData is the workspace that can be loaded into R directly. The code has not been fully annotated, but a proficient R programmer should be able to understand it easily. Here, we provide the [R code](http://compbio.hms.harvard.edu/files/parklab/files/getfigs4.6.7_chipchipmethod.zip) (28K) and  (5.25MB) to generate the key figures in the paper.

__NimbleGen Data__

The raw data are available in [GEO (Series GSE8575)](http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE8575)

To facilitate the data processing, we are also providing the "MA" data [here](http://compbio.hms.harvard.edu/files/parklab/files/bmc07_tiling_arrays_ma.txt) (26Mb). M = log(R/G), and A = log(R*G)/2, where R and G are the intensities of the two-channels.

File description for MA data:
<br/>__1.__ chromosome
<br/>__2.__ probe location (start)
<br/>__3.__ probe location (end)
<br/>__4.__ M for MSL3-TAP (Embryos) replicate #1
<br/>__5.__ A for MSL3-TAP (Embryos) replicate #1
<br/>__6.__ M for MSL3-TAP (Embryos) replicate #1 (mock control)
<br/>__7.__ A for MSL3-TAP (Embryos) replicate #1 (mock control)
<br/>__8.__ M for MSL3-TAP (Embryos) replicate #2
<br/>__9.__ A for MSL3-TAP (Embryos) replicate #2
<br/>__10.__ M for MSL3-TAP (Embryos) replicate #2 (mock control)
<br/>__11.__ A for MSL3-TAP (Embryos) replicate #2 (mock control)
