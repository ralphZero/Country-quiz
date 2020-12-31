import React from 'react';
import sheet from './AnswerItem.module.css';

const AnswerItem = ({ id, letter, text, onSelected }) => {
    return (
        <div className={sheet.container} data-eid={id} onClick={(e)=>{onSelected(e.currentTarget, id)}}>
            <span>{ letter }</span>
            <span>{ text }</span>
        </div>
    );
}

export default AnswerItem;
