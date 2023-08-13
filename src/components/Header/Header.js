import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
  color: #4a4a4a;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
  cursor: pointer;
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
 a {
    text-decoration: none;
    color: black;
  }
`;

const SearchContainer = styled.div`
  font-family: 'Jura', sans-serif;
  
`;

const Input = styled.input`
  border: antiquewhite;
  padding: 10px;
  box-shadow: 2px 1px 4px 0 #c9c3c3;
  border-radius: 4px;
   width: 500px;
`;

const Menu = styled.div`
display: flex;
  align-items: center;

`;
const Status = styled.div`

`;
const UserPage = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Registr = styled.div`
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
  
`;

const Logn = styled.div`
  cursor: pointer;
  font-size: 18px;
`;


const Header = () => {
        const navigate = useNavigate();
    return (
        <Container>
            <Left>
                <Logo to={"/home"}>КИТЕПТЕР</Logo>
            </Left>
             <Menu>
                <Input>
                </Input>
                 <Status></Status>
                <UserPage>
                       <Logn  onClick={() => navigate("/login")}>Login</Logn>
                    <Registr  onClick={() => navigate("/register")}>Register</Registr>
                </UserPage>
            </Menu>
        </Container>
    );
};

export default Header;