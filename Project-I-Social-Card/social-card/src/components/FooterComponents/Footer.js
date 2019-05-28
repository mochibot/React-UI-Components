import React from 'react';
import './Footer.css';
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
Re-wrote footer component to add functionality which updates the number of shares and likes when icons are clicked
*/
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shares: 0,
      likes: 0
    }
    this.shareClick = this.shareClick.bind(this);
    this.likeClick = this.likeClick.bind(this);
  } 
  shareClick() {
    this.setState({
      shares: this.state.shares + 1
    })
  }

  likeClick() {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div className={'footer-container'}>
      <div className={'icon icon-comment'}>
        <FontAwesomeIcon icon={faComment} flip={'horizontal'} />
      </div>
      <div className={'icon icon-share'}>
        <FontAwesomeIcon icon={faSync} onClick={this.shareClick} />
        <p>{this.state.shares}</p>
      </div>
      <div className={'icon icon-like'}>
        <FontAwesomeIcon icon={faHeart} onClick={this.likeClick}/>
        <p>{this.state.likes}</p>
      </div>
      <div className={'icon icon-email'}>
        <FontAwesomeIcon icon={faEnvelope}/>
      </div>
    </div>

    )
  }
}

/* Commenting out earlier code

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

*/


export default Footer;