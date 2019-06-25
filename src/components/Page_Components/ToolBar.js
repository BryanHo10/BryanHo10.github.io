import React from "react"
import {withPrefix, Link} from "gatsby"

class Toolbar extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);
    };
  
  render() {
    return (
      <div>
          <div className="row">
              <div id="site_marker" className="col-sm-6 border">
                    <span className="border px-2">
                      <img id="logo_img" className="py-2" src={withPrefix("img/cross_home.png")}/>
                      </span>
                      <span className="border">
                        CrossWalk
                    </span>
              </div>
              <div className="col-sm-6">
                <div id="top_navi" className="ml-auto border" >
                    <Link>Home</Link>
                    <Link className="px-5">Blog</Link>
                    <Link>Contact</Link>
                  </div>
              </div>
          </div>
      
      </div>
    );
  }
}
export default Toolbar;
