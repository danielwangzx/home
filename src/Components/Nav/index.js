import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import { logoutUser } from "../../redux/actions";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
// TODO @SONIA

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
          <span>Daniel Wang</span>
          <ul>
            <li><a href onClick={()=>history.push('/home')} className='animate__animated animate__flipInX'>Home</a></li>
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
