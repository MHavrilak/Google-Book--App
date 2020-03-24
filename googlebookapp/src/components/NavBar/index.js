import React from "React";

function Nav() {
    return (
        <div>
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Google Book Search</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="searchNav">
      <Nav.Link href="#home">Search</Nav.Link>
      <Nav.Link href="#link">Saved</Nav.Link>
      </div>
    )
}

export default Nav;