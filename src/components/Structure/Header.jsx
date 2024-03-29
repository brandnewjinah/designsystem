import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

//comp
import { Notifications, Settings } from "../../assets/Icons";
import { neutral, breakpoint } from "../Token";
import { Div } from "../Containers/Divs";

const Header = ({ handleOpen }) => {
  const handleMenuBtnClick = () => {
    handleOpen((prev) => !prev);
  };

  return (
    <Container role="banner">
      <Wrapper>
        <MobileMenu onClick={handleMenuBtnClick}>menu</MobileMenu>
        <Div>
          <Link to="/">System</Link>
        </Div>
        <MenuItems>
          <Link to="#" role="button">
            <Settings width={20} height={20} color="#e9ecef" stroke={2} />
          </Link>
          <Link to="#" role="button">
            <Avatar>A</Avatar>
          </Link>
        </MenuItems>
      </Wrapper>
    </Container>
  );
};

const Flex = css`
  display: flex;
  align-items: center;
`;

const Container = styled.header`
  width: 100%;
  height: 50px;
  background-color: ${neutral[100]};
  box-shadow: 0 0.65rem 1.5rem rgb(18 38 63 / 3%);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  ${Flex}
  justify-content: space-between;
  height: 100%;
  padding: 0 1.5rem;
`;

const Avatar = styled.div`
  ${Flex}
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: green;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media ${breakpoint.lg} {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: none;
  cursor: pointer;

  @media ${breakpoint.lg} {
    display: block;
  }
`;

export default Header;
