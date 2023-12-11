import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import './DashboardNavBar.scss';

type DashboardNavBarProps = {
  isDarkMode: boolean;
};


const DashboardNavBar: React.FC<DashboardNavBarProps> = ({ isDarkMode }) => {
  const [navbarVariant, setNavbarVariant] = useState<string>('light');

  useEffect(() => {
    setNavbarVariant(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <Navbar bg={navbarVariant} variant={navbarVariant} >
      <Container>
        <Navbar.Brand href="#home">Elvis Chino-Islas</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Projects" id="collasible-nav-dropdown" menuVariant={navbarVariant}>
            <NavDropdown.Item href="#action/3.1">Micro Node Cluster</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar >
  );
};

export default DashboardNavBar;
