import React from 'react';
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import ImgLogo from "../../assets/img/logo kitepter.png"
import ImgStatus from "../../assets/img/Bookmark.png"
import ImgSearch from "../../assets/img/Search_light.png"
import ImgFilt from "../../assets/img/filtration.png"
import ImgNotification from "../../assets/img/Bell_pin.png"


const HeaderPage = styled.div`
  background-color: #24255B;
`;

const Container = styled.div`
  width: 1220px;
  color: white;
  margin: 0 auto;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  img {
    cursor: pointer;
  }
`;

const SearchContainer = styled.div`
  font-family: 'Jura', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  //img {
  //  content: "";
  //  position: absolute;
  //  top: 10px;
  // left: 15px;
  //  cursor: pointer;
  //}
  img {
    position: absolute;
    right: 28px;
    top: 4px;
  }

`;

const Input = styled.input`
  border: antiquewhite;
  color: white;
  font-size: 18px;
  padding: 15px 10px 15px 20px;
  box-shadow: 2px 1px 4px 0 #c9c3c3;
  border-radius: 25px;
  width: 600px;
  background-color: #24255B;

  position: relative;

  &::placeholder {
    color: white;
    font-size: 18px;
    padding-left: 30px;
  }


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
    margin-left: 18px;
    cursor: pointer;
    font-size: 20px;

`;

const Logn = styled.div`
   margin-left: 18px;
    cursor: pointer;
    font-size: 20px;
`;

const BoxStatus = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;
const Filtration = styled.div`
  cursor: pointer;
  margin-left: 15px;
`;
const Notifiсation = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;


const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderPage>
            <Container>
                <Logo onClick={() => navigate("/home")}>
                    <img src={ImgLogo} width="100" height="100"/>
                </Logo>
                <SearchContainer>
                    <Input placeholder="Поиск..." type="text" size="30" color="white"/>
                    {/*<img src={ImgSearch} width="30" height="30"/>*/}
                    <Filtration>
                        <img src={ImgFilt} width="43" height="43"/>
                    </Filtration>
                </SearchContainer>
                <Menu>
                    <Status>
                        <BoxStatus>
                            <img src={ImgStatus} width="30" height="30"/>
                        </BoxStatus>
                    </Status>
                    <Notifiсation>
                        <img src={ImgNotification} width="30" height="30"/>
                    </Notifiсation>
                    <UserPage>
                        <Logn onClick={() => navigate("/login")}>Логин</Logn>
                        <Registr onClick={() => navigate("/register")}>Регистрация</Registr>
                    </UserPage>
                </Menu>
            </Container>
        </HeaderPage>
    );
};

export default Header;