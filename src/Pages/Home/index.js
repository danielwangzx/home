import React from 'react';
import './index.scss'
import TypeMe, { Delete } from 'react-typeme';
class Home extends React.Component {
    render() {
        return (
            <>
                <section className='section-container home'>
                    <div className='home-intro__container'>
                        <div className='home-intro__picture'></div>
                        <div className='home-intro--message'><TypeMe backspaceDelay={700} strings={[
                            'I craft website UI',
                            <Delete characters={16} />,
                            'implement business logic',
                            <Delete characters={24} />,
                            'spot problems and enjoy challenge',
                            <Delete characters={33} />,
                            'am a full stack developer.'
                        ]} /></div>          
                    </div>
                </section>
                <div className='page-container'>page2</div>
                <div className='page-container'>page3</div>
            </>
        )
    }
}


export default Home;