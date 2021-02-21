import React from 'react';
import { message, Avatar } from 'antd';
import { HeartTwoTone, UserOutlined, FieldTimeOutlined, PlusCircleTwoTone, Html5TwoTone } from '@ant-design/icons';
import { connect } from 'react-redux';
import { addFav, setModalImgSource } from '@/actions/imgFeed';
import moment from 'moment';

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
            const { addFav } = this.props;
            message.success(`${title} added to favourite!`, 1);
            addFav(elem);
            setTimeout(() => {
                const { imgFeed: { favList } } = this.props;
                localStorage.setItem('favList', JSON.stringify(favList))
            }, 100)
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
                        <div className='img-item--icon' onClick={() => setModalImgSource(elem.media.m)}><PlusCircleTwoTone style={{ fontSize: '40px' }} /></div>
                        <div className='img-item--static'>{elem.title}</div>
                        <div className='img-item--static'> <Avatar icon={<UserOutlined />} /><span>{elem.author}</span></div>
                        <div className='img-item--static'>{tagArr.length > 0 && tagArr.map((elem, index) => {
                            if (index < 3) {
                                return (<span className='img-item--tag' key={index}>{elem.substring(0, 6)}</span>)
                            } else {
                                return null;
                            }
                        })}</div>
                        <div className='img-item--static'><FieldTimeOutlined /><span>{moment(elem.date_taken).format('DD/MM/YYYY')}</span></div>
                        <div className='img-item--link'><a href={elem.link} target='_blank' rel="noreferrer"><Html5TwoTone style={{ fontSize: '40px' }} /></a></div>
                        {category === 'results' && !addedToFavorite && <div className='img-item--favourite' onClick={() => this.handleAddToFavorite(elem.title, elem)}><HeartTwoTone twoToneColor="#eb2f96" /></div>}
                    </div>
                    <img className='img-item--pic' src={elem.media.m} onError={this.handleImgError} alt={elem.title}></img>
                </div>
            </li>

        )
    }
}

export default ImgListItem;