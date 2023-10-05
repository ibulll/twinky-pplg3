import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.jpg";

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 600) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();
    window.addEventListener("scroll", changeBackgroundColor);
  }, []);

  return (
    <div className="my-navbar sticky-top">
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">
            <img
              src={logo}// Ganti dengan path logo Anda
              alt="Logo"
              className="logo-nav d-inline-block align-top mr-2 " // Menambahkan margin kanan agar tidak terlalu dekat dengan teks
             />Twinky PPLG 3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-center">
              <Nav.Link href="#hero" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#aboutUs" className="mx-2">
                About
              </Nav.Link>
              <Nav.Link href="#project" className="mx-2">
                Project
              </Nav.Link>
              <Nav.Link href="#gallery" className="mx-2">
                Gallery
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
