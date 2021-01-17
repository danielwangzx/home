import React from 'react';
import './index.scss';
import normal from '../../images/backgrounds/normal.png'
import blindfold from '../../images/backgrounds/blindfold.png'
import greeting from '../../images/backgrounds/greeting.png'
import { Button } from 'antd';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }


    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.closeForm()
        }
    }

    render() {
        return (
            <div className="g-container" ref={this.wrapperRef}>
                <h2>Get in touch</h2>
                <div className="g-username">
                    <input name="name" id='contat-name' maxLength={64} placeholder="Name" className="input" />
                    <img src={greeting} className="g-username" />
                </div>
                <div className="g-email">
                    <input name="email" type="password" maxLength={64} placeholder="Email" className="input" />
                    <img src={blindfold} className="g-email" />
                </div>
                <img src={normal} className="g-normal" />
                <textarea className='g-textarea' name="message" type="textarea" maxLength={256} placeholder="Message" />
                <div className='g-confirm'>                <Button className='g-confirm__button'>confirm</Button>
                </div>
            </div>
        )
    }
}