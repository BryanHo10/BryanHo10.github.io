import React from "react"
import {withPrefix, Link} from "gatsby"

class Toolbar extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);
    };
  
  render() {
    return (
      <div className="border">
          <div className="row">
              <div className="col-sm">
                    <img src={withPrefix("/img/cross_home.png")}></img>
                    <h1>CrossWalk</h1>
              </div>
              <div className="col-sm">
                  <span>
                    <Link>Home</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                  </span>
              </div>
          </div>
      
      </div>
    );
  }
}
export default Toolbar;
