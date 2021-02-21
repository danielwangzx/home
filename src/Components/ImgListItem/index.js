import React from 'react';
import './index.scss';

export default class ImgListItem extends React.Component {

    handleImgError = (e)=>{
        e.target.onerror = null; 
        e.target.src="image_path_here"
    }

    render() {
        return (
            <div className="img-list__item__wrapper" data-id="website">
                <div className="img-list__item--container">
                    <img src={null} onError={this.handleImgError}/>
                    <div className="img-list__item--overlay">
                        <span className="fa fa-plus" />
                        <h4>
                            <a href="https://www.the-broomer.com" target="_blank">
                                React/Node
                </a>
                        </h4>
                    </div>
                </div>
            </div>
        )
    }
}