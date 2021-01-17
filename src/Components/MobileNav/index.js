import { stack as Menu } from 'react-burger-menu';
import React from 'react';
import { Link } from 'react-router-dom';

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '30%',
        width: '40%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmItem: {
        display: 'block',
        color: 'antiquewhite',
        'marginBottom': '15px'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

class MobileNav extends React.Component {
    showSettings(event) {
        event.preventDefault();
    }
    render() {
        return (
            <Menu styles={styles} className={'mobile-nav__item'}>
                <Link to="/home">Home</Link>
                <Link to="/portfolio">Portfolio</Link>
                {/* <Link to="/contact">About</Link> */}
            </Menu>
        );
    }
}

export default MobileNav;