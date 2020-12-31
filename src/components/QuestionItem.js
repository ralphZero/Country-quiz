import React from 'react';
import AnswerItem from './AnswerItem';
import sheet from './QuestionItem.module.css';

const QuestionItem = ({ data, onCompleted, onNext }) => {

    function answerSelected(target, id) {
        let children = target.parentElement.children;
        let btn = target.parentElement.nextSibling.firstChild;
        

        for (let i = 0; i < children.length; i++) {
            let child = children[i];
            child.classList.add('no-hover');
        }

        if(id === parseInt(data.answer)){
            for (let i = 0; i < children.length; i++) {
                let child = children[i];
                if(parseInt(child.dataset.eid) === id){
                    child.classList.add('is-good');
                }
            }
            onCompleted('success')
            btn.style.display = 'block';
        }else{
            for (let i = 0; i < children.length; i++) {
                let child = children[i];
                if(parseInt(child.dataset.eid)  === id){
                    child.classList.add('is-bad');
                }
                if(parseInt(child.dataset.eid)  === data.answer){
                    child.classList.add('is-good');
                }
            }
            setTimeout(() => {
                onCompleted('failed');
            }, 1500);
        }
    }

    function resetEffects(target){
        let children = target.parentElement.previousSibling.children;
        for(let i = 0; i < children.length; i++){
            let child = children[i];
            child.classList.remove('no-hover','is-good','is-bad');
            child.style.display = 'none';
        }
        onNext();
        target.style.display = 'none';
        for(let i = 0; i < children.length; i++){
            let child = children[i];
            child.style.display = 'flex';
        }
    }

    const list = data.answers.map((answer, index) => {
        const letters = ['A','B','C','D'];
        return (
            <AnswerItem key={answer.id} letter={letters[index]}
             text={answer.name} id={answer.id} 
             onSelected={answerSelected}/> 
        )
    });

    const showFlag = data.hasFlag ? 
    ( <img className={sheet.flag} src={data.question.flag} alt="flag"/> ) 
    : null;

    const question = data.hasFlag ? (
        <span>Which country does this flag belong to ?</span>
    ) : (
        <span>{data.question.capital+' is the capital of'}</span>
    );

    return (
        <div>
            <div className={sheet.questionContainer}>
                { showFlag }
                { question }
            </div>
            <div className={sheet.answerContainer}>
                { list }
            </div>
            <div className={sheet.nextContainer}>
                <button onClick={(e) => resetEffects(e.currentTarget)} style={{display : 'none'}} className={sheet.button}>Next</button>
            </div>
        </div>
    );
}

export default QuestionItem;
