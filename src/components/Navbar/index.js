import "../../styles/Navbar.css";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

export default function Navbar(props) {
  return (
    <>
      <Nav>
        <NavLink to="/">Pizza</NavLink>
        <NavIcon onClick={props.state.toggle} >
          <p>Menu</p>
          <Bars/>
        </NavIcon>
      </Nav>
    </>
  );
}
