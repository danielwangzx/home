import React from 'react';
import './index.scss';
import normal from '../../images/backgrounds/normal.png'
import blindfold from '../../images/backgrounds/blindfold.png'
import greeting from '../../images/backgrounds/greeting.png'
import emailjs from 'emailjs-com';
// import { message } from 'antd'

export default class Contact extends React.Component {
    state = {
        name: '',
        email: '',
        message: ''
    }
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
    handleChange = (e) => {
        const { name } = e.target;
        this.setState({ [name]: e.target.value })
    }

    sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_19wnsw9', 'template_4sh370f', e.target, 'user_JIshC0tiK3bIzyiBX00Pf')
            .then((result) => {
                // message.success('thank you for your enquiry i will get back to you shortly')
                setTimeout(() => {
                    this.props.closeForm();
                }, 500)
            }, (error) => {
                // message.error('opps, seems i used up all the email quota of this month!')
            });

    }


    render() {
        return (
            <form className="g-container" ref={this.wrapperRef} onSubmit={this.sendEmail}>
                <h2>Get in touch</h2>
                <div className="g-username">
                    <input name="name" id='contat-name' maxLength={64} placeholder="Name" className="input" onChange={(e) => this.handleChange(e)} />
                    <img src={greeting} className="g-username" alt='normal' />
                </div>
                <div className="g-email">
                    <input name="email" type="email" maxLength={64} placeholder="Email" className="input" />
                    <img src={blindfold} className="g-email" alt='normal' />
                </div>
                <img src={normal} className="g-normal" alt='normal' />
                <textarea className='g-textarea' name="message" type="textarea" maxLength={256} placeholder="Message" />
                <input type='submit' className='g-confirm__button' value='submit' />
            </form>
        )
    }
}