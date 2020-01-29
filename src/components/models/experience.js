import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  ListGroup,ListGroupItem,ListGroupItemHeading,ListGroupItemText
} from 'reactstrap';
import { FaBriefcase } from "react-icons/fa";

const Experience = ({ workTitle, workComp, workLoc, workDesc, workDate }) => (
        <ListGroupItem>
            <ListGroupItemHeading>
                <FaBriefcase color="gray"/>
                <span className="px-2"></span>
                {workTitle} <span className="float-right text-muted"><h5>{workDate}</h5></span>
                <br/>
                
                <h6 className="text-muted pt-2">{workComp}</h6>
                <hr/>
            </ListGroupItemHeading>
            <ListGroupItemText>
                {workDesc.map((elem)=>{
                    return (
                        <p className="px-3">
                            &bull; {elem}
                        </p>
                    )
                })}
            </ListGroupItemText>
        </ListGroupItem>
)

Experience.propTypes = {
  workTitle: PropTypes.string,
  workComp: PropTypes.string,
  workDesc: PropTypes.array,
  workLoc: PropTypes.string,
  workDate: PropTypes.string,
}

Experience.defaultProps = {
  workTitle: ``,
  workComp: ``,
  workDesc: [],
  workLoc: ``,
  workDate: ``,
}

export default Experience
