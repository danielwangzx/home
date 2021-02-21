import React from 'react';
import './index.scss';
import {message} from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

export default class ImgListItem extends React.Component {
    state = {
        addedToFavorite: false
    }

    handleImgError = (e) => {
        e.target.onerror = null;
        e.target.src = "image_path_here"
    }

    handleAddToFavorite = (title) => {
        this.setState({ addedToFavorite: true },()=>{
            message.success(`${title} added to favourite!`,1)
        })
    }

    render() {
        const { elem, index, category } = this.props
        const { addedToFavorite } = this.state;
        return (
            <li className='img-item__wrapper' key={index}>
                <div className='img-item__container'>
                    <div className='img-item--overlay'>
                        <div className='img-item--icon'>hello</div>
                        <div className='img-item--link'>link</div>
                        {category === 'results' && !addedToFavorite && <div className='img-item--favourite' onClick={() => this.handleAddToFavorite(elem.title)}><HeartTwoTone twoToneColor="#eb2f96" /></div>}
                    </div>
                    <img className='img-item--pic' src={elem.media.m} onError={this.handleImgError} alt={elem.title}></img>
                </div>
                <div className='img-item__description'>
                </div>
            </li>

        )
    }
}