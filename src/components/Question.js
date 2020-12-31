import React, { Component } from 'react';
import sheet from './Question.module.css';
import adventure from '../adventure.svg';
import QuestionItem from './QuestionItem';
import { connect } from 'react-redux';
import { generateQuestion, updateStarted, updateScore} from '../actions/dataActions';

class Question extends Component {

    handleCompleted = (message) => {
        if(message === 'success'){
            //success load next question
            let score = this.props.score;
            let newScore = parseInt(score) + 1;
            this.props.updateScore(newScore);
        }else{
            //failed we stop ad show result
            this.props.updateStatus(2);
        }
    }

    handleNext = () => {
        this.props.generateQuestion();
    }

    render() {
        return (
            <div className={sheet.container}>
                <img className={sheet.logo} src={adventure} alt="logo"/>
                <QuestionItem data={this.props.data} onCompleted={this.handleCompleted} onNext={this.handleNext}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateScore : (value) => {
            dispatch(
                updateScore(value)
            )
        },
        updateStatus : (value) => {
            dispatch(
                updateStarted(value)
            )
        },
        generateQuestion : () => {
            dispatch(
                generateQuestion()
            )
        }

    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        data : state.currQuestion,
        score : state.score
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
