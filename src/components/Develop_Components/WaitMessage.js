import React from "react"

class WaitMessage extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div id="error_page"className="text-center py-5">
                <h1>{this.props.title}</h1>
                <h3>{this.props.message}</h3>
            </div>

        );
    }
}

export default WaitMessage;