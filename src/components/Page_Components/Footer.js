import React from "react"
import {withPrefix, Link} from "gatsby"

class Footer extends React.Component {
  //Probably should take a MainObject instead of individual props.
  constructor(props){
    super(props);
    };
  
  render() {
    return (
      <div>
          <div className="row">
              <div id="site_marker" className="col-sm-4 border">
                    <span className="border px-2">
                      <img id="logo_img" className="py-2" src={withPrefix("img/cross_home.png")}/>
                      </span>
                      <span className="border">
                        CrossWalk
                    </span>
              </div>
              <div className="col-sm-8">
                <div id="crosswalk_verse">
                    <p className="px-5">
                    For God did not send his Son into the world to condemn
                    the world, but in order that the world might be saved
                    through him.  
                    </p>
                </div>
              </div>
              <div id="foot_navi" className="row" >
                    <div className="col-sm-4">
                        <Link>Home</Link>
                    </div>
                    <div className="col-sm-4 m-auto">
                        <Link>Blog</Link>
                    </div>
                    <div className="col-sm-4">
                        <Link>Contact</Link>
                    </div>
                </div>
          </div>
      
      </div>
    );
  }
}
export default Footer;
