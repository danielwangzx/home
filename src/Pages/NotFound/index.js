import React from 'react';
import { ReactComponent as Hexagon } from './Hexagon.svg';
import './index.scss';
// import history from '@/history';

export default class NotFound extends React.Component {
    render() {
        const { history } = this.props;
        return (<div className='exception-page__container'>
            <Hexagon className='exception-page__icon' />
            <div className="message-box">
                <h1>404</h1>
                <p>Maybe we are lost?</p>
                <div className="buttons-con">
                    <div className="action-link--wrap">
                        <a href onClick={() => history.goBack()} className="link-button link-back-button">Go Back</a>
                        <a href onClick={() => history.push('/')} className="link-button">Go to Home Page</a>
                    </div>
                </div>
            </div>
        </div>);
    }
}