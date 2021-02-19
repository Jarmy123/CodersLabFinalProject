import React from 'react';
import "../index.css"


const Difficulty = ({setDifficulty, setQuestions, questions}) => {
    function handleChangeLevel(level) {
        setDifficulty(+level);
        setQuestions(questions.filter((el) => +el.difficulty === +level))
    }

    // function level1() {
    //     setDifficulty(1);
    //     setQuestions(questions.filter((el) => el.difficulty === "1"))
    // }
    // function level2() {
    //     setDifficulty(2);
    //     setQuestions(questions.filter((el) => el.difficulty === "2"))
    // }
    // function level3() {
    //     setDifficulty(3);
    //     setQuestions(questions.filter((el) => el.difficulty === "3"))
    // }
    return (
        <>
            <button onClick={() => handleChangeLevel(1)}
                    className={`ml-auto text-white bg-purple-700  p-4 font-semibold rounded shadow mt-6 mr-10`}>Easy
            </button>
            <button onClick={() => handleChangeLevel(2)}
                    className={`ml-auto text-white bg-purple-700  p-4 font-semibold rounded shadow mt-6 mr-10`}>Medium
            </button>
            <button onClick={() => handleChangeLevel(3)}
                    className={`ml-auto text-white bg-purple-700  p-4 font-semibold rounded shadow mt-6`}>Hard
            </button>
        </>
    )
}
export default Difficulty;