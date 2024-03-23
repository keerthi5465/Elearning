
import styled from 'styled-components';

const Container = styled.div`
  background-color: #202020;
  min-height: 100vh;
`;

const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.h2`
  font-size: 2em;
  color: #07c2c2;
  pointer-events: none;
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: #07c2c2;
    padding: 6px 15px;
    border-radius: 20px;
    margin: 0 10px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover,
    &.active {
      background: #07c2c2;
      color: #fff;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Logo>logo</Logo>
        <Navigation>
          <a href="#" className="active">Home</a>
          <a href="#">Courses</a>
          <a href="#">Boost</a>
          <a href="#">Test</a>
          <a href="#">Login</a>
          <a href="#">icon</a>
        </Navigation>
      </HeaderContainer>
    </Container>
  );
};

export default Header;
