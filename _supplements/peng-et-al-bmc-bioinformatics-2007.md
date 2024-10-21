---
layout: supplement
page_name: supplement
year: 2007
abstract_description: "BACKGROUND Chromatin immunoprecipitation on tiling arrays (ChIP-chip) has been widely used to investigate the DNA binding sites for a variety of proteins on a genome-wide scale. However, several issues in the processing and analysis of ChIP-chip data have not been resolved fully, including the effect of background (mock control) subtraction and normalization within and across arrays."
link: "./peng-et-al-bmc-bioinformatics-2007"
link_text: "Peng et al, Normalization and experimental design for ChIP-chip data, BMC Bioinformatics, 2007"
data_files:
    - title: "NimbleGen Data: Probe Design File (NDF)"
      size: "16.56 MB"
      src: "2004-11-30_kuroda_dmel_chip.zip"
---

Please direct your questions to Peter J. Park.

All work was done in R; RData is the workspace that can be loaded into R directly. The code has not been fully annotated, but a proficient R programmer should be able to understand it easily.  Here, we provide the R code (28K) and  (5.25MB) to generate the key figures in the paper.

__NimbleGen Data__

The raw data are available in [GEO (Series GSE8575)](http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE8575)

To facilitate the data processing, we are also providing the "MA" data [here](../files/mc07_tiling_arrays_log2_ratios.txt) (26Mb). M = log(R/G), and A = log(R*G)/2, where R and G are the intensities of the two-channels.

File description for MA data:
1. chromosome
2. probe location (start)
3. probe location (end)
4. M for MSL3-TAP (Embryos) replicate #1
5. A for MSL3-TAP (Embryos) replicate #1
6. M for MSL3-TAP (Embryos) replicate #1 (mock control)
7. A for MSL3-TAP (Embryos) replicate #1 (mock control)
8. M for MSL3-TAP (Embryos) replicate #2
9. A for MSL3-TAP (Embryos) replicate #2
10. M for MSL3-TAP (Embryos) replicate #2 (mock control)
11. A for MSL3-TAP (Embryos) replicate #2 (mock control)
