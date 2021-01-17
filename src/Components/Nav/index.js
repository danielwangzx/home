import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.scss";
import MobileNav from '@/Components/MobileNav';
import Contact from '@/Components/Contact';
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
      showContactModal: false,
    };
  }
  scrollListener = () => {
    if (window.pageYOffset > 0) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener);
  }

  showContactModal = () => {
    this.setState({ showContactModal: true });
  }
  render() {
    const { pathname } = this.props.history.location;
    const { history } = this.props;
    return (
      <header>
        <nav className={`nav-bar ${(this.state.sticky || pathname !== "/home") ? 'sticky' : ''}`} >
          <div className="nav-bar__container--web">
            <ul>
              <li><a href onClick={() => history.push('/home')}>Home</a></li>
              <li><a href onClick={() => history.push('/portfolio')}>Portfolio</a></li>
              <li><a href="#">Resume</a></li>
              <li><a href onClick={() => this.showContactModal()}>Contact</a></li>
            </ul>
          </div>
        </nav>
        <nav className='nav-bar--mobile'>
          <MobileNav />
        </nav>
        {this.state.showContactModal && <Contact closeForm={() => this.setState({ showContactModal: false })} />}
      </header>
    );
  }
}

export default withRouter(NavBar);
