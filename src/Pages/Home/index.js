import React from 'react';
import { connect } from 'react-redux';
import { userLoginSaga } from '@/actions/user';
import { fetchImg } from '@/actions/imgFeed';
import { debounce } from '@/utils';
import { message } from 'antd';
import './index.scss';
import Header from '@/Components/header'

@connect(({ user, imgFeed }) => ({ user, imgFeed }), { userLoginSaga, fetchImg })
class Home extends React.Component {
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
                message.info('flicker takes meaningfull word as input can be seperated by comma or blankspace', 1)
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
    render() {
        return (
            <>
                <Header />
                <div className='home-page__container'>
                    <h4 className='home-page__heading' id='home'>flicker <span>feed</span></h4>
                    <div className='home-page__sub-heading'>Search for flicker picktures, result updates as you type</div>
                    <input type="search" placeholder=" cat" onChange={this.handleDebouncedChange} onKeyDown={this.handleKeyDown} />
                </div>
            </>
        )
    }
}


export default Home;