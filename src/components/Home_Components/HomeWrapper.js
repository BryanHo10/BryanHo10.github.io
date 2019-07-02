import React from "react"
import QuestionsAnswers from "./QuestionsAnswers.js";
import HomeQA from "../../storage/home-text.json"

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
                        <div id="page_left_bound" style={{width:"220px", borderTop:"3px solid var(--mainblue)"}}>
                            <div  id="side_marker" className="ml-auto">
                            </div>
                        </div>
                    <div className="col-sm p-5">
                        {
                            HomeQA.map(questionAnswer=>{
                                return(
                                    <QuestionsAnswers
                                        question={questionAnswer.question}
                                        answer={questionAnswer.answer}                                        
                                    />
                                );
                            })
                        }
                    </div>

                </div>
            </div>

        );
    }
}

export default HomeWrapper;