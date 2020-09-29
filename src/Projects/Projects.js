/* eslint-disable react/jsx-no-target-blank */
import React, {useState, useEffect} from 'react'
import { gsap } from 'gsap'

// Images
import ozone from '../assets/images/ozone.png'
import pdf from '../assets/images/pdf3.png'
import timer from '../assets/images/timer2.png'
import pwero from '../assets/images/pwero.png'
import angular from '../assets/images/angular.png'


// Icons
import { FaEye } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { FaReact } from 'react-icons/fa'
import { SiMaterialUi } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { SiAngular } from 'react-icons/si'
import { FaGithubAlt } from 'react-icons/fa'

function Projects() {
  
  
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () =>setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    console.log(width);
  },[width])
  
  const projects = [
    {
      id: 1,
      image: ozone,
      screenshot: '',
      title: 'oZone',
      techno: "Projet de fin d'études O'Clock",
      subtechno: 'React, Redux, MaterialUI, JWT',
      description: 'Projet écologique',
      linkGitHub: 'https://github.com/ssiohan/ozone-frontend',
      linkProject: 'https://ozone.best/',
      classname: 'ozone',
      stack: 'Front-end / React',
      techno1Icon: FaReact,
      techno1Color: '#61DBFB',
      techno2Icon: SiRedux,
      techno2Color: '#7248B6',
      resume: 'Méthode',
      resume2: 'Agile'
      
    },
    {
      id: 2,
      image: pwero,
      screenshot: '',
      title: 'Trainer',
      techno: 'Projet Perso MERN',
      subtechno: 'Mongo Db, Express, React, Node',
      description: 'Web app',
      linkGitHub: 'https://github.com/Baptiste-Caral/pwero',
      linkProject: 'http://pwero-9b223.web.app/',
      classname: 'pwero',
      stack: 'FullStack Js',
      techno1Icon: FaReact,
      techno1Color: '#61DBFB',
      techno2Icon: FaNodeJs,
      techno2Color: '#75AE62',
      resume: 'Application de',
      resume2: 'Musculation'
    
    },
    {
      id: 3,
      image: pdf,
      screenshot: '',
      title: 'Générateur de Pdf',
      techno: 'Mission Freelance',
      subtechno: 'React, MaterialUI, Keycloack, JWT',
      description: 'Gestion de patrimoine',
      linkGitHub: 'https://github.com/Baptiste-Caral',
      linkProject: 'https://app.elizay.com',
      classname: 'pdf',
      stack: 'Front-end / React',
      techno1Icon: FaReact,
      techno1Color: '#61DBFB',
      techno2Icon: SiMaterialUi,
      techno2Color: '#0081CB',
      resume: 'Mission',
      resume2: 'Freelance'
      
    },
    
    {
      id: 4,
      image: timer,
      screenshot: '',
      title: 'Timer',
      techno: 'Projet perso',
      subtechno: 'Pure Vanilla Js',
      description: 'Neumorphism',
      linkGitHub: 'https://github.com/Baptiste-Caral/timer',
      linkProject: 'https://jhonnytimer.web.app/',
      classname: 'timer',
      stack: 'Front-end / Js',
      techno1Icon: SiJavascript,
      techno1Color: '#EFD81D',
      techno2Icon: SiCss3,
      techno2Color: '#254ADD',
      resume: 'Projet',
      resume2: 'Personnel'
      
    },
    {
      id: 5,
      image: angular,
      screenshot: '',
      title: 'Apprendre Angular',
      techno: 'Projet perso',
      subtechno: 'Angular',
      description: 'Udemy',
      linkGitHub: 'https://github.com/Baptiste-Caral/timer',
      linkProject: 'https://jhonnytimer.web.app/',
      classname: 'timer',
      stack: 'Front-end / Angular',
      techno1Icon: SiAngular,
      techno1Color: '#DD0031',
      techno2Icon: SiJavascript,
      techno2Color: '#EFD81D',
      resume: 'Coming',
      resume2: 'Soon !!!'
      
    }
    
    
  ]
  
const [index, setIndex] = useState(0)
const [index2, setIndex2] = useState(0)

const handleOnClick = (index) => { 
  
  
  gsap.fromTo('.projects_image_container', {duration: .5, x:0, y:0}, {duration: .5, x:850,y:300})
  gsap.fromTo('.projects_headertruc', {duration: .5, x:0, y:0}, {duration: 1, x:-650,y:0})
  
  setIndex2(index);
  setTimeout(() => {

    setIndex(index);
    
    gsap.fromTo('.projects_image_container',{duration: .5, x:850,y:200}, {duration: .5, x:0, y:0})
    gsap.fromTo('.projects_headertruc',{duration: .5, x:-650,y:0}, {duration: .5, x:0, y:0})
  }, 550);
}

return (
  
  <div className="projects">
      {/* Head & Image container */}
      <div className="projects_header_container">
        <div className="projects_header">
          <div className="projects_headertruc">
            <span className="projects_title">{projects[index].title}</span>
            <span className="projects_subtitle">{projects[index].description}.</span>
            <span className="projects_techno">{projects[index].techno}</span>
            <span className="projects_subtechno">{projects[index].subtechno}</span>
            <div className="projects_visit-container">
              <a href={projects[index].linkProject} target="_blank">
                <div className="projects_visit">
                    <div className="circle_blue">
                      <BsArrowRight size="20"/>
                    </div>
                    <span>Visiter</span>
                </div>
              </a>
            </div>
            </div>
          <div className="projects_image_wrapper">
            <div className="projects_image_container">
              <img className={`projects_image projects_image_${projects[index].classname}`} src={projects[index].image} alt={projects[index].image}/> 
            </div>  
          </div>
        </div>
      </div>
      {/* Projects container */}
      <div className="projects_container">       
          {projects.map((project, i) => 
          <div key={i} className="project_container">
            {index2 !== i &&
            <div className="project_content" onClick={() => handleOnClick(i)}>
            <div>
              <h3>{project.title}</h3>
              <h5>{project.stack}</h5>
              <div className="circle">
                <FaEye color="#000"/>
              </div>
            </div>
            <div className="project_content_icon">
                  <project.techno1Icon color="#254ADD"/>
                  <project.techno2Icon color="#254ADD"/>
                </div>
            </div>}
            {index2 === i &&
            <div className="project_content2-container">
              <div className="project_content2">
                <div className="project_content2_left">
                  <h3 className="project_content2_title">{project.title}</h3>
                  <h5>{project.resume}</h5>
                  <h5>{project.resume2}</h5>
                </div>
                <div className="project_content2_right">
                  <project.techno1Icon color={project.techno1Color}/>
                  <project.techno2Icon color={project.techno2Color}/>
                </div>
              </div>
              <a href={projects[index].linkGitHub} target="_blank">
                <div className="project_github">
                <div className="circle_cards_blue">
                    <FaGithubAlt color="#FFF"/>
                </div> 
                  <span>Github</span>
                </div>
              </a>
            </div>
              }
            </div>
          )}
      
      </div>
    </div>
  );
}

export default Projects;
