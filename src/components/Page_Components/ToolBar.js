import React from "react"
import {withPrefix, Link} from "gatsby"

class Toolbar extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);
    };
  
  render() {
    return (
      <div className="container-fluid">
      <div className="row">
              <div id="site_marker" className="col-md">
                    <span className="px-2">
                      <img id="logo_img" className="py-2" src={withPrefix("img/cross_home.png")}/>
                      </span>
                      <span className="">
                        CrossWalk
                    </span>
              </div>
              <div className="col-md pt-1">
                <div id="top_navi" className=" ml-auto text-center">
                  <span>
                      <Link to="/">Home</Link>
                      <Link to="/blog" className="px-5">Blog</Link>
                      <Link to="/contact">Contact</Link>
                    </span>
                  </div>
              </div>
      
      </div>
      </div>
    );
  }
}
export default Toolbar;
