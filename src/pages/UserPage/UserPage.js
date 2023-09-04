import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import bgImg from "../../assets/img/bg-image.png"
import Avatar from "../../assets/img/Group 78.png"
import {useNavigate} from "react-router-dom";
import axios from "axios";






const AccountPage = styled.div`
  background-image: url("${bgImg}");
  background-size: 34%;
  background-repeat: no-repeat;
  width: 100%;
  height: 700px;
  background-position: 95% 95%;

`;
const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;

`;
const User = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;

`;
const UserImg = styled.div`
  img {
    width: 160px;
    height: 160px;
  }
`;
const UserName = styled.div`
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  margin-left: 40px;
  font-size: 24px;

`;
const BoxInfo = styled.div`
  display: flex;
  margin-left: 23px;


`;
const UserDesc = styled.div`
  margin-right: 250px;
`;
const UserEmail = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  border: 1px solid #b7b2b2;;
  padding: 4px 10px;
  border-radius: 4px;
  color: #57595b;
`;
const UserNumber = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  border: 1px solid #b7b2b2;;
  padding: 4px 10px;
  border-radius: 4px;
  color: #57595b;
`;
const UserLocation = styled.div`
  margin-bottom: 15px;
  font-size: 20px;
  border: 1px solid #b7b2b2;
  padding: 4px 10px;
  border-radius: 4px;
  color: #57595b;
`;
const UserBook = styled.div`
  border-left: 2px solid #8F939B;
  padding-left: 120px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: 'Jost', sans-serif;


`;
const UserChange = styled.div`
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #24255B;
  padding: 10px 80px;
  border-radius: 25px;
  font-family: 'Jost', sans-serif;


`;
const UserLogout = styled.div`
  font-size: 18px;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  background-color: #F3B469;
  padding: 10px 38px;
  border-radius: 25px;
  font-family: 'Jost', sans-serif;
`;
const BookHave = styled.div`
  font-size: 16px;
  color: #4f4d4d;
  margin: 20px 0;

`;
const Button = styled.div`
  font-size: 16px;
  cursor: pointer;
  width: 42%;
  color: white;
  background-color: #24255B;
  padding: 10px 32px;
  border-radius: 25px;
  font-family: 'Jost', sans-serif;

`;
const BackgroundImg = styled.div`
  background-image: url("${bgImg}");
  background-size: cover;

  img {
    height: 300px;
    width: 300px;
  }
`;

const UpdateProfil = styled.div`
  font-size: 17px;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  margin-left: 55px;
  background-color: #037281;
  padding: 10px 38px;
  border-radius: 25px;
  font-family: 'Jost', sans-serif;
  width: 120px;
`;
const UserEdit = styled.div`
`;
const BookTitle = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
`;
const AllBooks = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  cursor: pointer;
  color: #545252;

`;



const UserPage = (props) => {
    const navigate = useNavigate();
    const [profile, setProfile] = useState([])
    const [userBook, setUserBook] = useState([])
    const token = JSON.parse(localStorage.getItem("user"))
     // console.log(token)



    useEffect( () => {
     fetchUserData()
 }, [])

    const userPageBooks = async () => {
        try{
            const userBooks = await axios.get("http://34.173.33.226/api/v1/my-books/")
           setUserBook()
            console.log(userBooks)

        } catch (error) {
             console.log("Error fetching user books" , error)
        }
    }


       const fetchUserData = async () => {
         try {
             const response = await axios.get("http://34.173.33.226/api/v1/userpage/", {
                 headers: {
                    Authorization: `Bearer ${token.access}`
                 },
             });
             setProfile(response.data.results[0]);
             // console.log(response.data.results)
         } catch (error) {
             console.log("Error fetching user data" , error)
         }
     };

    return (
        <AccountPage>
            <Container>
                <User>
                    <UserImg>
                        <img src={Avatar} width="40" height="40"/>
                    </UserImg>
                    <UserEdit>
                        <UserName>Здравствуйте,{profile.username}!</UserName>
                        <UpdateProfil>Редактировать</UpdateProfil>
                    </UserEdit>
                </User>
                <BoxInfo>
                    <UserDesc>
                        <UserEmail>{profile.email}</UserEmail>
                        <UserNumber>{profile.number}</UserNumber>
                        <UserLocation>{profile.city}</UserLocation>
                        <UserChange>Изменить</UserChange>
                        <UserLogout>Выйти из аккаунта</UserLogout>
                    </UserDesc>
                    <UserBook>
                        Моя библиотека
                        <BookHave>
                            <BookTitle>Повелитель мух/Уильям Голдинг</BookTitle>
                            <BookTitle> Алиса в стране чудес/Льюис Кэрролл</BookTitle>
                            <BookTitle>...</BookTitle>
                        </BookHave>
                        <AllBooks>Весь список</AllBooks>
                        <Button type="submit" onClick={() => navigate("/add-book")}>
                            Добавить книгу
                        </Button>
                    </UserBook>
                </BoxInfo>
                <BackgroundImg>
                </BackgroundImg>
            </Container>
        </AccountPage>
    );
};

export default UserPage;