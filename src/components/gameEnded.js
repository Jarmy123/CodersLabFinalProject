import React from 'react';
import Confetti from "react-confetti";
import useWindowSize from 'react-use-window-size/index'
const {width, height} = useWindowSize;

export const GameEnded = ({score}) => {
    return (
        <>
            <Confetti width={width} height={height}/>
            <h1 className="text-3xl text-white font-bold">Your score is {score}!</h1>
        </>
    )
}

