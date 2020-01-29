import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { NavbarToggler, Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";

const Navigate = ({ navInfo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <div>
            <Navbar style={{background: `#636363`}} dark expand="md">
                <NavbarToggler onClick={toggle} dark className="white" />
                <Collapse isOpen={isOpen} dark navbar>
                    <Nav className="mr-auto" navbar>
                        {Object.keys(navInfo).map((id)=>{
                            return(
                                <NavItem>
                                    <NavLink href={"#"+id} className="text-white pr-5"><span className="h5">{navInfo[id]}</span></NavLink>
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
