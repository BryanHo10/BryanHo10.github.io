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
          <div>
            <p className="h4">
              Languages &amp; Tools
            </p>
              <span className="text-muted h6">Proficient in C++, C#, Javascript, and Git </span>
              <br/>
              <span className="text-muted h6">Familiar with Java, Python, and SQL</span>
              
          </div>
          
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
            workDesc={[
              "Worked on creating an open-licensed file conversion tool for improving translation processing.",
              "Constructed unit tests on an existing codebase that produced over 80% code coverage.",
              "Assisted in writing TravisCI scripts to automate the deployment process through Github.",
              "Implemented and debugged custom workflows within CRM built upon Dynamics 365."
            ]}
            workDate="June 2019 – August 2019"
            workLoc="Orlando, Florida"
          />
          <Experience
            workTitle="Instructional Student Assistant"
            workComp="California State University of Fullerton"
            workDesc={[
              "Explain introductory programming concepts in C++ to over 100 students",
              "Organized coursework scores and grades with Microsoft Excel improving efficiency by 50%.",
              "Create original programming assignments with test scripts along with 4 colleagues"
            ]}
            workDate="August 2018 – Present"
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
        projLang={["C#"]}
      />
      <Project 
        projTitle="Programming Assignment Web Interface"
        projDesc="Application for professors to modify or add assignments from Github Organization"
        projDate="September 2019"
        projLang={["React"]}
      />
      
      <Project 
        projTitle="Google Course Calendar"
        projDesc="Chrome extension to import CSUF course schedules with Google Calendars."
        projDate="August 2018"  
        projURL="https://github.com/CSUF-ACM/course-calendar"
        projLang={["JS","HTML"]}
      />
    </Layout>
)

export default IndexPage
