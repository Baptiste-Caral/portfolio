import React, {useState, useEffect} from 'react'
import { gsap } from 'gsap'
import img from '../assets/images/img.png'
import pdf from '../assets/images/pdf.png'
import timer from '../assets/images/timer.png'
import velo from '../assets/images/velo.png'
import Slider from 'infinite-react-carousel';


function Projects() {

  const [width, setWidth] = useState(window.innerWidth)
  let rows = 4
  useEffect(() => {
    const handleResize = () =>setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    console.log(width);
  },[width])
  
  if(width < 980) {
    rows = 3
  } 
  if (width < 780) {
    rows = 2
  }
  if (width < 480) {
    rows = 1
  }


  
  const projects = [{
    id: 1,
    image: img,
    screenshot: '',
    title: 'oZone',
    techno: 'Redux',
    subtechno: 'école O\'Clock',
    description: 'Projet écologique.',
    linkGitHub: 'https://github.com/Baptiste-Caral',
    linkProject: 'https://app.elizay.com'
  },
  {
    id: 2,
    image: pdf,
    screenshot: '',
    title: 'Générateur de Pdf',
    techno: 'React Hooks',
    subtechno: 'Mission Freelance',
    description: 'Gestion de patrimoine.',
    linkGitHub: 'https://github.com/Baptiste-Caral',
    linkProject: 'https://app.elizay.com'
  },
  {
    id: 3,
    image: timer,
    screenshot: '',
    title: 'Timer',
    techno: 'Pure Vanilla Js',
    subtechno: 'Projet perso',
    description: 'Neumorphism.',
    linkGitHub: 'https://github.com/Baptiste-Caral',
    linkProject: 'https://app.elizay.com'
  },
  {
    id: 4,
    image: velo,
    screenshot: '',
    title: 'Movie & Me',
    techno: 'React-Native',
    subtechno: 'Projet perso',
    description: 'App Mobile.',
    linkGitHub: 'https://github.com/Baptiste-Caral',
    linkProject: 'https://app.elizay.com'
  },
  
]

const [index, setIndex] = useState(0)
const [index2, setIndex2] = useState(0)

const handleOnClick = (index) => { 
  
  
  gsap.fromTo('.projects_image', {duration: .5, x:0, y:0}, {duration: .5, x:850,y:300})
  gsap.fromTo('.projects_headertruc', {duration: .5, x:0, y:0}, {duration: 1, x:-650,y:0})
  
  setIndex2(index);
  setTimeout(() => {

    setIndex(index);
    
    gsap.fromTo('.projects_image',{duration: .5, x:850,y:200}, {duration: .5, x:0, y:0})
    gsap.fromTo('.projects_headertruc',{duration: .5, x:-650,y:0}, {duration: .5, x:0, y:0})
  }, 550);
}

const settings =  {
  autoplay: true,
  adaptiveHeight: true,
  slidesToShow: rows,
  dots: true,
  
};
return (
  
  <div className="projects">
      {/* Head & Image container */}
      <div className="projects_header_container">
        <div className="projects_header">
          <p className="projects_headertruc">
            <span className="projects_title">{projects[index].title}</span>
            <span className="projects_subtitle">{projects[index].description}</span>
            <span className="projects_techno">{projects[index].techno}</span>
            <span className="projects_subtechno">{projects[index].subtechno}</span>
          </p>
          <div className="projects_image_wrapper">
            <div className="projects_image_container">
              <img className="projects_image" src={projects[index].image} alt={projects[index].image}/> 
            </div>  
          </div>
        </div>
      </div>
      {/* Projects container */}
    
      <div >
        <Slider beforeChange={(index) => handleOnClick(index)} { ...settings }>         
          {projects.map((project, i) => 
            <div key={i} className="project_container">
              {index2 !== i && <div className="project_content" onClick={() => handleOnClick(i)}>
                <h3>{project.title}</h3>
                <h5><a href={project.linkProject}>Visiter le site</a></h5>
                <h5><a href={project.linkGitHub}>Voir le projet sur gitHub</a></h5>
              </div>}
              {index2 === i&& <div className="project_content2" onClick={() => handleOnClick(i)}>
                <h3>{project.title}</h3>
                <h5><a href={project.linkProject}>Visiter le site</a></h5>
                <h5><a href={project.linkGitHub}>Voir le projet sur gitHub</a></h5>
              </div>}
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
