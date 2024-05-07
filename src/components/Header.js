import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;


  .logo {
    /* Set the maximum width and height to ensure the logo doesn't exceed a certain size */
    max-width: 50%;
    max-height: 50%;
  
    /* Center the logo horizontally and vertically within its container */
    display: flex;
    align-items: center;
    justify-content: center;
  
    /* Add some margin around the logo */
    margin: 0 auto;
  
    /* Set a fixed width and height for the logo */
    width: 100px;
    height: 50px;
  
    /* Add some padding around the logo */
    padding: 10px;
  
    /* Set the background color of the logo */
    background-color: #ffffff;
  
    /* Add a border around the logo */
    border: 1px solid #cccccc;
  
    /* Add some box-shadow to the logo */
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  
    /* Add some text-align to the logo */
    text-align: center;
  }

`;
export default Header;
