import React from 'react';
import { render } from 'react-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Promise</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">About Us</NavItem>
            <NavItem eventKey={2} href="#">FAQ</NavItem>
            <NavDropdown eventKey={3} title="Information" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Technology</MenuItem>
              <MenuItem eventKey={3.2}>Mission</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Career</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Sign In</NavItem>
            <NavItem eventKey={2} href="#">Sign Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  };
}
export default NavBar;
