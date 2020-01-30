import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { NavbarToggler, Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const Navigate = ({ navInfo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar style={{background: `#636363`}} dark expand="md" className="align-bottom">
                <NavbarToggler onClick={toggle} dark  />
                <Collapse isOpen={isOpen} dark navbar className="align-bottom">
                    <Nav className="mr-auto align-bottom" navbar>
                        {Object.keys(navInfo).map((id)=>{
                            return(
                                <NavItem className="pr-5">
                                    <NavLink href={"#"+id} className="text-white"><span id="navLink" className="h5">{navInfo[id]}</span></NavLink>
                                </NavItem>
                            )
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

Navigate.propTypes = {
  navInfo: PropTypes.object
}

Navigate.defaultProps = {
  navInfo: {}
}

export default Navigate
