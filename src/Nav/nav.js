import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

function nav() {
  return (
    <div className="nav">
      <div className="nav_left">
        <div className="nav_left_line">-</div>
        <div className="nav_left_line">-</div>
      </div>
      <div className="nav_center"> 
        <div>Hello World !</div>  
      </div>
      <div className="nav_right">
        <ul>
          <li className="nav_active">Projets</li>
          <li className="nav_li">À Propos</li>
          <li className="nav_li">Contact</li>
          <li className="nav_li_round">
            <a href="https://github.com/Baptiste-Caral">
              <AiFillGithub size="16"/>
              <div>Github</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default nav;