import React from "react"

class QuestionsAnswers extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
                <p id="home-question" className="border">Where's your Question?</p>
                <p id="home-answer" className="border">This is my Answer</p>
            </div>

        );
    }
}

export default QuestionsAnswers;