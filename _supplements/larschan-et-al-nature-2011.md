---
layout: supplement
page_name: supplement
year: 2011
abstract_description: "The evolution of sex chromosomes has resulted in numerous species in which females inherit two X chromosomes but males have a single X, thus requiring dosage compensation. MSL (Male-specific lethal) complex increases transcription on the single X chromosome of Drosophila males to equalize expression of X-linked genes between the sexes. The biochemical mechanisms used for dosage compensation must function over a wide dynamic range of transcription levels and differential expression patterns. It has been proposed that the MSL complex regulates transcriptional elongation to control dosage compensation, a model subsequently supported by mapping of the MSL complex and MSL-dependent histone 4 lysine 16 acetylation to the bodies of X-linked genes in males, with a bias towards 3′ ends. However, experimental analysis of MSL function at the mechanistic level has been challenging owing to the small magnitude of the chromosome-wide effect and the lack of an in vitro system for biochemical analysis. Here we use global run-on sequencing (GRO-seq) to examine the specific effect of the MSL complex on RNA Polymerase II (RNAP II) on a genome-wide level. Results indicate that the MSL complex enhances transcription by facilitating the progression of RNAP II across the bodies of active X-linked genes. Improving transcriptional output downstream of typical gene-specific controls may explain how dosage compensation can be imposed on the diverse set of genes along an entire chromosome."
link: "./larschan-et-al-nature-2011"
link_text: "Larschan et al, X chromosome dosage compensation via enhanced transcriptional elongation in Drosophila Nature, 2011"
data_files:
    - title: "Table of EDIs, PIs, EDI Ratios and PI Ratios for Expressed Genes"
      src: "gene_edi_pi_combined.txt"
      size: "642 KB"
    - title: "GROSeq, Untreated Sample, Positive Strand Read Density (Not Yet Normalized By Copy Number)"
      src: "untreated.pos_.wig_.zip"
      size: "63.12 MB"
    - title: "GROSeq, Untreated Sample, Negative Strand Read Density (Not Yet Normalized By Copy Number)"
      src: "untreated.neg_.wig_.zip"
      size: "63.28 MB"
    - title: "GROSeq, Control RNAi Sample, Positive Strand Read Density (Not Yet Normalized By Copy Number)"
      src: "gfp.pos_.wig_.zip"
      size: "71.78 MB"
    - title: "GROSeq, Control RNAi Sample, Negative Strand Read Density (Not Yet Normalized By Copy Number)"
      src: "gfp.neg_.wig_.zip"
      size: "71.89 MB"
    - title: "GROSeq, MSL2 RNAi Sample, Positive Strand Read Density (Not Yet Normalized By Copy Number)"
      src: "msl.pos_.wig_.zip"
      size: "73.62 MB"
    - title: "GROSeq, MSL2 RNAi Sample, Negatvive Strand Read Density (Not Yet Normalized By Copy Number)"
      src: "msl.neg_.wig_.zip"
      size: "73.77 MB"
    - title: "Genomic Read Density (For Copy Number Normalization)"
      src: "genomic.ctl_.wig_.zip"
      size: "93.94 MB"
---

	
	
	
	
		


Please direct your questions to Peter J. Park.

Read density files represent smoothed read density (gaussian smoothing, bandwidth=200bp), normalized for dataset size, but not yet by copy number. An additional file containing smoothed read density of genomic sequencing data is provided for copy number normalization. All coordinates are for dm3 assembly.

Note that PI/EDIs are not derived from smoothed read density, provided above, but from ratios of unsmoothed read density, as described in the methods section.

