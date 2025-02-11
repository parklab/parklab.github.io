---
layout: supplement
page_name: supplement
year: 2005
journal: "Bioinformatics"
abstract_description: "MOTIVATION: Array Comparative Genomic Hybridization (CGH) can reveal chromosomal aberrations in the genomic DNA. These amplifications and deletions at the DNA level are important in the pathogenesis of cancer and other diseases. While a large number of approaches have been proposed for analyzing the large array CGH datasets, the relative merits of these methods in practice are not clear. RESULTS: We compare 11 different algorithms for analyzing array CGH data. These include both segment detection methods and smoothing methods, based on diverse techniques such as mixture models, Hidden Markov Models, maximum likelihood, regression, wavelets and genetic algorithms. We compute the Receiver Operating Characteristic (ROC) curves using simulated data to quantify sensitivity and specificity for various levels of signal-to-noise ratio and different sizes of abnormalities. We also characterize their performance on chromosomal regions of interest in a real dataset obtained from patients with Glioblastoma Multiforme. While comparisons of this type are difficult due to possibly sub-optimal choice of parameters in the methods, they nevertheless reveal general characteristics that are helpful to the biological investigator."
link: "./lai-et-al-bioinformatics-2005"
link_text: "Lai et al, Comparative analysis of algorithms for identifying amplifications and deletions in array CGH data, Bioinformatics, 2005"
---

Please direct your questions to Peter J. Park.

In addition to some additional information related to the above paper, we also hope to have here other information to help the researchers in this field. Your contributions are welcomed. If you're looking for help with your analysis, see the FAQ section below.

### Tables and Figures

__Table 1.__ List of Algorithms Tested in This Paper with links to their websites

