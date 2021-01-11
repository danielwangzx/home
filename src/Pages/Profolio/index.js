import { Component } from 'react';
import { invokePoints } from '@/utils/pointsAnimation'
import './index.scss';
export default class Profolio extends Component {
    componentDidMount() {
        invokePoints();
    }
    render() {
        return (
            <div className='portfolio'>
            </div>
        )
    }
}