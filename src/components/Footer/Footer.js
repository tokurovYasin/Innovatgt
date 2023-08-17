import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.div`
  background-color: #152033;
`;

const Container = styled.div`
  display: flex;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  color: white;

`;
const Left = styled.div`
    color: white;
  font-size: 20px;
  



`;
const Center = styled.div`

`;


const BoxCallBack = styled.div`
display: flex;
  flex-direction: column;

  font-size: 20px;

`;
const Input = styled.input`
  border: antiquewhite;
  padding: 10px;
  box-shadow: 2px 1px 4px 0 #c9c3c3;
  border-radius: 25px;
  width: 500px;
  background-color: white;
  color: black;
  margin-top: 20px;

`;



const Right = styled.div`

`;






const Footer = () => {
    return (
        <FooterBlock>
            <Container>

                <Left>
                   О нас
                </Left>
                <Right>
                  <BoxCallBack>
                      Свяжитесь с нами
                      <Input type="text" size="30" color="white" placeholder="Отправить сообщение"/>
                  </BoxCallBack>
                </Right>
            </Container>
        </FooterBlock>

    );
};

export default Footer;