import {
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SideBtnWrap,
  CloseIcon
} from "./SidebarElements";

export default function Sidebar(props) {
  return (
    <SidebarContainer isOpen={props.state.isOpen}>
      <Icon onClick={props.state.toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Drinks</SidebarLink>
        <SidebarLink to="/">Deserts</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
}
