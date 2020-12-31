const initState = {
    started : 0,
    data : [],
    currQuestion : null,
    score : 0
}

function shuffle(array){
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

function generateRandomArray(state){
    let data = [];
    let a = [...state.data];
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
    let answers = shuffle(newData.slice(1, newData.length));
    let type = Math.floor(Math.random() * 10) % 2 === 0 ? false : true;

    return {
        answer : question[0].id,
        question : question[0],
        answers : answers,
        hasFlag : type
    }
  }

const rootReducer = (state = initState, action) => {
  if(action.type === 'ADD_DATA'){
      return {
          ...state,
          data : action.data
      }
  }
  if(action.type === 'UPDATE_STATUS'){
      return {
          ...state,
          started : action.value
      }
  }
  if(action.type === 'GENERATE_QUESTION'){
      return {
          ...state,
          currQuestion : generateRandomArray(state)
      }
  }
  if(action.type === 'UPDATE_SCORE'){
    return {
      ...state,
      score : state.score =+ 1
    }
  }
  return state;
}

export default rootReducer;