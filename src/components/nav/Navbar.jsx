import { useContext, useState } from "react";
// import {NavbarStyle} from "./Navbar.style"
import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav, { Logo, Menu, MenuLink, Hamburger } from "./Navbar.style";
import { GiHamburgerMenu } from "react-icons/gi";
import { LoginContext } from "../../context/LoginContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setUser } = useContext(LoginContext);
  const handleLogout = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <Nav justify="space-between" wrap="wrap">
      <Logo to="/">
        <i>{"<Clarusway>"}</i>
        <span>Recipe</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
      <Menu isOpen={isOpen} onClick={() => setIsOpen(false)}>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="about">About</MenuLink>
        <MenuLink to="register">Register</MenuLink>
        <MenuLink to="login" onClick={handleLogout}>
          Logout
        </MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;
