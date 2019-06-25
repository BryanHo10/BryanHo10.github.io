import React from "react"

import QuoteBanner from "../components/Page_Components/QuoteBanner"
import ReactHelmet from "../components/Page_Components/head"
import Toolbar from "../components/Page_Components/ToolBar";
import Footer from "../components/Page_Components/Footer";


export default ({location}) => (

  <div>
    
    <ReactHelmet
            tabTitle={"Home"}
    />
    {/* <p>Such wow. Very React.</p> */}
    <Toolbar/>
    <QuoteBanner/>
    <Footer/>
    
  </div>
)