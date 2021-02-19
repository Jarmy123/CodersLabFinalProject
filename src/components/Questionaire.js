import React from 'react';


const Questionaire = ({showAnswers, handleAnswer,handleNextQuestion, data: {question, correct_answer, answers},}) => {
    return(
        <div className="flex flex-col">
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-4">
                {answers.map((answer, idx) => {
                    //ustawiam która klasa ma się wyświetlić w button w zależności od showanswers i answer
                        const textColor = showAnswers ? answer === correct_answer ? 'text-green-500' : 'text-red-500' : 'text-purple-500'
                        // const textColor = showAnswers ? 'text-white' : 'text-purple-800';
                    return(
                        <button
                            key={idx}
                            className={`bg-white p-4 ${textColor} font-semibold rounded shadow`}
                            onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                    )
                })}
            </div>
            {showAnswers && (
                <button onClick={handleNextQuestion} className={`ml-auto text-white bg-purple-700  p-4 font-semibold rounded shadow mt-6`}>
                    Next Question
                </button>
            )}
        </div>
    )
}


export default Questionaire;