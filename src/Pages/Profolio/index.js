import { Component } from 'react';
import { invokePoints } from '@/utils/pointsAnimation'
export default class Profolio extends Component {
    componentDidMount() {
        invokePoints();
    }
    render() {
        return (
            <div>
                Profoilo
            </div>
        )
    }
}