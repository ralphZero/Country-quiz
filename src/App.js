import React, { Component } from "react";
import Question from "./components/Question";
import Start from "./components/Start";
import bg from './background.png';
import axios from 'axios';
import { connect } from 'react-redux';
import { addData, updateStarted } from './actions/dataActions';

class App extends Component {

  componentDidMount(){
    let img = new Image();
    img.src = bg;
    img.onload = (e) => {
      document.querySelector('#root').style.backgroundImage = img.src;
    };

    if(localStorage.getItem('data') === null){
      axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital;flag').then((value) => {
        localStorage.setItem('data', JSON.stringify(value.data));
      });
      this.props.addData(JSON.parse(localStorage.getItem('data')));
    }else{
      this.props.addData(JSON.parse(localStorage.getItem('data')));
    }
  }

  handleOnStart = (val) => {
    this.props.changeStatus(val);
    console.log(this.props);
    console.log(this.generateRandomArray());
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 < currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  generateRandomArray = () => {
    let data = [];
    let a = [...this.props.data];
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random() * a.length - 5);
      let name = a.splice(num, 1)[0];
      if(name.capital === ''){
        let num = Math.floor(Math.random() * a.length - 5);
        name = a.splice(num, 1)[0];
      }
      name.id = i;
      data.push(name);
    }
    let newData = [...data];
    let question = newData.slice(1, 2);
    let answers = this.shuffle(newData.slice(1, newData.length));
    return {
      answer : question[0].id,
      question : question[0],
      answers : answers
    }
  }

  render() {
    const show = this.props.started ? (
      <Question />
    ) : (
      <Start onStart={this.handleOnStart} />
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
    data : state.data,
    started : state.started
  }    
}

const mapDispatchToProps = (dispatch) => {
  return {
    addData : (data) => {
      dispatch (
        addData(data)
      )
    },
    changeStatus : (value) => {
      dispatch (
        updateStarted(value)
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
