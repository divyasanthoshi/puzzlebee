import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/questionBox"

class QuizBee extends Component{
    state = {
        qBank: [],
        score: 0,
        responses: 0
    }

    getQuestions = () => {
        quizService().then(questions => {
            this.setState({
                qBank: questions
            });
        })
    }
    componentDidMount(){
        this.getQuestions();
    }

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            console.log("you are correct", answer);
            this.setState({
                score: this.state.score + 1
            })
        }
        this.setState({
            responses: this.state.responses + 1
        })
    }


    render(){
        return(
            <div className="container">
                <div className="title">
                    QuizBee
                </div>
                {this.state.qBank.length > 0 && this.state.responses !== 5  && this.state.qBank.map(
                        (response) => 
                        <QuestionBox question={response.question} options={response.answers} key={response.questionId}  selected = {answer => this.computeAnswer(answer, response.correct)}/>
                    )}
                    {this.state.responses === 5  && this.state.qBank.map(
                        (response) => 
                        <QuestionBox question={response.question} options={response.answers} key={response.questionId}  selected = {answer => this.computeAnswer(answer, response.correct)}/>
                    )}
                     
            </div>   
        );
    }

}

ReactDOM.render(<QuizBee/>, document.getElementById("root"));