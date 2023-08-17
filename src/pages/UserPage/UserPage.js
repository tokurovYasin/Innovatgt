import React from 'react';
import styled from "styled-components";




// import Avatar from"../../assets/img/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
import bgImg from "../../assets/img/bg-image.png"



const AccountPage = styled.div`
  background-image: url("${bgImg}");
  background-size: 30%;
  
  
  width: 100%;
  height: 700px;
  
`;
const Container = styled.div`
  
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;

`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 50px ;  
  
`;
const UserImg = styled.div`
  img {
    width: 100px;
    height: 100px;
  }
`;
const UserName = styled.div`
margin-left: 40px;
  font-size: 24px;

`;
const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;

  
`;
const UserDesc = styled.div`



`;
const UserEmail = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;
const UserNumber = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;
const UserLocation = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
`;
const UserBook = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  
`;
const UserChange = styled.div`
  font-size: 16px;
  color: #4f4d4d;
  cursor: pointer;
  margin-bottom: 10px;
`;
const UserLogout = styled.div`
    font-size: 16px;
  color: #4f4d4d;
  cursor: pointer;  
`;
const BookHave = styled.div`
    font-size: 16px;
  color: #4f4d4d;
  margin: 20px 0;

`;
const AddBook = styled.div`
    font-size: 16px;
  color: #4f4d4d;
  cursor: pointer;

`;
const BackgroundImg = styled.div`
  background-image:  url("${bgImg}");
  background-size: cover;
  img{
    height: 300px;
    width: 300px;
  }


`;






const UserPage = (props) => {
       const { setEmail, setPassword, setRepeatPassword, setNumber, setName, setCity } = props
    return (
        <AccountPage>
            <Container>
                <User>
                    <UserImg>
                      {/*<img src={Avatar} />*/}
                    </UserImg>
                    <UserName>Айганыш</UserName>
                </User>
                <BoxInfo>
                <UserDesc>
                    <UserEmail>aiganysh@gmail.com</UserEmail>
                    <UserNumber>+4205766453</UserNumber>
                    <UserLocation>Bishkek</UserLocation>
                    <UserChange>Изменить</UserChange>
                    <UserLogout>Выйти из аккаунта</UserLogout>
                </UserDesc>
                    <UserBook>
                        Моя библиотека
                        <BookHave>
                            Пусто
                        </BookHave>
                        <AddBook>
                            Добавить книгу
                        </AddBook>
                    </UserBook>
                </BoxInfo>
               <BackgroundImg>

               </BackgroundImg>

            </Container>
        </AccountPage>
    );
};

export default UserPage;