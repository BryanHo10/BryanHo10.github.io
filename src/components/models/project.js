import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Card, CardHeader, CardText, CardBody,
  CardSubtitle, CardFooter, Button
} from 'reactstrap';

const Project = ({ projTitle,projURL,projDesc,projDate }) => (

    <div
      className="border"
    >
      <Card>
        <CardHeader>{projTitle}</CardHeader>
        <CardBody>
          <CardSubtitle>{projDate}</CardSubtitle>
          <CardText>{projDesc}</CardText>
        </CardBody>
        <CardFooter>{projURL}</CardFooter>
      </Card>
    </div>

)

Project.propTypes = {
  projTitle: PropTypes.string,
  projURL: PropTypes.string,
  projDesc: PropTypes.string,
  projDate: PropTypes.string,
}

Project.defaultProps = {
  projTitle: ``,
  projURL: ``,
  projDesc: ``,
  projDate: ``
}

export default Project
