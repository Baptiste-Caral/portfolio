import React, {useState} from 'react';


function Projects() {

 let project1 = {
   image: 'Titre image1',
   bigtitle: 'bigtitle1',
   title: 'générateur de Pdf',
   description: 'Projet réalisé avec React',
   linkGitHub: 'https://github.com/Baptiste-Caral',
   linkProject: 'https://app.elizay.com'
 }
 let project2 = {

  image: 'Titre image2',
  bigtitle: 'bigtitle2',
  title: 'générateur de Pdf2',
  description: 'Projet réalisé avec React2',
  linkGitHub: 'https://github.com/Baptiste-Caral',
  linkProject: 'https://app.elizay.com'
}

 const [state, setState] = useState({

   image: 'Titre image',
   bigtitle: 'bigtitle',
   title: 'générateur de Pdf',
   description: 'Projet réalisé avec React',
   linkGitHub: 'https://github.com/Baptiste-Caral',
   linkProject: 'https://app.elizay.com'
 })

const handleOnmouseover = () => {
  console.log(state.image);
}
  return (
    <div className="projects">
    <div className="projects_header">
    <p> <span className="projects_title">Projets</span> <span className="projects_subtitle">Front-End.</span></p>
    <p> <span className="projects_title">{state.bigtitle}</span> <span className="projects_subtitle">{state.image}</span></p>
    </div>
      
      <div className="projects_container">
        <div onMouseOver={() => handleOnmouseover()} className="project_container">
          <h3>{project1.title}</h3>
          <p>{project1.description}</p>
          <h3><a href={project1.linkProject}>Visiter le site</a></h3>
          <h3><a href={project1.linkGitHub}>Voir le projet sur gitHub</a></h3>
        </div>
        
        <div className="project_container"></div>
        <div className="project_container"></div>
        
        
        
      </div>
      
      
    </div>
  );
}

export default Projects;
