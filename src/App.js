import React from "react";
import Hero from "./components/Hero";
import img from "./assets/architecture.jpg";
import vanguard from "./assets/vanguard.jpg";
import cashtrack from "./assets/money.jpg";
import randomkey from "./assets/guitar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faLaptopCode,
  faCogs
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { Link } from "react-scroll";

class App extends React.Component {
  state = {
    navDrawn: false
  };

  removeNav = () => {
    let navigation = document.querySelector(".links-ul");
    this.setState({ navDrawn: !this.state.navDrawn });
    navigation.classList.remove("nav-active");
  }

  toggleNav = () => {
    let navigation = document.querySelector(".links-ul");
    this.setState({ navDrawn: !this.state.navDrawn });
    navigation.classList.toggle("nav-active");
    console.log(navigation.classList);
  }

  render() {
    return (
      <div
        className="App"
        onClick={() => {
          if (this.state.navDrawn) {
            this.removeNav();
          }
        }}
      >
        <nav>
          <a href="/" className="brand">
            INSELBERG
          </a>
          <ul className="links-ul" >
            <Link to="about" smooth={true} onClick = {this.removeNav}>
              <li>About Us</li>
            </Link>

            <Link to="tools" smooth={true} onClick = {this.removeNav}>
              <li>Tools</li>
            </Link>

            <Link to="work" smooth={true} onClick = {this.removeNav}>
              <li>Work</li>
            </Link>
            <Link to="contact" smooth={true} onClick = {this.removeNav}>
              <li>Contact</li>
            </Link>
          </ul>
          <div
            className="hamburger"
            onClick={this.toggleNav}
          >
            <div className = "line1"/>
            <div className = "line2"/>
            <div className = "line3"/>
          </div>
        </nav>
        <Hero />
        <section id="about">
          <div>
            <img src={img} alt="Pattern" />
            <div>
              <h2>
                Our passion is building things that are beautiful to behold and
                simple to use.
              </h2>
              <p>
                Marketing aside, what you need is a great experience for your customer. That's what we offer. 
              </p>
            </div>
          </div>
        </section>
        <section id="tools" className="three-column-section">
          <h1>These are a few of our favourite things. </h1>
          <div>
            <div className="grid-item grid-item-1">
              <div className="headings">
                <h1>
                  <FontAwesomeIcon icon={faLaptopCode} />
                </h1>
                <h3>Design</h3>
              </div>
              <ul>
                <li>Websites</li>
                <li>Company profiles</li>
                <li>Posters</li>
                <li>Business cards</li>
              </ul>
            </div>
            <div className="grid-item grid-item-2">
              <div className="headings">
                <h1>
                  <FontAwesomeIcon icon={faCode} />
                </h1>
                <h3>Development</h3>
              </div>
              <ul>
                <li>Front-end(React)</li>
                <li>Backend (NodeJS, Django)</li>
                <li>Databases (SQL, MongoDB)</li>
                <li>Managed SaaS and PaaS services</li>
              </ul>
            </div>

            <div className="grid-item grid-item-3">
              <div className="headings">
                <h1>
                  <FontAwesomeIcon icon={faCogs} />
                </h1>
                <h3>Tech Support</h3>
              </div>
              <ul>
                <li>Server maintenance</li>
                <li>Email (delivery, anti-spam)</li>
                <li>Domains (.ke, .co.ke, .com, etc)</li>
                <li>Web hosting</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="work" className="three-column-section">
          <h1>Here's some work we've done.</h1>
          <div>
            <div className="grid-item grid-item-1">
              <img src={randomkey} alt="" />
              <p>
                <span>RandomKey</span> is a simple Android app for musicians to
                use in their practice. It helps musicians learn different keys,
                along with their key signatures and relative majors and minors.
                It’s a great app for all armateur musicians: from vocalists to
                pianists.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.rockrussell.music.randomkey">
                <button>Visit Page</button>
              </a>
            </div>
            <div className="grid-item grid-item-2">
              <img src={vanguard} alt="" />
              <p>
                <span>Vanguard</span> is a research and transcription company.
                They offer automatic billing for transcription jobs as well as
                PayPal and card payment options. They also offer a wide range of
                research services.
              </p>
              <a href="https://www.vanguardswift.com">
                <button>Visit Page</button>
              </a>
            </div>

            <div className="grid-item grid-item-3">
              <img src={cashtrack} alt="" />
              <p>
                <span>CashTrack</span> is a simple personal accounting app to
                help you keep track of expenses. If you would like to track your
                expenditure separately, one can create more ‘tracks’. It also
                works for keeping count of costs in the supermarket and other
                simple arithmetic needs.
              </p>
              <a href="https://play.google.com/store/apps/details?id=com.apps.plethora.cashtrack">
                <button>Visit Page</button>
              </a>
            </div>
          </div>
        </section>
        <section id="contact">
          <h1>Get in touch.</h1>
          <form
            action="https://mailthis.to/rogerodipo@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <input required type="text" placeholder="Name" name="Name" />
            <input required type="email" placeholder="Email" name="Email" />
            <input type="hidden" name="_confirmation" value="It has been successfully submitted"></input>
            <input type="hidden" name="_after" value="https://rogerodipo.me"></input>
            <textarea
              required
              id=""
              cols="30"
              rows="8"
              placeholder="Message"
              name="Message: "
            />
            <button required type="submit">
              Send
            </button>
          </form>
        </section>
        <footer>
          <h1>Let us help grow your brand.</h1>
          <p>Handcrafted by us. &copy;2021 | info@inselberg.co.ke | +254 755 586 506 </p>
        </footer>
      </div>
    );
  }
}

export default App;
