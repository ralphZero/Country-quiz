import React from 'react';
import sheet from './Start.module.css';
import adventure from '../adventure.svg';

const Start = ({ onStart }) => {

    function setAnimations(e) {
        const btn = e.currentTarget;
        const img = e.currentTarget.previousElementSibling;
        img.classList.add(sheet.logoSlide);
        btn.classList.add(sheet.btnFade);
        setTimeout(() => {
            onStart(1);
        }, 1500);
    }

    return (
        <div className={sheet.container}>
            <img className={sheet.logo} src={adventure} alt="logo"/>
            <button className={sheet.btn} onClick={(e) => {setAnimations(e)}}>
                Start
            </button>
        </div>
    );
}

export default Start;
