import React from 'react';
import styled from "styled-components";


import ImgMain from "../../assets/img/image 21.png"
import Search from "../../assets/img/search.png"
import Phone from "../../assets/img/phone.png"
import Time from "../../assets/img/time.png"


const HomePageBlock =  styled.div`
  font-family: 'Philosopher', sans-serif;
  color: #182A38;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
`;

const MainPage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainTitleBox = styled.div`
  width: 55%;
  padding-top: 30px;
`;

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 500;
  line-height: 51px;
  font-family: 'Philosopher', sans-serif;
  margin-bottom: 40px;
`;

const MainDescription = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 51px;
  font-family: 'Philosopher', sans-serif;
  margin-bottom: 50px;
`;

const MainImageBox = styled.div`
  width: 45%;
`;

const MainBtnRegister = styled.button`
  color: white;
  font-size: 22px;
  padding: 15px 15px;
  background-color: #F3B469;
  display: block;
  border: none;
  border-radius: 56px;
  margin-bottom: 40px;
  cursor: pointer;
`;

const MainBtnBooks = styled.button`
  color: white;
  font-size: 22px;
  padding: 15px 15px;
  background-color: #037281;
  display: block;
  border: none;
  border-radius: 56px;
  cursor: pointer;
  width: 276px;
`;

const HowDoesWorkTitle = styled.h2`
  font-size: 34px;
  font-weight: 500;
  line-height: 51px;
  font-family: 'Philosopher', sans-serif;
  margin-bottom: 50px;
`;

const HowDoesWorkBlock = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

const HowDoesWorkInfoTitleBox = styled.div `
  display: flex;
  padding-top: 20px;
  margin-bottom: 20px;
`;

const HowDoesWorkDescriptionTitle = styled.h3`
  font-size: 26px;
  font-weight: 500;
  line-height: 37px;
  font-family: 'Philosopher', sans-serif;
  margin: 0 0 0 14px;
`;

const HowDoesWorkBlockInfoSearch = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  width: 30%;
  background-color: #037281;
  border-radius: 40px;
  padding: 10px 30px 40px;
  margin-right: 40px;
`;

const HowDoesWorkBlockInfoPhone = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  width: 30%;
  background-color: #DD5C72;
  border-radius: 40px;
  padding: 10px 30px 40px;
  margin: 0 40px;
`;

const HowDoesWorkBlockInfoTime = styled.div`
  font-size: 24px;
  font-weight: 500;
  line-height: 34px;
  width: 30%;
  background-color: #F3B469;
  border-radius: 40px;
  padding: 10px 30px;
  margin-left: 40px;
`;

const HomePage = () => {
    return (
        <HomePageBlock>
            <Container>
                <MainPage>
                    <MainTitleBox>
                        <MainTitle><strong>Китептер</strong> - это платформа для обмена книгами. <br/>Мы объединяем людей, которые хотят читать книгу,
                            не покупая ее !</MainTitle>
                        <MainDescription>
                            Если вы хотите внести свой вклад<br/> в устойчивую окружающую среду и повысить уровень
                            грамотности в мире, то <strong>Китептер</strong> для вас.
                        </MainDescription>
                        <MainBtnRegister>Присоединиться сейчас</MainBtnRegister>
                        <MainBtnBooks>Найти книгу</MainBtnBooks>
                    </MainTitleBox>
                    <MainImageBox>
                        <img src={ImgMain} width="700"/>
                    </MainImageBox>
                </MainPage>
            </Container>
            <Container>
                <HowDoesWorkTitle>Как пользоваться <strong>Китептер</strong>?</HowDoesWorkTitle>
                <HowDoesWorkBlock>
                    <HowDoesWorkBlockInfoSearch>
                        <HowDoesWorkInfoTitleBox>
                            <img src={Search} width="90" height="90"/>
                            <HowDoesWorkDescriptionTitle>Найдите книгу и запросите</HowDoesWorkDescriptionTitle>
                        </HowDoesWorkInfoTitleBox>
                         Найдите книгу,
                        которую хотите прочитать. <strong>Китептер</strong> предлагает полный набор книг разных авторов на разных
                        языках.Попросите одолжить книгу у владельца книги.
                    </HowDoesWorkBlockInfoSearch>
                    <HowDoesWorkBlockInfoPhone>
                        <HowDoesWorkInfoTitleBox>
                            <img src={Phone} width="70" height="70"/>
                            <HowDoesWorkDescriptionTitle>Познакомьтесь с владельцем</HowDoesWorkDescriptionTitle>
                        </HowDoesWorkInfoTitleBox>
                        Назначьте встречу с владельцем, чтобы забрать книгу.
                        Наша платформа предоставит информацию о местонахождении владельца только после того, как запрос будет одобрен.
                    </HowDoesWorkBlockInfoPhone>
                    <HowDoesWorkBlockInfoTime>
                        <HowDoesWorkInfoTitleBox>
                            <img src={Time} width="80" height="80"/>
                            <HowDoesWorkDescriptionTitle>Верните книгу вовремя</HowDoesWorkDescriptionTitle>
                        </HowDoesWorkInfoTitleBox>
                        Мы напомним вам, когда вам нужно вернуть книгу.
                    </HowDoesWorkBlockInfoTime>
                </HowDoesWorkBlock>
            </Container>
        </HomePageBlock>
    );
};

export default HomePage;