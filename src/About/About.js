import React from 'react'
import { gsap } from 'gsap'



function About() {
 const about = React.createRef()


 const gsapEffect = () => {
  gsap.to(about.current, {color: "#8C0", duration: 2})
 }

  return (
    <div ref={about} className="about" onMouseOver={() => gsapEffect()}>
      <p>J'ai éffectué ma formation de développeur web et web mobile au sein de l'école O'Clock. J'ai appris durant cette formation de 5 mois les langages HTML5, CSS3, PHP, Javascript es6, MySQL... Puis j'ai éffectué une professionnalisation sur la bibliothèque React.

J'ai depuis passé le Titre Pro Développeur Web et Web Mobile et effectué 2 missions en Freelance en tant que développeur React sur la plateforme Malt.

Je suis actuellement disponible pour un poste en alternance dans la région de bordeaux (ou en télétravail si la distance est trop élevée).</p>
    </div>
  );
}

export default About;
