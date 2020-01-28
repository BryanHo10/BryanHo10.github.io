import React from "react"
import { Link,withPrefix } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

import Project from "../components/models/project"
import { Jumbotron, Button, ListGroup } from 'reactstrap';
import Experience from "../components/models/experience";

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
      <div>
        <Jumbotron>
          <div className="row">
            <img src={withPrefix("/profile.png")} style={{ maxHeight: `200px`, maxWidth:`200px`, marginBottom: `1.45rem`}} className="col-md-3"/>
            <p className="h4 px-3">
              Bryan Ho
              <br/>
              <span className="text-muted h5">Software Developer</span>
              <br/>
              <span className="text-muted h5">California State University of Fullerton</span>
              <br/>
            </p>
          </div>
          <hr className="my-2" />

          <p>Work in Progress, but this is me.</p>
        </Jumbotron>
      </div>
      <div className="py-2">
        <h2 className="pb-1">
          Work Experience
        </h2>
        <ListGroup>
          <Experience
            workTitle="Software Development Intern"
            workComp="Wycliffe Associates"
            workDesc={["asdfa","zxcv","qwer"]}
            workDate="June 2019"
            workLoc="Orlando, Florida"
          />
          <Experience
            workTitle="Software Development Intern"
            workComp="Wycliffe Associates"
            workDesc={["asdfa","zxcv","qwer"]}
            workDate="June 2019"
          />
        </ListGroup>
      </div>
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
