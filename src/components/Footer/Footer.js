import React from "react";
import styled from "styled-components";

import ImgInsta from "../../assets/img/inst.png";
import ImgGoogle from "../../assets/img/google.png";
import ImgVk from "../../assets/img/vk.png";
import ImgGithub from "../../assets/img/github.png";
import ImgWhats from "../../assets/img/whatsup.png";

const FooterBlock = styled.div`
  background-color: #152033;
`;

const Container = styled.div`
  display: flex;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
  justify-content: space-around;
  align-items: center;
  height: 200px;
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
  margin-top: 50px;
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

const AboutUsTitle = styled.div``;
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

const Right = styled.div``;

const Center = styled.div``;
const SocMedia = styled.div``;
const SocMediaTitle = styled.div`
  font-size: 18px;
`;
const Inst = styled.div`
  cursor: pointer;
`;
const Google = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

const Gthub = styled.div`
  margin-left: 5px;
  cursor: pointer;
`;

const Whatsup = styled.div`
  cursor: pointer;
`;
const Vk = styled.div`
  cursor: pointer;
`;
const SocMediaIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
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

                <Right>
                    <BoxCallBack>
                        Свяжитесь с нами
                        <Input type="text" size="30" color="white" placeholder="Отправить сообщение"/>
                    </BoxCallBack>
                         <SocMedia>
                        <SocMediaTitle>
                        </SocMediaTitle>
                        <SocMediaIcons>
                            <Inst>
                                  <img src={ImgInsta} width="20" height="20"/>
                            </Inst>
                            <Google>
                                  <img src={ImgGoogle} width="20" height="20"/>
                            </Google>
                            <Gthub>
                                <img src={ImgGithub} width="20" height="20"/>
                            </Gthub>
                            <Whatsup>
                                    <img src={ImgWhats} width="20" height="20"/>
                            </Whatsup>
                            <Vk>
                                <img src={ImgVk} width="20" height="20"/>
                            </Vk>
                        </SocMediaIcons>
                    </SocMedia>
                </Right>
            </Container>
        </FooterBlock>

    );

  return (
    <FooterBlock>
      <Container>
        <Left>
          <AboutUsTitle> О нас</AboutUsTitle>
          <AboutUsDesc>О нас</AboutUsDesc>
          <FAQ>FAQ</FAQ>
        </Left>
        <Center></Center>
        <Right>
          <BoxCallBack>
            Свяжитесь с нами
            <Input
              type="text"
              size="30"
              color="white"
              placeholder="Отправить сообщение"
            />
          </BoxCallBack>
          <SocMedia>
            <SocMediaTitle></SocMediaTitle>
            <SocMediaIcons>
              <Inst>
                <img src={ImgInsta} width="20" height="20" />
              </Inst>
              <Google>
                <img src={ImgGoogle} width="20" height="20" />
              </Google>
              <Gthub>
                <img src={ImgGithub} width="20" height="20" />
              </Gthub>
              <Whatsup>
                <img src={ImgWhats} width="20" height="20" />
              </Whatsup>
              <Vk>
                <img src={ImgVk} width="20" height="20" />
              </Vk>
            </SocMediaIcons>
          </SocMedia>
        </Right>
      </Container>
    </FooterBlock>
  );

};

export default Footer;
