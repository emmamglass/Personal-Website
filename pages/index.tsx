import type { NextPage } from 'next'
import {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { chitnisLab, ferreriaLab, papinLab, raviLab, smithLab } from '../dropdowns/dropdown'


const Home: NextPage = () => {
  const [papin, setPapin] = useState(false)
  const [fer, setFer] = useState(false)
  const [rad, setRad] = useState(false)
  const [chit, setChit] = useState(false)
  const [con, setCon] = useState(false)

  function handlePapin () {
    setPapin(!papin)
  }
  
  function handleFerreria () {
    setFer(!fer)
  }
  
  function handleRadhakrishnan () {
    setRad(!rad)
  }
  
  function handleChitnis () {
    setChit(!chit)
  }
  
  function handleConradi () {
    setCon(!con)
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Emma Glass</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sidebar}>
        <div className={styles.sidebarimage} />
        <p className={styles.profilecaption}>Emma Glass <br/> 415 Lane Road, Room 2041 <br/> Charlottesville, VA 22903</p>
        <ul className={styles.linklist} >
          <li>
          <a className={styles.link} href='https://github.com/emmamglass' target='_blank' rel='noopener noreferrer' >
            <img src='github.png'/>
            Github
          </a>
          </li>
          <li>
          <a className={styles.link} href='https://www.linkedin.com/in/emma-glass-64713316a' target='_blank' rel='noopener noreferrer' >
            <img src='linkedin.png'/>
            LinkedIn
          </a>
          </li>
          <li>
          <a className={styles.link} href='https://twitter.com/EmmaGlass33' target='_blank' rel='noopener noreferrer'>
            <img src='twitter.png'/>
            Twitter
          </a>
          </li>
        </ul>
      </div>

      <div className={styles.main}>
        <h1 className={styles.title}>
          Emma Glass
        </h1>

        <h2>
          About
        </h2>

        <p>
          I am a Biomedical Engineering PhD student at the University of Virginia working in the <a href='https://www.papinlab.org/' target='_blank'>Computational Systems Biology Lab</a> under <a href='https://engineering.virginia.edu/faculty/jason-papin' target='_blank'>Dr. Jason Papin</a>. Prior to graduate school, I completed my undergraduate degree in <a href='https://www.wm.edu/as/cams/index.php' target='_blank'>Computational and Applied Mathematics and Statistics (CAMS)</a> at William and Mary in December of 2020.
        </p> 
        <p>
          I am interested in combining computational systems biology, biomedical data science, and mathematical modeling approaches to address biological questions implicated in human health. In my graduate studies, I am specifically interested in better understanding the mechanisms of pathogenic bacteria by exploring functional metabolism, long-term phenotypic evolution, and the impact of environment on pathogen adaptation.
        </p>
        <p>
          My graduate research has been funded by the <a href='https://www.nsfgrfp.org/' target='_blank'>NSF Graduate Research Fellowship (GRFP)</a>, <a href='https://engineering.virginia.edu/news/2016/04/nih-t32-training-grant-biomedical-data-sciences' target='_blank'>NIH T32 Biomedical Data Sciences Training Grant</a>, and was awarded the UVA Distinguished Fellowship.
        </p>

        <h2 style={{ marginBottom: '4px' }}>
          Notable Projects
        </h2>

        <button onClick={handlePapin}>
          <img src='dropdown.png' className={` ${styles.arrow} ${papin ? styles.rotated : ''}` }/>
          <p>Jason Papin's Computational Systems Biology Lab, UVA {'(2021-Present)'}</p>
        </button>
        {papin ? papinLab() : ''}
        <br/>
        <button onClick={handleRadhakrishnan}>
          <img src='dropdown.png' className={` ${styles.arrow} ${rad ? styles.rotated : ''}` }/>
          <p>Ravi Radhakrishnan's Biomolecular Systems Lab, UPenn {'(2019-2021)'}</p>
        </button>
        {rad ? raviLab() : ''}
        <br/>
        <button onClick={handleConradi}>
          <img src='dropdown.png' className={` ${styles.arrow} ${con ? styles.rotated : ''}` }/>
          <p>Greg Conradi Smith's Computational Biology Lab, {'W&M (2018-2019)'}</p>
        </button>
        {con ? smithLab() : ''}
        <br/>
        <button onClick={handleChitnis}>
          <img src='dropdown.png' className={` ${styles.arrow} ${chit ? styles.rotated : ''}` }/>
          <p>Parag Chitnis' Biomedical Imaging Lab, GMU {'(Summer 2018)'}</p>
        </button>
        {chit ? chitnisLab() : ''}
        <br/>
        <button onClick={handleFerreria}>
          <img src='dropdown.png' className={` ${styles.arrow} ${fer ? styles.rotated : ''}` }/>
          <p>Celso Ferreria's Flood Hazards Research Lab, GMU {'(2016-2017)'}</p>
        </button>
        {fer ? ferreriaLab() : ''}
      </div>
    </div>
  )
}

export default Home
