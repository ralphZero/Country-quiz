import React from 'react';
import sheet from './AnswerItem.module.css';

const AnswerItem = (props) => {
    return (
        <div className={sheet.container}>
            <span>A</span>
            <span>Vietnam</span>
        </div>
    );
}

export default AnswerItem;
