import React, { Component } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import {Link} from 'react-scroll'

export class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div>
          <div>
            
              <h1>Grow your brand's voice.</h1>
              <Typist
            avgTypingDelay = {2}
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: true,
                hideWhenDoneDelay: 1000
              }}
            >
              <p>We:</p>
            
              <span>create and manage websites</span>
              <Typist.Backspace count={19} delay={1000} />
              <span> mobile apps</span>
              <Typist.Backspace count={19} delay={1000} />
              <span>design company profiles</span>
              <Typist.Backspace count={16} delay={1000} />
              <span>business cards</span>
              <Typist.Backspace count={21} delay={1000} />
              <span style = {{fontSize: "1.2em"}}>build your brand.</span>


            </Typist>
          </div>
          <div className="buttons">
            <Link to="contact" smooth={true}><button className="hire-button">Hire us today</button></Link>
            <Link to="about" smooth={true}><button>Find out more</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;