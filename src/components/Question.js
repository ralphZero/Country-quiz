import React, { Component } from 'react';
import sheet from './Question.module.css';
import adventure from '../adventure.svg';
import QuestionItem from './QuestionItem';

class Question extends Component {
    render() {
        return (
            <div className={sheet.container}>
                <img className={sheet.logo} src={adventure} alt="logo"/>
                <QuestionItem />
            </div>
        );
    }
}

export default Question;
