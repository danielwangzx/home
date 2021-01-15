import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false
    };
    this.mobileMenuRef = React.createRef();

  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        this.setState({ sticky: true });
      } else {
        this.setState({ sticky: false });
      }
    });
  }

  openMobileMenu = () => {
    if (this.mobileMenuRef.current.style.display !== "none") {
      this.mobileMenuRef.current.style.display = "none";
    } else {
      this.mobileMenuRef.current.style.display = "block";
    }
  }
  render() {
    const { pathname } = this.props.history.location;
    const { history } = this.props;
    return (
      <header className={`nav-bar ${(this.state.sticky || pathname !== "/home") ? 'sticky' : ''}`} >
        <div className="nav-bar__container--web">
          <ul>
            <li><a href onClick={()=>history.push('/home')}>Home</a></li>
            <li><a href onClick={()=>history.push('/portfolio')}>Portfolio</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

      </header>
    );
  }
}

export default withRouter(NavBar);
