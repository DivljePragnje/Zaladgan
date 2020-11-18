import React from "react";
import "./sidebar.styles.css";
import "./sidebar-mini.styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sidebarRef = React.createRef();
  }
  onOpenSidebar = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 600) {
      this.sidebarRef.current.style.marginLeft = "250px";
      this.sidebarRef.current.style.marginTop = "0px";
    } else {
      this.sidebarRef.current.style.marginTop = "420px";
      this.sidebarRef.current.style.marginLeft = "0px";
    }
  };

  onCloseSidebar = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth > 600) {
      this.sidebarRef.current.style.marginLeft = "0px";
    } else {
      this.sidebarRef.current.style.marginTop = "0px";
    }
  };

  render() {
    return (
      <div>
        <div className="fixed">
          <input type="checkbox" id="check"></input>
          <label htmlFor="check">
            <i id="btn" onClick={this.onOpenSidebar}>
              <FontAwesomeIcon icon={faBars} />
            </i>
            <i id="cancel" onClick={this.onCloseSidebar}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </i>
          </label>
        </div>
        <div className="sidebar" ref={this.sidebarRef}>
          <header> Zaladgan LOGO </header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <footer>
            <div className="social-media">
              <a href="https://www.instagram.com">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.facebook.com">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.pinterest.com">
                <FontAwesomeIcon icon={faPinterest} />
              </a>
              <a href="https://www.twitter.com">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Sidebar;
