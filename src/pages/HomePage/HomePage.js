import React from 'react';
import styled from "styled-components";
import imgMain from "../../assets/img/photo_2023-08-11_13-47-21.jpg"
import ImgWork from "../../assets/img/istockphoto-1153885263-612x612.jpeg"

const HomePageBlock =  styled.div`
  font-family: 'Borel', cursive;
  color: #4a4a4a;
`;

const MainPage = styled.div`
  background-image: url(${imgMain});
  background-size:cover;
  width: 100%;
  height: 100vh;
  position: relative;
  margin-bottom: 100px;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
`;

const MainTitleBox = styled.div`
  max-width: 600px;
`;

const MainTitle = styled.h1`
  font-size: 36px;
  position: absolute;
  top: 7%;
  right: 29%;
  font-family: 'Borel', cursive;
  margin-bottom: 50px;
`;

const MainDescription = styled.h1`
  font-size: 32px;
  position: absolute;
  top: 20%;
  right: 22%;
  font-family: 'Borel', cursive;
`;

const HowDoesWorkBlock = styled.div`
    display: flex;
`;

const HowDoesWorkBlockInfo = styled.div`
    padding-right: 30px;
`;

const HowDoesWorkTitle = styled.h2`
    font-size: 32px;
`;

const HowDoesWorkDescriptionTitle = styled.h3`
    font-size: 22px;
  margin: 0 0 10px 0;
`;

const HowDoesWorkDescription = styled.p`
    font-size: 20px;
`;

const HowDoesWorkBlockImg = styled.div`
    margin: 30px 0 0 0;
`;


const HomePage = () => {
    return (
        <HomePageBlock>
            <MainPage>
                <Container>
                    <MainTitleBox>
                        <MainTitle>Китептер - это платформа для обмена книгами.</MainTitle>
                        <MainDescription>
                            Мы объединяем людей, которые хотят читать книгу,<br/>
                            не покупая ее !
                        </MainDescription>
                    </MainTitleBox>
                </Container>
            </MainPage>
            <Container>
                <HowDoesWorkTitle>Как работает Китептер</HowDoesWorkTitle>
                <HowDoesWorkBlock>
                    <HowDoesWorkBlockInfo>
                        <HowDoesWorkDescription>
                            <HowDoesWorkDescriptionTitle>Найдите свою книгу</HowDoesWorkDescriptionTitle> Найдите книгу,
                            которую хотите прочитать.
                            КИТЕПТЕР предлагает полный набор книг разных авторов на разных языках.
                        </HowDoesWorkDescription>
                        <HowDoesWorkDescription>
                            <HowDoesWorkDescriptionTitle>Запросить книгу</HowDoesWorkDescriptionTitle>
                            Попросите одолжить или получить книгу у владельца книги.
                            Мы позволяем владельцу одолжить свои книги.
                        </HowDoesWorkDescription>
                        <HowDoesWorkDescription>
                            <HowDoesWorkDescriptionTitle>Познакомьтесь с владельцем</HowDoesWorkDescriptionTitle>
                            Назначьте встречу с владельцем, чтобы забрать книгу.
                            Наша платформа предоставит информацию о местонахождении владельца только после того, как запрос будет одобрен.
                        </HowDoesWorkDescription>
                        <HowDoesWorkDescription>
                            <HowDoesWorkDescriptionTitle>Вернуть книгу</HowDoesWorkDescriptionTitle>
                            Верните книгу вовремя Мы напомним вам, когда вам нужно вернуть книгу.
                        </HowDoesWorkDescription>
                    </HowDoesWorkBlockInfo>
                    <HowDoesWorkBlockImg>
                        <img src={ImgWork}/>
                    </HowDoesWorkBlockImg>
                </HowDoesWorkBlock>
            </Container>
        </HomePageBlock>
    );
};

export default HomePage;