import React from "react"
import { Link,withPrefix } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import Project from "../components/models/project"
import { Jumbotron, Button } from 'reactstrap';

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <div>
        <Jumbotron>
          <img src={withPrefix("/profile.png")} style={{ maxHeight: `200px`, marginBottom: `1.45rem` }}/>
          <p className="lead">

          </p>
          <hr className="my-2" />

          <p>Work in Progress, but this is me.</p>
        </Jumbotron>
      </div>
      <h2>
        Work Experience
      </h2>
      <h2>
        Projects
      </h2>
      <Project 
        projTitle="USFMToolSharp"
        projDate="June 2019"
        projURL="https://github.com/WycliffeAssociates/USFMToolsSharp"
        projDesc="Toolkit to convert USFM to other file formats."
      />
      <Project projTitle="Programming Assignment Web Interface"
      projDesc="Application for professors to modify or add assignments from Github Organization"/>
      <Project projTitle="Google Course Calendar"
      projDesc="Chrome extension to import CSUF course schedules with Google Calendars."/>
    </Layout>
)

export default IndexPage
