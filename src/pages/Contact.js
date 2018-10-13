import React, { Component } from 'react';
import {Bg} from '../theme/types'
import './Contact.css'
import { FuzionLogo } from './Contact.style'


class Contact extends Component {
    render() {
        return (
            <Bg>

				<a className="fuzionLogo" href="https://github.com/Habitar">
				<FuzionLogo/>
				</a>
                <div className="box">
                  <div className="info">
                    <p>Mary</p>
                    <img className="photo" src="/photos/mary.jpg" alt="portrait"/>
                    <div className="row">
                      <span><a href= "https://github.com/msanagu"><img className='logo' src="/logos/github.png" alt="GitHub logo"/></a>
                      <a href= "https://www.linkedin.com/in/mary-san-agustin"><img className='logo' src="/logos/linkedin.png" alt="LinkedIn logo"/></a></span>
                    </div>
                  </div>
                  <div className="info">
                    <p>Danny</p>
                    <img className="photo" src="/photos/danny.jpg" alt="portrait"/>
                    <div className="row">
                      <span><a href= "https://github.com/dlim87"><img className='logo' src="/logos/github.png" alt="GitHub logo"/></a>
                      <a href= "https://www.linkedin.com/in/daniel-p-lim"><img className='logo' src="/logos/linkedin.png" alt="LinkedIn logo"/></a></span>
                    </div>
                  </div>
                  <div className="info">
                    <p>Christian</p>
                    <img className="photo" src="/photos/cmoney.jpg" alt="portrait"/>
                    <div className="row">
                      <span><a href= "https://github.com/christian-nguyen-01"><img className='logo' src="/logos/github.png" alt="GitHub logo"/></a>
                      <a href= "https://www.linkedin.com/in/christian-nguyen-01"><img className='logo' src="/logos/linkedin.png" alt="LinkedIn logo"/></a></span>
                    </div>
                  </div>
                  <div className="info">
                    <p>Jerome</p>
                    <img className="photo" src="/photos/jerome.jpg" alt="portrait"/>
                    <div className="row">
                      <span><a href= "https://github.com/jeromerrr"><img className='logo' src="/logos/github.png" alt="GitHub logo"/></a>
                      <a href= "https://www.linkedin.com/in/jeromesheppard"><img className='logo' src="/logos/linkedin.png" alt="LinkedIn logo"/></a></span>
                    </div>
                  </div>
                </div>

            </Bg>
        );
    }
}

export default Contact;
