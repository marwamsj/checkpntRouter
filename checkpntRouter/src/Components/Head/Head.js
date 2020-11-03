import React from 'react'
import { Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Head() {
    return (
    
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">KDrama</Navbar.Brand>
    <Nav className="mr-auto">
      <Link to="/">
      <Nav style={{color:"#fff"}} >Drama List</Nav>
      </Link>
      <Nav style={{paddingLeft:"25px",color:"#fff"}} >Anime List</Nav>  
    </Nav>
  
    </Navbar>
    

    )
}

export default Head
