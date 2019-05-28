import React from 'react';
import './Footer.css';
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={'footer-container'}>
      <div className={'icon icon-comment'}>
        <FontAwesomeIcon icon={faComment} flip={'horizontal'} />
      </div>
      <div className={'icon icon-share'}>
        <FontAwesomeIcon icon={faSync} />
        <p>6</p>
      </div>
      <div className={'icon icon-like'}>
        <FontAwesomeIcon icon={faHeart} />
        <p>4</p>
      </div>
      <div className={'icon icon-email'}>
        <FontAwesomeIcon icon={faEnvelope}/>
      </div>
    </div>
  )
}




export default Footer;