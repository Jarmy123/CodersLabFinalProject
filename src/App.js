import React, {useState, useEffect} from 'react';
import {GameEnded} from "./components/gameEnded";
import {Questionaire} from './components';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use-window-size/index'
import Difficulty from "./components/Difficulty";


const API_URL = `https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple`;
const API_questions = "http://localhost:3000/results";


function App() {
    //Trzymanie wszystkich state
    // const {width, height} = useWindowSize;
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [showAnswers, setShowAnswers] = useState(false);
    const [difficulty, setDifficulty] = useState(null);

    //ładowanie wszystkich questions z jsonserver
    useEffect(() => {
        fetch(API_questions)
            .then((res) => res.json())
            .then((data) => {
                const que = data.sort(() => Math.random() - 0.5)
                const questions = que.map((question) =>
                    ({
                        ...question,
                        answers: [
                            question.correct_answer,
                            ...question.incorrect_answers,
                        ].sort(() => Math.random() - 0.5)
                    }));
                setQuestions(questions);
            });
    }, []);

//dodaje pkt jeżeli odpowiedź zgadza się z poprawną
    const handleAnswer = (answer) => {
        if (!showAnswers) {
            if (answer === questions[currentIndex].correct_answer) {
                setScore(score + 1);
            }
        }
        setShowAnswers(true);
    }

    const handleNextQuestion = () => {
        setShowAnswers(false);
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        setCurrentIndex(currentIndex + 1);
        if (newIndex >= questions.length) {
            setGameEnded(true);
        }
    }

    if (difficulty === null) return <Difficulty setDifficulty={setDifficulty} setQuestions={setQuestions}
                                                questions={questions}/>;

    if (gameEnded) return <GameEnded score={score}/>


    if (questions.length <= 0)
        return <h2 className="text-2xl text-white font-bold">Loading...</h2>;

    return (
        <>
            <div className="container">
                <Questionaire
                    data={questions[currentIndex]}
                    handleAnswer={handleAnswer}
                    showAnswers={showAnswers}
                    handleNextQuestion={handleNextQuestion}/>
            </div>
        </>

    );

}

export default App;
