import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
import MobileNav from '@/Components/MobileNav';
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      showContactModal: false,
    };
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

  showContactModal = () => {
    this.setState({ showContactModal: true });
  }
  render() {
    const { pathname } = this.props.history.location;
    const { history } = this.props;
    return (
      <header>
        <div className={`nav-bar ${(this.state.sticky || pathname !== "/home") ? 'sticky' : ''}`} >
          <div className="nav-bar__container--web">
            <ul>
              <li><a href onClick={() => history.push('/home')}>Home</a></li>
              <li><a href onClick={() => history.push('/portfolio')}>Portfolio</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href onClick={() => this.showContactModal()}>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className='nav-bar--mobile'>
          <MobileNav />
        </div>
      </header>
    );
  }
}

export default withRouter(NavBar);
