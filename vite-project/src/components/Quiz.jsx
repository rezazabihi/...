import { useState } from "react";
import { questions } from "./quiz-data";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
 const handleReset=()=>{
     setCurrentQuestion (0);
     setShowScore (false);
     setScore (0);

 }
   const handleAnswerButtonClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div>
            {showScore ? (
                <div>
                    <p>Your score is: {score}</p>
                    <button onClick={() => setShowScore(false)}>Restart Quiz</button>
                </div>
            ) : (
                <div>
                    <p>{questions[currentQuestion].question}</p>
                    {questions[currentQuestion].options.map((option, index) => (
                        <button className="m-2 btn btn-outline-primary" key={index} onClick={() => handleAnswerButtonClick(option === questions[currentQuestion].correctAnswer)}>
                            {option}
                        </button>
                    
                    ))}
                    <button onClick={handleReset} className="m-2 btn btn-outline-danger">Reset</button>
                </div>
            )}
        </div>
    );
};

export default Quiz;