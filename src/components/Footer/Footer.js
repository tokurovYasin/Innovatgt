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

const AboutUsTitle = styled.div`
`;
const AboutUsDesc = styled.div`
  font-size: 16px;
  margin-top: 5px;
  cursor: pointer;
`;
const FAQ = styled.div`
  font-size: 16px;
  margin-top: 5px;
  cursor: pointer;
`;

const Right = styled.div`

`;

const Center = styled.div`

`;
const SocMedia = styled.div`

`;
const SocMediaTitle = styled.div`
   font-size: 18px;
 `;
const Inst = styled.div`

`;
const Twitter = styled.div`
  margin-left: 5px`;
const Fb = styled.div`
  margin-left: 5px`;


const SocMediaIcons = styled.div`

`;

const Footer = () => {
    return (
        <FooterBlock>
            <Container>
                <Left>
                    <AboutUsTitle> О нас</AboutUsTitle>
                    <AboutUsDesc>
                        О нас
                    </AboutUsDesc>
                    <FAQ>FAQ</FAQ>
                </Left>
                <Center>
                    <SocMedia>
                        <SocMediaTitle>
                            Мы в социальных сетях
                        </SocMediaTitle>
                        <SocMediaIcons>
                            <Inst>inst</Inst>
                            <Twitter>twit</Twitter>
                            <Fb>fb</Fb>
                        </SocMediaIcons>
                    </SocMedia>
                </Center>
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