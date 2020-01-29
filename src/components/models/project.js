import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Card, CardHeader, CardText, CardBody,
  CardSubtitle, CardFooter, Button, Badge
} from 'reactstrap';

const Project = ({ projTitle,projURL,projDesc,projDate,projLang }) => (

    <div
      className="py-2"
    >
      <Card>
        <CardHeader>
          <span className="h5 text-muted">
            {projTitle} 
            {projLang.map((elem)=>{
              let colorChoice = "secondary";
              switch(elem){
                case `C#`:
                  colorChoice="success";
                  break;
                case `React`:
                  colorChoice="primary";
                  break;
                case `JS`:
                  colorChoice="info";
                  break;
                case `HTML`:
                  colorChoice="warning";
                  break;
                case `Java`:
                  colorChoice="Danger";
                  break;
                case `Python`:
                  colorChoice="warning";
                  break;
                case `C++`:
                  colorChoice="muted";
                  break;
              }
              return(<Badge className="px-2 mx-2" color={colorChoice}>{elem}</Badge>)
            })}
          </span>
          <span className="float-right">
            <Link
              to="/"
            >
              <Button size="sm">
                More info
              </Button>
            </Link>
          </span>
        </CardHeader>
        <CardBody>
          <CardSubtitle className="text-muted">{projDate}</CardSubtitle>
          <CardText className="lead">{projDesc}</CardText>
        </CardBody>
        <CardFooter className="h6"><a href={projURL} className="text-info">{projURL}</a></CardFooter>
      </Card>
    </div>

)

Project.propTypes = {
  projTitle: PropTypes.string,
  projURL: PropTypes.string,
  projDesc: PropTypes.string,
  projDate: PropTypes.string,
  projLang: PropTypes.array,
}

Project.defaultProps = {
  projTitle: ``,
  projURL: ``,
  projDesc: ``,
  projDate: ``,
  projLang: [],
}

export default Project
