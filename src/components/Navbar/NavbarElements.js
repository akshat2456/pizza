import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  text-decoration: none !important;
  cursor: pointer;
  @media screen and (max-width: 400px) {
    position: absolute;
    top: 0.8rem;
    left: 1.4rem;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-150%, 100%);
    font-weight: bold;
    right: 80%;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  /* transform: translate(-50%, 15%); */
  /* align-self: center; */
`;
