import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Card, CardHeader, CardText, CardBody,
  CardSubtitle, CardFooter, Button
} from 'reactstrap';

const Project = ({ projTitle,projURL,projDesc,projDate }) => (

    <div
      className="py-2"
    >
      <Card>
        <CardHeader>
          <span className="h5 text-muted">{projTitle}</span>
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
}

Project.defaultProps = {
  projTitle: ``,
  projURL: ``,
  projDesc: ``,
  projDate: ``
}

export default Project
