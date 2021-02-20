import React from 'react';
import logo from '../../logo.svg';
import { connect } from 'react-redux';
import { userLoginSaga } from '@/actions/user';
import { fetchImg } from '@/actions/imgFeed';
import { debounce } from '@/utils';

@connect(({ user, imgFeed }) => ({ user, imgFeed }), { userLoginSaga, fetchImg })
class Home extends React.Component {
    componentDidMount() {
        const { fetchImg } = this.props
        fetchImg('cat')
    }
    debouncedCall = debounce((e)=>{
        console.log(e.target)
    },666,false)
    render() {
        const { userLoginSaga, imgFeed } = this.props;
        console.log(this.props)
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
        </p>
                    <div>{JSON.stringify(imgFeed)}</div>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        haha
        </a>
                    <button onClick={() => userLoginSaga(12)}>click</button>
                    <button onClick={this.debouncedCall}>click</button>
                </header>
            </div>
        )
    }
}


export default Home;