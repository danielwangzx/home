import React from 'react';
import { connect } from 'react-redux';
import { userLoginSaga } from '@/actions/user';
import { fetchImg } from '@/actions/imgFeed';
import { debounce } from '@/utils';
import { message } from 'antd';
import './index.scss';
import Header from '@/Components/header';
import SectionContainer from '@/Components/SectionContainer';
import ImgListItem from '@/Components/ImgListItem';
import PictureModal from '@/Components/PictureModal';

@connect(({ user, imgFeed }) => ({ user, imgFeed }), { userLoginSaga, fetchImg })
class Home extends React.Component {
    state = {
        showPictureModal: false
    }
    handleSubmit = (e) => {
        const { value } = e.target;
        const { fetchImg } = this.props;
        if (value !== '') {
            const regex = /[\w]+/g;
            const tags = value.match(regex).join(',');
            if (tags !== null) {
                console.log('you attemped to get feed with following tags:', tags)
                fetchImg(tags)
            } else {
                message.info('flicker takes meaningfull word as input which can be seperated by comma or blankspace and other markings', 1)
            }
        }
    }
    handleDebouncedChange = debounce((e) => {
        this.handleSubmit(e);
    }, 333, false)

    handleKeyDown = (e) => {
        if (e.key === "Enter") {
            this.handleSubmit(e)
        }
    }
    renderImgs = (arr, category) => arr.map((elem, index) => <ImgListItem elem={elem} index={index} category={category} />)
    render() {
        console.log(this.props.imgFeed)
        const { imgList, ModalImgResource } = this.props.imgFeed;
        const { showPictureModal } = this.state;
        return (
            <>
                <Header />
                <div className='home-page__container'>
                    <h4 className='home-page__heading' id='home'>flicker <span>feed</span></h4>
                    <div className='home-page__sub-heading'>Search for flicker picktures, result updates as you type</div>
                    <input type="search" placeholder=" cat" onChange={this.handleDebouncedChange} onKeyDown={this.handleKeyDown} />
                    <SectionContainer category='favourite'>
                        {this.renderImgs(imgList, 'favourite')}
                    </SectionContainer>
                    <SectionContainer category='results'>
                        {this.renderImgs(imgList, 'results')}
                    </SectionContainer>
                </div>
                {showPictureModal && <PictureModal resouce={ModalImgResource} />}
            </>
        )
    }
}


export default Home;