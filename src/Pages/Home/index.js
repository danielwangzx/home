import React from 'react';
import './index.scss'
import TypeMe, { Delete, Delay } from 'react-typeme';
class Home extends React.Component {
    state = { showNextPageArrow: false };
    scrollListener = () => {
        if (window.pageYOffset > 0) {
            this.setState({ showNextPageArrow: false });
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollListener);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollListener)
    }
    render() {
        return (
            <>
                <section className='section-container home'>
                    <div className='home-intro__container'>
                        <div>
                            <a className='home__social__icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/weidong-li-leon/'>
                                <i className='icon fab fa-linkedin'></i>
                            </a>

                            <a className='home__social__icon' target='_blank' rel='noopener noreferrer' href='https://github.com/leonlidawn'>
                                <i className='icon fab fa-github-square'></i>
                            </a>
                            <a className='home__social__icon' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/leonlidawn/'>
                                <i className='icon fab fa-instagram-square'></i>
                            </a>
                        </div>
                        <div className='home-intro--message'><TypeMe backspaceDelay={850} cursorCharacter={null} onAnimationEnd={() => this.setState({ showNextPageArrow: true })} strings={[
                            <Delay ms={2000} />
                            , 'I build interactive user interface',
                            <Delete characters={32} />,
                            'implement business logic',
                            <Delete characters={24} />,
                            'spot and solve problems',
                            <Delete characters={23} />,
                            'am a full stack developer.'
                        ]} /></div>
                    </div>
                    {/* {this.state.showNextPageArrow && <div className='next-page--arrow bounce'></div>} */}
                </section>
            </>
        )
    }
}


export default Home;