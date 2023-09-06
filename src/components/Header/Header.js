import React, {useState} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ImgLogo from "../../assets/img/logo kitepter.png";
import ImgStatus from "../../assets/img/Bookmark.png";
import ImgSearch from "../../assets/img/Search_light.png";
import ImgFilt from "../../assets/img/filtration.png";
import ImgNotification from "../../assets/img/Bell_pin.png";
import UserIcon from "../../assets/img/user-fill.png"
import BookIcon from "../../assets/img/book-line.png"

const HeaderPage = styled.div`
  background-color: #24255b;
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
  font-family: "Jura", sans-serif;
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
  background-color: #24255b;

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
const Status = styled.div``;
const UserPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
    font-family: 'Jost', sans-serif;
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
const User = styled.div`
  width: 100px;
  height: 50px;
  text-decoration-color: white;
`;

const Header = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  const authorizeUser = () => {
    setIsAuthorized(true);
  };

  const logoutUser = () => {
    setIsAuthorized(false);
  };

  return (
    <HeaderPage>
      <Container>
        <Logo onClick={() => navigate("/home")}>
          <img src={ImgLogo} width="100" height="100" />
        </Logo>
        <SearchContainer>
          <Input placeholder="Поиск..." type="text" size="30" color="white" />
          {/*<img src={ImgSearch} width="30" height="30"/>*/}
          <Filtration onClick={() => navigate("/filter")}>
            <img src={ImgFilt} width="43" height="43" />
          </Filtration>
        </SearchContainer>
        <Menu>
          <Status>
            <BoxStatus>
              <img src={ImgStatus} width="30" height="30" />
            </BoxStatus>
          </Status>
          <Notifiсation>
            <img src={ImgNotification} width="30" height="30" />
          </Notifiсation>
          <UserPage>
            {isAuthorized ? (
                <AuthorizedHeader onLogout={logoutUser} />
            ) : (
                // Render the header for non-authorized users
                <NonAuthorizedHeader onAuthorize={authorizeUser} />
            )}
            {/*<Logn onClick={() => navigate("/login")}>Логин</Logn>*/}
            {/*<Registr onClick={() => navigate("/register")}>Регистрация</Registr>*/}
          </UserPage>
        </Menu>
      </Container>
    </HeaderPage>
  );
};

const AuthorizedHeader = ({ onLogout }) => {
  return (
      <header>
        <h1>Welcome, User!</h1>
        <User>
          <img src={BookIcon} width="30" height="30"/>
          <img src={UserIcon} width="30" height="30"/>
        </User>
        <button onClick={onLogout}>Logout</button>
      </header>
  );
};
const NonAuthorizedHeader = ({ onAuthorize }) => {
  const navigate = useNavigate();
    // const history = useHistory();
    const handleLoginClick = () => {
        navigate('/login');
        onAuthorize();
    };
  return (
      <header>
        <h1>Welcome to Our App</h1>
        <Logn onClick={handleLoginClick}>Логин</Logn>
        <Registr onClick={() => navigate("/register")}>Регистрация</Registr>
      </header>
  );
}
export default Header;
