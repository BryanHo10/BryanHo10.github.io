import React from "react"
import {withPrefix} from "gatsby"

class Jumbotron extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);
    };
  
  render() {
    return (
      <div>
        <img src="/img/no-cover.png"/>
        
        <h2>[ Insert Title Here]</h2>
        <h3>[ Insert Date Here ]</h3>
      </div>
    );
  }
}
export default Jumbotron;
