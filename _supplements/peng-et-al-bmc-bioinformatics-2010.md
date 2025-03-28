---
layout: supplement
page_name: supplement
year: 2010
journal: "BMC Bioinformatics"
abstract_description: "Chromatin immunoprecipitation followed by microarray hybridization (ChIP-chip) is used to study protein-DNA interactions and histone modifications on a genome-scale. To ensure data quality, these experiments are usually performed in replicates, and a correlation coefficient between replicates is used often to assess reproducibility. However, the correlation coefficient can be misleading because it is affected not only by the reproducibility of the signal but also by the amount of binding signal present in the data. We develop the Quantized correlation coefficient (QCC) that is much less dependent on the amount of signal. This involves discretization of data into set of quantiles (quantization), a merging procedure to group the background probes, and recalculation of the Pearson correlation coefficient. This procedure reduces the influence of the background noise on the statistic, which then properly focuses more on the reproducibility of the signal. The performance of this procedure is tested in both simulated and real ChIP-chip data. For replicates with different levels of enrichment over background and coverage, we find that QCC reflects reproducibility more accurately and is more robust than the standard Pearson or Spearman correlation coefficients. The quantization and the merging procedure can also suggest a proper quantile threshold for separating signal from background for further analysis."
link: "./peng-et-al-bmc-bioinformatics-2010"
link_text: "Peng et al, Quantized correlation coefficient for measuring reproducibility of ChIP-chip data, BMC Bioinformatics, 11:399, 2010"
data_files:
    - title: "QCC 1.1 R Package"
      source_url: "https://compbio.hms.harvard.edu/sites/projects.iq.harvard.edu/files/parklab/files/qcc_1.1.tar.gz"
      src: "qcc_1.1.tar.gz"
      size: "20.52 MB"
---

Please direct your questions to Peter J. Park.

The R package is available below or from [SourceForge](http://sourceforge.net/projects/quantizedcorrel/).  Please try ```demo(example)``` after ```library(qcc)``` to see an example.

