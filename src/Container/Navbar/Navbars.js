// navigation bar of app
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {connect} from 'react-redux';
import Example from '../../Component/Modal/Modal'; //importimg modal


class Navbars extends Component {

        render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" >
                <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                        <Example length={this.props.pardData.length} value={this.props.pardData}/>
                        </Nav.Link>
                       
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
const mapStateToProps=state=>{
    return{
      pardData:state.reducer1
    }
  }
  
export default connect(mapStateToProps)(Navbars);