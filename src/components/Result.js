import React from 'react';
import sheet from './Start.module.css';
import winners from '../winners.svg';

const Result = ({ result ,onRestart }) => {

    console.log(result);

    function setAnimations(e) {
        const btn = e.currentTarget;
        const img = e.currentTarget.previousElementSibling;
        img.classList.add(sheet.logoSlide);
        btn.classList.add(sheet.btnFade);
        setTimeout(() => {
            onRestart(1);
        }, 1500);
    }
    
    return (
        <div className={sheet.flexContainer}>
            <img src={winners} alt="logo"/>
            <h1 className={sheet.result}>Results</h1>
            <div className={sheet.resultText}>
                <span className={sheet.scoreText}>You got </span>
                <span className={sheet.score}>{ result }</span>
                <span className={sheet.scoreText}> correct answers</span>
            </div>
            
            <button className={sheet.btn+' '+sheet.btnNoMargin} onClick={(e) => {setAnimations(e)}}>
                Try again
            </button>
        </div>
    );
}

export default Result;
