import React from "react"
import {withPrefix} from "gatsby"

class QuoteBanner extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);
    };
  
  render() {
    return (
      <div id="home_banner" className="container-fluid">
        <div>
            <h2 id="quote-start">Nothing in my hands I bring,</h2>
            <h2 id="quote-end">Simply to Thy cross I cling</h2>
        </div>
        <div>
            <h3 id="quote-author" className="ml-auto border">- Augstus Toplady</h3>
        </div>
      </div>
    );
  }
}
export default QuoteBanner;
