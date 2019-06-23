import React from "react"

import Jumbotron from "../components/Page_Components/jumbotron"
import ReactHelmet from "../components/Page_Components/head"
import Toolbar from "../components/Page_Components/ToolBar";


export default ({location}) => (

  <div>
    
    <ReactHelmet
            tabTitle={"Home"}
    />
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar/>
    <Jumbotron/>
    
  </div>
)