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
            
              <h1>Angelica Schuyler.</h1>
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
              <p>Also a</p>
            
              <span>mechatronics engineer</span>
              <Typist.Backspace count={21} delay={2000} />
              <span>mobile app developer (Android)</span>
              <Typist.Backspace count={30} delay={2000} />
              <span>guitarist</span>
              <Typist.Backspace count={9} delay={2000} />
              <span style = {{fontSize: "1.2em"}}>creative.</span>


            </Typist>
          </div>
          <div className="buttons">
            <Link to="contact" smooth={true}><button className="hire-button">Hire me today</button></Link>
            <Link to="about" smooth={true}><button>Find out more</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;