import React from 'react';
import styled from "styled-components";

const Container = styled.div`
 max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
 a {
    text-decoration: none;
    color: black;
  }
`;


const SearchContainer = styled.div`
  font-family: 'Jura', sans-serif;
  margin-left: 20px;
`;

const Input = styled.input`
  border: antiquewhite;
  padding: 10px;
  box-shadow: 2px 1px 4px 0 #c9c3c3;
  border-radius: 4px;
`;

const Menu = styled.div`

`;
const Status = styled.div`

`;
const UserPage = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
`;
const Registr = styled.div`
margin-right: 5px;
`;
const Logn = styled.div`
`;







const Header = () => {
    return (
        <Container>
            <Left>
                <Logo>KITEPTER</Logo>
            </Left>
            <SearchContainer>
                <Input></Input>
            </SearchContainer>
            <Menu>
                <Status></Status>
                <UserPage>
                    <Registr>Register</Registr>
                    <Logn>Login</Logn>
                </UserPage>
            </Menu>

        </Container>
    );
};

export default Header;