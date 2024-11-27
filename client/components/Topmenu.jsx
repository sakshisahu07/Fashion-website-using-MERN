import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Topmenu=()=>{
    return(
      <>
      
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pretty-petals</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as ={Link} to="shop">Shop</Nav.Link>
            <Nav.Link as ={Link} to="product">Product</Nav.Link>
            <Nav.Link as ={Link} to="search">Search</Nav.Link>
            <Nav.Link as ={Link} to="contact">Contact</Nav.Link>
            <Nav.Link as ={Link} to="carddata">CardData</Nav.Link>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mens</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Women</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Kids
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    )
  }
  export default Topmenu;