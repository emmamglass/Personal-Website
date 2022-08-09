import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export const papinLab = () => {
  return (
    <div className={styles.dropdown}>
      <h4><i>Ecological Niche Constrains Evolution of Metabolic Function in Pathobionts</i> <span>(Manuscript in Preparation)</span></h4>
      <p>
        I developed an automated python pipeline to create a database of 914 genome scale metabolic
        network reconstructions (GENREs) of all known human bacterial pathogens to explore
        questions related to long-term evolution of phenotypes and the impact of environment on
        pathogen relatedness. I utilized machine learning techniques such as dimensionality reduction
        via t-SNE and linear regression to analyze the GENREs.
      </p>
      <a href='/files/Ecological-Niche-Constrains-Evolution-of-Metabolic-Function-in-Pathobionts.pdf' target='_blank' rel='noopener noreferrer'>Abstract</a>
      <a href='https://github.com/emmamglass/PATHGENN' target='_blank' rel='noopener noreferrer'>View Source</a>
      <h4><i>Metabolic Analysis of the Gardnerella Pangenome in silico</i> <span>(Manuscript Under Review)</span></h4>
      <p>
        I worked with a senior graduate student to characterize the pangenome of Gardnerella, the
        genus implicated in bacterial vaginosis. I created 110 genome scale metabolic network
        reconstructions of all sequenced Gardnerella strains. We then utilized machine learning
        methods such as dimensionality reduction via t-SNE, hierarchical clustering, and random forest.
      </p>
      <a href='/files/Metabolic-Analysis-of-the-Gardnerella-Pangenome-in-silico.pdf' target='_blank' rel='noopener noreferrer'>Abstract</a>
      <a href='https://github.com/emmamglass/Gardnerella_Pangenome' target='_blank' rel='noopener noreferrer'>View Source</a>
      <h4><i>Reconstructor: a COBRApy compatible tool for automated genome scale metabolic network reconstructions through parsimonious flux-based gap-filling</i> <span>(Manuscript in Preparation)</span></h4>
      <p>
        I worked with a Post Doc to develop and package a novel tool, Reconstructor, that utilizes a
        parsimonious flux-based gap-filling method to create automated genome scale metabolic
        network reconstructions. I packaged the tool and have made it available through PyPi and on
        Github.
      </p>
      <a href='https://github.com/emmamglass/reconstructor' target='_blank' rel='noopener noreferrer'>View Source</a>
      <h4><i>Comparative Genomics and Phenomics Reveal Genetic and Functional Diversity within Pseudomonas aeruginosa Isolates</i> <span>(Manuscript in Preparation)</span></h4>
      <p>
        I am working on phenotypically profiling 25 clinical isolates of Pseudomonas aeruginosa using
        BIOLOG carbon source utilization assays in the wet lab. This component of the project will be
        used in conjunction with genome sequence data, rna sequence data, and metabolomics data to
        create a very well characterized set of clinical isolates.
      </p>
      <a href='/files/Comparative-Genomics-and-Phenomics-Reveal-Genetic-and-Functional-Diversity-within-Pseudomonas-aeruginosa-Isolates.pdf' target='_blank' rel='noopener noreferrer'>Abstract</a>
    </div>
  )
}

export const raviLab = () => {
  return (
    <div className={styles.dropdown}>
      <h4><i>Multiphysics pharmacokinetic model for targeted nanoparticles</i> <span>(Published)</span></h4>
      <p>
        I worked with Dr. Radhakrishan as part of the Center for Engineering Mechanobiology REU at
        the University of Pennsylvania on a multiphysics pharmacokinetic model for targeted
        nanoparticle therapeautics. I developed and validated a MATLAB based ordinary differential
        equation model of over 400 ordinary differential equations that describe biodistribution of
        nanoparticles. Although this project began as a summer project, I continued my collaboration
        with Dr. Radhakrishnan over the following two years, and ultimately publishing my second first
        author paper.
      </p>
      <a href='/files/fmedt-04-934015.pdf' target='_blank' rel='noopener noreferrer'>Paper</a>
      <a href='/files/BMES_Poster_2020-2.pdf' target='_blank' rel='noopener noreferrer'>Poster</a>
    </div>
  )
}

export const smithLab = () => {
  return (
    <div className={styles.dropdown}>
      <h4><i>Determining subunit cooperativity in CaMKII using a minimal mathematical model</i></h4>
      <p>
        I worked with Greg Conradi Smith in the Computational Biology Lab at William and Mary for
        several semesters to construct a minimal model of CaMKII, a kinase. We investigated how
        cooperativity between kinase subunits depends on model parameters; in particular, pairwise
        interaction energies between CaM-bound (i.e., primed) and phosphorylated subunits. We
        investigated these questions using graph theoretical and statistical mechanics approaches.
      </p>
      <a href='/files/Research_Notes__CaMKII_Project.pdf' target='_blank' rel='noopener noreferrer'>Research Notes</a>
    </div>
  )
}

export const chitnisLab = () => {
  return (
    <div className={styles.dropdown}>
      <h4><i>Visualizing Compound Action Potential Propagation With High Frequency Ultrasound</i></h4>
      <p>
        While working on branching into the biomedical sciences, I worked as a summer undergraduate
        research intern in Dr. Parag Chitnis&#39; Biomedical Imaging Lab at George Mason University during
        the summer of 2018 on a project that had the goal of using ultrasound imaging to visualize
        neural activity in lobster nerves. This project was the first step in working toward developing
        non-invasive electrophysiological recording technologies by utilizing high frequency ultrasound
        imaging techniques.
      </p>
      <a href='/files/2018assipposterEmmaGlass.pdf' target='_blank' rel='noopener noreferrer'>Poster</a>
    </div>
  )
}

export const ferreriaLab = () => {
  return (
    <div className={styles.dropdown}>
      <h4><i>Potential of marshes to attenuate storm surge water level in the Chesapeake Bay</i> <span>(Published)</span></h4>
      <p>
        I worked initially as a high school summer research intern during the summer of 2016 in Dr.
        Celso Ferreria&#39;s Flood Hazards Research Lab as George Mason University, but our
        collaboration continued for the following year an a half. I focused on analyzing and interpreting
        water level data to quantify the ability of the Chesapeake Bay wetlands to attenuate storm surge
        water levels. Using previous collected longitudinal data in excel files, I utilized MATLAB to
        quantify water-level attenuation over several years. Ultimately, this project became my first first
        author paper, and was pulished in the Journal of Limnology and Oceanography.
      </p>
      <a href='/files/Liminology-Oceanography.pdf' target='_blank' rel='noopener noreferrer'>Paper</a>
    </div>
  )
}