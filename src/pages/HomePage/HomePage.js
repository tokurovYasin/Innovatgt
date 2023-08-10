import React from 'react';
import styled from "styled-components";
import img from "../../img/huge-stack-books_118813-4896.avif"

const MainPage = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  width: 80%;
  height: 100vh;
  position: relative;
`;

const MainTitleBox = styled.div`
  max-width: 600px;
`;

const MainTitle = styled.h1`
  font-size: 40px;
  color: #4a4a4a;
  position: absolute;
  top: 15%;
  right: 1%;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 50px;
`;

const MainDescription = styled.h1`
  font-size: 40px;
  color: #4a4a4a;
  position: absolute;
  top: 34%;
  right: 12%;
  font-family: 'Borel', cursive;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
`;


const HomePage = () => {
    return (
        <MainPage>
            <Container>
                <MainTitleBox>
                    <MainTitle>Китептер - это платформа <br/>для обмена книгами.</MainTitle>
                    <MainDescription>
                        Мы объединяем людей,<br/> которые хотят читать книгу,<br/>
                        не покупая ее !
                    </MainDescription>
                </MainTitleBox>
            </Container>
        </MainPage>
    );
};

export default HomePage;