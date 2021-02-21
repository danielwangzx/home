import React from 'react';
import './index.scss';

export default function SectionContainer({ children, category }) {
    return (
        <div className='img-section__container'>
            <div className='img-section__header' id={category}>
                {category}
            </div>
            <ul className='img-list__container'>
                {children}
            </ul>
        </div>
    )
}