__Name__ | __Reference__ | __Method__ | __Software__ | __Type__
CGHseg | Picard et al. (2005) | CGH Segmentation | [CGHseg](http://web.inapg.fr/ens_rech/mathinfo/recherche/mathematique/outil_A.html), Nov. 2004 (MATLAB)	| E
Quantreg | Eilers and de Menezes (2005) | Quantile Smoothing | [quantreg](http://cran.r-project.org/src/contrib/PACKAGES.html), v3.76 (R)*	| S
CLAC | Wang et al. (2005) | Clustering Along Chromosomes | [CLAC](http://www-stat.stanford.edu/~wp57/CGH-Miner/), v01-1 (R)	| S, E
GLAD | Hupe et al. (2004) | Adaptive Weights Smoothing | [GLAD](http://bioinfo-out.curie.fr/projects/glad/index.html), v1.0.2 (R)	| S, E
CBS | Olshen et al. (2004) | Circular Binary Segmentation | [DNAcopy](http://www.mskcc.org/mskcc/html/18551.cfm), v1.1.1 (R)	| E
HMM | Fridlyand et al. (2004) | Hidden Markov Model | [aCGH](http://www.biostat.ucsf.edu/janef/), v1.1.4 (R)	| E
Wavelet | Hsu et al. (2005) | Maximal Overlap Discrete Wavelet Transform | [waveslim](http://cran.r-project.org/src/contrib/PACKAGES.html), v1.4 (R)*	| S
Lowess | | Locally Weighted Regression | [stats](http://cran.r-project.org/), v2.0.1 (R)*	| S
ChARM | Myers et al. (2004) | Chromosomal Aberration Region Miner | [ChARM](http://function.princeton.edu/ChARM/), v1.6 (JAVA)	| S, E
GA | Jong et al. (2003) | Genetic Local Search | [aCGHSmooth](http://www.few.vu.nl/~vumarray/), Nov. 2004 (exec)	| E
ACE | Lingjaerde et al. (2005) | Analysis of Copy Errors | [CGH-Explorer](http://www.ifi.uio.no/forskning/grupper/bioinf/Papers/CGH/), v2.3 (JAVA)	| S, E

For the last column, 'S' and 'E' indicate that the algorithm has a step for smoothing and estimation, respectively. Three methods (Quantreg, Wavelet, and Lowess) are for smoothing only. Some methods or packages did not have specific names; others had names that are too generic. We have created short abbreviations in such cases (e.g., we have called the method in Picard et al. (2005) based on the name of their downloadable file). These names are used in the subsequent figures. * indicates those using existing R packages: Quantreg and Wavelet methods were implemented by us based on the descriptions given in the papers; Lowess is our implementatino using the existing R function. CGHseg was ported to R from MATLAB by us.

Figure 1: [high resolution PDF](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_figure_1.pdf)

Figure 2: [high resolution PDF](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_figure_2.pdf)

Figure 3: [high resolution PDF](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_figure_3.pdf)

Figure 4: [high resolution PDF](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_figure_4.pdf)


### Data Used in the Analysis

- Profile in Figure 1: [Lai_et_al_Figure_1_data.xls](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_figure_1_data.xls) (140K)
- Profiles of artificial chromosomes in the Simulated Data: [Lai_et_al_art_chrom_profiles.xls](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_art_chrom_profiles.xls) (3MB)
- The true and false positive rates used in plotting Figure 2: [Lai_et_al_TPR_FPR_profiles.xls](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_tpr_fpr_profiles.xls) (620KB)
- Normalized glioblastoma profiles from the data set of Bredel et al. (2005)
- The raw data can be found at the Stanford Microarray Database: [Click Here to be Directed to the Raw Data](http://smd.stanford.edu/cgi-bin/publication/viewPublication.pl?pub_no=452)
- Chromosome 13 in GBM31 (used in Figure 3): Chrom_13_GBM31.xls (120KB)
- Excerpt of chromosome 7 in GBM29 from 40 to 65 Mb (used in Figure 4): [Chrom_7_from40_to65Mb_GBM29.xls](http://compbio.hms.harvard.edu/files/parklab/files/chrom_7_from40_to65mb_gbm29.xls) (40KB)
- All of the GBM profiles: [GBM_normalized_using_Bredel_et_al_dataset.xls](http://compbio.hms.harvard.edu/files/parklab/files/gbm_normalized_using_bredel_et_al_dataset.xls) (24MB)


### Frequently Asked Questions


__Can I obtain the R implementation of the CGHseg algorithm by Picard et al?__

Since the paper's publication, we have found that the tilingArray package on BioConductor also implements the breakpoint estimation step of the algorithm. A sample R code which uses this package and selects the optimal breakpoint can be found here: [example_Picard.R](http://compbio.hms.harvard.edu/files/parklab/files/example_picard_r.zip)


__Where can I download the implementations for the algorithms?__

Unfortunately, we do not have a simple R function that will automatically run all the algorithms. We understand that this would be convenient for many people who are interested in comparing their new algorithm to the existing ones, but writing such a function involves too much work, both in dealing with many different interfaces required by different algorithms and in keeping up with the changes to the packages. Please check the links provided in Table 1 to learn about the details of each algorithm.


__What are the settings used for each algorithm?__

When possible, we used the default settings given in the algorithms.  A more detailed list of settings used can be downloaded here: [Lai_et_al_algorithm_settings.txt](http://compbio.hms.harvard.edu/files/parklab/files/lai_et_al_algorithm_settings.txt)


__How are true positive rates (TPRs) and false positive rates (FPRs) calculated in the simulated data?__

TPR = (the number of probes within the aberration width that is above a threshold) / (the total number of probes within the aberration width)
FPR = (the number of probes outside the aberration width that is above a threshold) / (the total number of probes outside the aberration width)


__For algorithms that do not automatically call a region a gain/loss or an amplification/deletion, how does one do so?__
_ome researchers define thresholds for gains and losses based on the amplitudes of known regions of aberrations from other array data. Others scale their thresholds based on the noise level (e.g., standard deviation) of their array data.


__We have some array data we would like to analyze. Can you help?__

We are open to collaborations, both in methodological research and in their applications. We do not, however, have time to provide (free) analysis for your data. If you are generating or plan to generate a substantial amount of data for an interesting biological problem, we are open to discussion, especially if you're in the Boston Longwood Medical Area.

__Whom may I contact for more information?__

Correspondences should be addressed to Peter Park: [peter_park@harvard.edu](mailto:peter_park@harvard.edu?subject=Lai%20et%20al.%20array%20CGH%20paper%20inquiry)


### Bibliography

Autio, R., Hautaniemi, S., Kauraniemi, P., Yli-Harja, O., Astola, J., Wolf, M. and Kallioniemi, A. (2003) CGH-Plotter: MATLAB toolbox for CGH-data analysis. Bioinformatics, 19, 1714–1715.

Brennan, C., Zhang, Y., Leo, C., Feng, B., Cauwels, C., Aguirre, A. J., Kim, M., Protopopov, A. and Chin, L. (2004) High-resolution global profiling of genomic alterations with long oligonucleotide microarray. Cancer Res, 64, 4744–4748.

Daruwala, R.-S., Rudra, A., Ostrer, H., Lucito, R., Wigler, M. and Mishra, B. (2004) A versatile statistical analysis algorithm to detect genome copy number variation. Proc Natl Acad Sci U S A, 101, 16292–16297.

Eilers, P. H. C. and de Menezes, R. X. (2005) Quantile smoothing of array CGH data. Bioinformatics, 21, 1146–1153.

Fridlyand, J., Snijders, A. M., Pinkel, D., Albertson, D. G. and Jain, A. (2004) Hidden Markov models approach to the analysis of array CGH data. Journal of Multivariate Analysis, 90, 132–153.

Hsu, L., Self, S. G., Grove, D., Randolph, T., Wang, K., Delrow, J. J., Loo, L. and Porter, P. (2005) Denoising array-based comparative genomic hybridization data using wavelets. Biostatistics, 6, 211–226.

Hupe, P., Stransky, N., Thiery, J.-P., Radvanyi, F. and Barillot, E. (2004) Analysis of array CGH data: from signal ratio to gain and loss of DNA regions. Bioinformatics, 20, 3413–3422.

Jong, K., Marchiori, E., Meijer, G., Vaart, A. V. D. and Ylstra, B. (2004) Breakpoint identification and smoothing of array comparative genomic hybridization data.Bioinformatics, 20, 3636–3637.

Jong, K., Marchiori, E., van der Vaart, A., Ylstra, B., Meijer, G. and Weiss, M. (2003) Chromosomal breakpoint detection in human cancer. In Lecture Notes in Computer Science, volume 2611. Springer.

Lingjaerde, O. C., Baumbusch, L. O., Liestol, K., Glad, I. K. and Borresen-Dale, A.-L. (2005) CGH-Explorer: a program for analysis of array-CGH data. Bioinformatics, 21, 821–822.

Lucito, R., Healy, J., Alexander, J., Reiner, A., Esposito, D., Chi, M., Rodgers, L., Brady, A., Sebat, J., Troge, J., West, J. A., Rostan, S., Nguyen, K. C. Q., Powers, S., Ye, K. Q., Olshen, A., Venkatraman, E., Norton, L. and Wigler, M. (2003) Representational oligonucleotide microarray analysis: a high-resolution method to detect genome copy number variation. Genome Res, 13, 2291–2305.

Myers, C. L., Dunham, M. J., Kung, S. Y. and Troyanskaya, O. G. (2004) Accurate detection of aneuploidies in array CGH and gene expression microarray data. Bioinformatics, 20, 3533–3543.

Olshen, A. B. and Venkatraman, E. S. (2002) Change-point analysis of array-based comparative genomic hybridization data. In American Statistical Association Proceedings of the Joint Statistical Meetings, pp. 2530–2535. American Statistical Association, Alexandria, VA.

Olshen, A. B., Venkatraman, E. S., Lucito, R. and Wigler, M. (2004) Circular binary segmentation for the analysis of array-based DNA copy number data. Biostatistics, 5, 557–572.

Picard, F., Robin, S., Lavielle, M., Vaisse, C. and Daudin, J.-J. (2005) A statistical approach for array CGH data analysis. BMC Bioinformatics, 6, 27.

Polzehl, J. and Spokoiny, V. (2000) Adaptive weights smoothing with applications to image restoration. J. R. Statist. Soc. B, 62, Part 2, 335–354.

Sebat, J., Lakshmi, B., Troge, J., Alexander, J., Young, J., Lundin, P., Maner, S., Massa, H., Walker, M., Chi, M., Navin, N., Lucito, R., Healy, J., Hicks, J., Ye, K., Reiner, A., Gilliam, T. C., Trask, B., Patterson, N., Zetterberg, A. and Wigler, M. (2004) Large-scale copy number polymorphism in the human genome. Science, 305, 525–528.

Solinas-Toldo, S., Lampel, S., Stilgenbauer, S., Nickolenko, J., Benner, A., Dohner, H., Cremer, T. and Lichter, P. (1997) Matrix-based comparative genomic hybridization: biochips to screen for genomic imbalances. Genes Chromosomes Cancer, 20, 399–407.

Wang, P., Kim, Y., Pollack, J., Narasimhan, B. and Tibshirani, R. (2005) A method for calling gains and losses in array CGH data. Biostatistics, 6, 45–58.

