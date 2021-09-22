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
            
              <h1>Give your brand its true voice.</h1>
              <Typist
            avgTypingDelay = {30}
              cursor={{
                show: true,
                blink: true,
                element: "|",
                hideWhenDone: true,
                hideWhenDoneDelay: 1000
              }}
            >
              <p>We do:</p>
            
              <span>Websites</span>
              <Typist.Backspace count={8} delay={2000} />
              <span>Mobile apps</span>
              <Typist.Backspace count={11} delay={2000} />
              <span>Company profiles</span>
              <Typist.Backspace count={16} delay={2000} />
              <span>Business Cards</span>
              <Typist.Backspace count={14} delay={2000} />
              <span style = {{fontSize: "1.2em"}}>creative.</span>


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