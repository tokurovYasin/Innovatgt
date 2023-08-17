import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import ImgLogo from "../../assets/img/logo kitepter.png"
import ImgStatus from "../../assets/img/Bookmark.png"
import ImgSearch from "../../assets/img/Search_light.png"
import ImgFilt from "../../assets/img/filtration.png"


const HeaderPage = styled.div`
background-color: #24255B;
`;


const Container = styled.div`
  width: 1220px;
  color: white;
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

const Logo = styled.div`
  img{
      cursor: pointer;
  }




`;

const SearchContainer = styled.div`
  font-family: 'Jura', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  img{
    content: "";
    position: absolute;
    top: 6px;
    right: 15px;
  }
  
  

  
`;

const Input = styled.input`
  border: antiquewhite;
  padding: 10px;
  box-shadow: 2px 1px 4px 0 #c9c3c3;
  border-radius: 25px;
   width: 500px;
  background-color:#24255B;
  color: white;
  position: relative;



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
 margin-left: 15px;
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

const BoxStatus = styled.div`
cursor: pointer;
  margin-left: 15px;
`;
const Filtration = styled.div`
cursor: pointer;
 margin-left: 15px;
`;


const Header = () => {
        const navigate = useNavigate();
    return (
        <HeaderPage>
        <Container>
            <Left>
                <Logo onClick={() => navigate("/home")}>
                        <img src={ImgLogo} width="100" height="100"/>
                </Logo>
            </Left>
             <Menu>
                 <SearchContainer>
                       <Input placeholder="Поиск..." type="text" size="30" color="white" />
                     <img src={ImgSearch} width="25" height="25"/>
                 </SearchContainer>
                 <Filtration>
                       <img src={ImgFilt} width="25" height="25"/>
                 </Filtration>
                 <Status>
                     <BoxStatus>
                         <img src={ImgStatus} width="25" height="25"/>
                     </BoxStatus>
                 </Status>
                <UserPage>
                       <Logn  onClick={() => navigate("/login")}>Login</Logn>
                    <Registr  onClick={() => navigate("/register")}>Register</Registr>
                </UserPage>
            </Menu>
        </Container>
            </HeaderPage>
    );
};

export default Header;