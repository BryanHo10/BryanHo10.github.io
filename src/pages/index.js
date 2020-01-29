import React from "react"
import { Link,withPrefix } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Project from "../components/models/project"
import { Jumbotron, Button, ListGroup, Form, FormGroup, Input,Row, Col } from 'reactstrap';
import Experience from "../components/models/experience";

const IndexPage = () => (
    <Layout id="_Home">
      <SEO title="Home" />
      <div >
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
              <div className="pt-3">
                <a href="https://github.com/BryanHo10">
                  <FaGithub color="gray" size="1.3em"/>
                </a>
                <span className="px-2"></span>
                <a href="https://www.linkedin.com/in/bryan-ho-10/">
                  <FaLinkedin color="gray" size="1.3em"/>
                </a>
                <span className="px-2"></span>
                <a href="mailto:bryankho1010@gmail.com">
                  <FaEnvelope color="gray" size="1.3em"/>
                </a>
              </div>
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
      <div className="py-2" id="_Work">
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
      <h2 className="pb-1" id="_Project">
        Projects
      </h2>
      <div className="pl-4">
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
      </div>
      <span id="_Contact"></span>
    <h2 className="py-2">
      Contact Me
    </h2>
    <div className="pl-4">
        <Form
          action="https://formspree.io/xvoaoawl"
          method="POST"
        >
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Input type="text" name="name" placeholder="Name" className="col-md"/>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Input type="email" name="_replyto" id="exampleEmail" placeholder="Email" className="col-md" />
                </FormGroup>
              </Col>
            </Row>
              <FormGroup>
                <Input type="text" name="_subject" id="subject" placeholder="Subject"/>      
              </FormGroup>
              <FormGroup>
                <Input type="textarea" name="message" id="exampleText" placeholder="Message" rows={6}/>
              </FormGroup>
            <Button type="submit" className="px-3" color="secondary">Send Message</Button>
        </Form>
    </div>
    </Layout>
)

export default IndexPage
