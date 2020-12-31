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
            this.props.updateScore();
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
        updateScore : () => {
            dispatch(
                updateScore()
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
    return {
        data : state.currQuestion
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);
