import React from 'react';
import AnswerItem from './AnswerItem';
import sheet from './QuestionItem.module.css';

const QuestionItem = (props) => {
    return (
        <div>
            <div className={sheet.questionContainer}>
                <img className={sheet.flag} src="https://restcountries.eu/data/hti.svg" alt="flag"/>
               <span>Kuala Lumpur is the capital of</span>
            </div>
            <div className={sheet.answerContainer}>
                <AnswerItem />
                <AnswerItem />
                <AnswerItem />
                <AnswerItem />
            </div>
            <div className={sheet.nextContainer}>
                <button className={sheet.button}>Next</button>
            </div>
        </div>
    );
}

export default QuestionItem;
