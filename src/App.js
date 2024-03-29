import React, { Component } from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import bg from './background.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { addData, updateStarted, generateQuestion, resetScore } from './actions/dataActions';
import Result from "./components/Result";

class App extends Component {

  componentDidMount(){
    let img = new Image();
    img.src = bg;
    img.onload = (e) => {
      document.querySelector('#root').style.backgroundImage = img.src;
    };

    if(localStorage.getItem('data') === null){
      axios.get('https://restcountries.com/v2/all?fields=name,capital,flag').then((value) => {
        localStorage.setItem('data', JSON.stringify(value.data));
      });
      this.props.addData(JSON.parse(localStorage.getItem('data')));
    }else{
      this.props.addData(JSON.parse(localStorage.getItem('data')));
    }
  } 

  handleOnStart = (val) => {
    this.props.changeStatus(val);
  }

  handleRestart = () => {
    this.props.resetQuiz(0, 1);
  }

  render() {
    const show = this.props.started === 1 ? (
      <Question/>
    ) : (
      this.props.started === 0 ? (
      <Start onStart={this.handleOnStart} /> ) 
      : (
        <Result result={this.props.score} onRestart={this.handleRestart} />
      )
    );

    return (
      <>
        <span style={{ height : 10 }}></span>
        <div className='container'>
          <h1>country quiz</h1>
          { show }
        </div>
        <footer>
          Ralph Placide @ Devchallenges.io
        </footer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    started : state.started,
    currQuestion : state.currQuestion,
    score : state.score
  }    
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData : (data) => {
      dispatch (
        addData(data)
      );
      dispatch(
        generateQuestion()
      )
    },
    changeStatus : (value) => {
      dispatch (
        updateStarted(value)
      )
    },
    resetQuiz : (value, status) => {
      dispatch(
        resetScore(value, status)
      );
      dispatch(
        updateStarted(status)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
