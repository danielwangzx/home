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
                        <div className='home-intro__picture'></div>
                        <div className='home-intro--message'><TypeMe backspaceDelay={850} onAnimationEnd={() => this.setState({ showNextPageArrow: true })} strings={[
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
                    {this.state.showNextPageArrow && <div className='next-page--arrow bounce'></div>}
                </section>
                <div className='page-container'>page2</div>
                <div className='page-container'>page3</div>
            </>
        )
    }
}


export default Home;