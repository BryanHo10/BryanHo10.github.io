import React from "react";
import { Link } from "gatsby";



// Sticky Top Navigation -- [ Home,  Blog,  Contact]
class Toolbar extends React.Component {
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm">
                        <span><Link to="/">CrossWalk</Link></span>
                    </div>
                    <div className="col-sm">
                        <span><Link to="/">Home</Link></span>
                        <span><Link to="/">Blog</Link></span>
                        <span><Link to="/">Contact</Link></span>
                    </div>
                </div>
            </div>
        );
    }
}