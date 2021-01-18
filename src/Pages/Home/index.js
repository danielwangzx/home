import React from 'react';
import './index.scss'
import TypeMe, { Delete, Delay, LineBreak } from 'react-typeme';
import { copyToClipboard } from '@/utils/utils';
import {message} from 'antd';
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
                        <div className='home-intro--message__wrapper'>
                            <div className='home-intro--message__greeting'>Hi there:</div>
                            <div className='home-intro--message__name'>My name is Daniel Wang.</div>
                            <div className='home-intro--message'>
                                <TypeMe backspaceDelay={850} cursorCharacter={null} onAnimationEnd={() => this.setState({ showNextPageArrow: true })} strings={[
                                    <Delay ms={2000} />
                                    , 'I build interactive user interface',
                                    <Delete characters={32} />,
                                    'implement business logic',
                                    <Delete characters={24} />,
                                    'spot and solve problems',
                                    <Delete characters={23} />,
                                    'am a full stack developer.',
                                    <LineBreak />,
                                    'Nice to meet you.',
                                ]} />
                            </div>
                        </div>
                        <div className='home-intro--message__contact'>
                            <div className='home-intro--message--info' onClick={()=>{copyToClipboard('mobile');message.info('mobile copied to clipboard')}}><i className="far fa-clone"></i>Mobile:<div id='mobile'>0449 877 068</div></div>
                            <div className='home-intro--message--info' onClick={()=>{copyToClipboard('email');message.info('email copied to clipboard')}}><i className="far fa-clone"></i>Email:<div id='email'>danielwang.dev@gmail.com</div></div>
                        </div>
                    </div>
                    <div className='home_social'>
                        <a className='home_social__icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/zhongxi-daniel-wang-277705117/'>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a className='home_social__icon' target='_blank' rel='noopener noreferrer' href='https://github.com/danielwangzx'>
                            <i className='fab fa-github-square'></i>
                        </a>
                    </div>
                    {this.state.showNextPageArrow && <div className='next-page--arrow bounce'></div>}
                </section>
                <section className='section-container skill-card'>
                </section>
            </>
        )
    }
}


export default Home;