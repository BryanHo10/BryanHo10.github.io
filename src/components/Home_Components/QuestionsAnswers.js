import React from "react"
import { isNullOrUndefined } from "util";

class QuestionsAnswers extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div id="home_content" className="control-font">
                <p id="home_question" className={this.props.question.length >0 ? "py-3":""}>{this.props.question}</p>
                <p id="home_answer">{this.props.answer}</p>
            </div>

        );
    }
}

export default QuestionsAnswers;