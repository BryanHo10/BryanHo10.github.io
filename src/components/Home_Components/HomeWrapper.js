import React from "react"
import QuestionsAnswers from "./QuestionsAnswers.js";

class HomeWrapper extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                        <div id="page-left-bound" style={{width:"220px", borderTop:"3px solid var(--mainblue)"}}>
                            <div  id="side-marker" className="ml-auto">
                            </div>
                        </div>
                    <div className="col-sm p-5">
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                        <QuestionsAnswers/>
                    </div>

                </div>
            </div>

        );
    }
}

export default HomeWrapper;