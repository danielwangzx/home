import React from 'react';
import './index.scss';
import { message, Avatar } from 'antd';
import { HeartTwoTone, UserOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { addFav, setModalImgSource } from '@/actions/imgFeed';

@connect(({ imgFeed }) => ({ imgFeed }), { addFav, setModalImgSource })
class ImgListItem extends React.Component {
    state = {
        addedToFavorite: false
    }

    handleImgError = (e) => {
        e.target.onerror = null;
        e.target.src = "image_path_here"
    }

    handleAddToFavorite = (title, elem) => {
        this.setState({ addedToFavorite: true }, () => {
            const { addFav, imgFeed: { favList } } = this.props;
            message.success(`${title} added to favourite!`, 1);
            addFav(elem);
            setTimeout(() => { localStorage.setItem('favList', JSON.stringify(favList)) }, 100)
        })
    }

    render() {
        const { elem, index, category, setModalImgSource } = this.props;
        const { addedToFavorite } = this.state;
        const { tags } = elem;
        const tagArr = tags.split(' ');
        return (
            <li className='img-item__wrapper' key={index}>
                <div className='img-item__container'>
                    <div className='img-item--overlay'>
                        <div className='img-item--icon' onClick={() => setModalImgSource(elem.media.m)}>hello</div>
                        <div className='img-item--author'> <Avatar icon={<UserOutlined />} /><span>{elem.author}</span></div>
                        <div className='img-item--author'>{ tagArr.length > 0 && tagArr.map(elem=>(<span className='img-item--tag'>{elem}</span>)) }</div>
                        <div className='img-item--link'>wocao</div>
                        {category === 'results' && !addedToFavorite && <div className='img-item--favourite' onClick={() => this.handleAddToFavorite(elem.title, elem)}><HeartTwoTone twoToneColor="#eb2f96" /></div>}
                    </div>
                    <img className='img-item--pic' src={elem.media.m} onError={this.handleImgError} alt={elem.title}></img>
                </div>
                <div className='img-item__description'>
                </div>
            </li>

        )
    }
}

export default ImgListItem;