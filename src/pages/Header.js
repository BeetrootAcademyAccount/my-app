import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ currentPage, updatePage, clickInHeader, pages }) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{currentPage}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => updatePage(pages.MAIN)}>
              Landing
            </Nav.Link>
            <Nav.Link href="#" onClick={() => updatePage(pages.LOGIN)}>
              Login
            </Nav.Link>
            <Nav.Link href="#" onClick={() => updatePage(pages.REGISTER)}>
              Register
            </Nav.Link>
            <Nav.Link href="#" onClick={clickInHeader}>
              Click
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
