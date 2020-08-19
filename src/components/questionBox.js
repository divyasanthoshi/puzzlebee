import React, {useState} from "react";

const QuestionBox = ({question,options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return (
    <div className="questionBox">
        <div className="question">
        {question}
        </div>
        <div>
            {answer.map((option, index) => { return ( <button key={index}  className="answerBtn" onClick={ () => 
                {
                    setAnswer([option]);
                    selected(option)
                }
            }>{option}</button>) })}
        </div>
    </div>
    );
}

export default QuestionBox;