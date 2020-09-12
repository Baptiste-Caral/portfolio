import React, {useState} from 'react'
import { gsap } from 'gsap'
import img from '../assets/images/img.png'
import pdf from '../assets/images/pdf.png'
import timer from '../assets/images/timer.png'
import reactSvg from '../assets/images/React-icon.svg'
import velo from '../assets/images/velo.png'
import { FaBeer } from 'react-icons/fa';

function Projects() {

 let project1 = {
   image: img,
   screenshot: '',
   title: 'oZone',
   techno: 'Redux',
   subtechno: 'école O\'Clock',
   description: 'Projet écologique.',
   linkGitHub: 'https://github.com/Baptiste-Caral',
   linkProject: 'https://app.elizay.com'
 }
 let project2 = {

  image: pdf,
  screenshot: '',
  title: 'Générateur de Pdf',
  techno: 'Hooks',
  subtechno: 'Mission Freelance',
  description: 'Gestion de patrimoine.',
  linkGitHub: 'https://github.com/Baptiste-Caral',
  linkProject: 'https://app.elizay.com'
}
let project3 = {

  image: timer,
  screenshot: '',
  title: 'Timer',
  techno: 'Pure Vanilla Js',
  subtechno: 'Projet perso',
  description: 'Neumorphism.',
  linkGitHub: 'https://github.com/Baptiste-Caral',
  linkProject: 'https://app.elizay.com'
}
let project4 = {

  image: velo,
  screenshot: '',
  title: 'Movie & Me',
  techno: 'React-Native',
  subtechno: 'Projet perso',
  description: 'App Mobile.',
  linkGitHub: 'https://github.com/Baptiste-Caral',
  linkProject: 'https://app.elizay.com'
}
const initialState = {

  image: reactSvg,
  screenshot: '',
  title: 'Projets',
  techno: 'Javascript',
  subtechno: 'React',
  description: 'Front-end.',
  linkGitHub: 'https://github.com/Baptiste-Caral',
  linkProject: 'https://app.elizay.com'
}
 const [state, setState] = useState(initialState)
 const [classActive, setClassActive] = useState(true)

const handleOnClick = (index) => {
  
  let project = state;
  if (index === 0) {
    project = initialState
  } else if (index === 1) {
    project = project1
  } else if (index === 2) {
    project = project2
  } else if (index === 3) {
    project = project3
  } else if (index === 4) {
    project = project4
  }   
  setState(project);
  setClassActive(true)
  gsap.fromTo('.projects_image',{duration: 1, x:450,y:200}, {duration: 1, x:0, y:0})
}
const handleOnmouseLeave = () => {
  
  setClassActive(false)
  gsap.fromTo('.projects_image', {duration: 1, x:0, y:0}, {duration: 1, x:450,y:200})
  // gsap.to('.projects_image', {duration: 1, x:-150})
}


  return (

    <div className="projects">
      {/* Head & Image container */}
      <div >
        <div className={`projects_header ${classActive ? "projects_header_in" : "projects_header_out"}`}>
          <p>
            <span className="projects_title">{state.title}</span>
            <span className="projects_subtitle">{state.description}</span>
            <span className="projects_techno">{state.techno}</span>
            <span className="projects_subtechno">{state.subtechno}</span>
          </p>
        </div>
          <div className="projects_image_wrapper">
            <div className="projects_image_container">
              <img className="projects_image" src={state.image} alt={state.image}/> 
              {/* <img className={`projects_image ${classActive ? "projects_image_in" : "projects_image_out"}`} src={state.image} alt={state.image}/>  */}
            </div>
            
          </div>
      </div>
      {/* Projects container */}
      <div className="projects_container">
        <div className="project_container">
          <div className="project_content" onClick={() => handleOnClick(1)} onMouseLeave={() => handleOnmouseLeave()}>
            <h3>{project1.title}</h3>
            <h5><a href={project1.linkProject}>Visiter le site</a></h5>
            <h5><a href={project1.linkGitHub}>Voir le projet sur gitHub</a></h5>
            <p><FaBeer /></p>
            
          </div>
        </div>
        <div className="project_container">
          <div className="project_content" onClick={() => handleOnClick(2)} onMouseLeave={() => handleOnmouseLeave()}>
            <h3>{project2.title}</h3>
            <h5><a href={project1.linkProject}>Visiter le site</a></h5>
            <h5><a href={project1.linkGitHub}>Voir le projet sur gitHub</a></h5>
          </div>
        </div>
        <div className="project_container" >
          <div className="project_content" onClick={() => handleOnClick(3)} onMouseLeave={() => handleOnmouseLeave()}>
            <h3>{project3.title}</h3>
            <h5><a href={project1.linkProject}>Visiter le site</a></h5>
            <h5><a href={project1.linkGitHub}>Voir le projet sur gitHub</a></h5>
          </div>
        </div>
        <div className="project_container">
          <div className="project_content" onClick={() => handleOnClick(4)} onMouseLeave={() => handleOnmouseLeave()}>
            <h3>{project4.title}</h3>
            <h5><a href={project1.linkProject}>Visiter le site</a></h5>
            <h5><a href={project1.linkGitHub}>Voir le projet sur gitHub</a></h5>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Projects;
