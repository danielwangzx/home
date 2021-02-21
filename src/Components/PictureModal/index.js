import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { setModalImgSource } from '@/actions/imgFeed';

@connect(state => state, { setModalImgSource })
class PictureModal extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            this.props.setModalImgSource(null);
        }
    }
    handleEscapeKey = (event) => {
        if (event.keyCode === 27) {
            this.props.setModalImgSource(null);
        }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
        document.addEventListener('keydown', this.handleEscapeKey, false);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        document.removeEventListener('keydown', this.handleEscapeKey, false);
    }
    render() {
        const {resouce} = this.props;
        return (<div className='picture-modal__overlay'>
            <div className='picture-modal__container' >
                <img ref={this.wrapperRef} className='picture-modal--img' src={resouce}></img>
            </div>
\        </div>)
    }
}

export default PictureModal;