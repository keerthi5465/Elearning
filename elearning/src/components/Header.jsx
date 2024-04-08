
import styled from 'styled-components';

const Container = styled.div`
  background-color: #202020;
  min-height: 100vh;
 
`;

const HeaderContainer = styled.header`
  position:fixed;
  top: 0;
  left: 0;
  width: 100%;
 padding:40px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Logo = styled.h2`
  font-size: 2em;
  color: #ffff;
  pointer-events: none;
  
  
`;

const Navigation = styled.nav`

  a {
    
    
    color: #ffff;
    padding: 10px 50px;
    
    &:hover {
      font-size:20px;
      color: #fff;
      font-weight:bold;
    }
    &.active{
      color:#fff;
      font-weight:bold;
    }
  }
`;

const SignInButton = styled.a`
  position: fixed;
  top:8%;
  transform: translateY(-50%);
  right: 30px; 
  padding: 10px 20px;
  background-color: #07c2c2;
  color: #202020;
  border-radius: 20px;
  text-decoration: none;

  &:hover {
    background-color: #06a7a7;
    font-size:15px;
  }
`;


const Header = () => {
  return (
    <Container >
      <Logo ><img src="/logo.jpg"  alt="logo" width={150} height={150}/></Logo>
      <HeaderContainer >
        
        <Navigation>
          <a href="#" className="active">Home</a>
          <a href="#">Courses</a>
          <a href="#">Boost</a>
          <a href="#">Test</a>
          
        </Navigation>
        <SignInButton href="#">SignIn/LogIn</SignInButton>
      </HeaderContainer>
      
    </Container>
  );
};

export default Header;
