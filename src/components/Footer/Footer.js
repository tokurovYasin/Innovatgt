import React from 'react';
import styled from "styled-components";

const FooterBlock = styled.div`
  background-color: #e0dfdf;
`;

const Container = styled.div`
  display: flex;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;

  justify-content: space-between;
  align-items: center;

`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 20px;


`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 40px;
`;
const Right = styled.div`
  flex: 1;
  padding: 15px;
  margin-left: 40px;
  font-size: 22px;
  font-family: 'Borel', cursive;
  color: #4a4a4a;
`;
const Pic = styled.div`
img{
width: 100px;
  height: 100px;
}

`;



const Footer = () => {
    return (
        <FooterBlock>
            <Container>
                <Left>
                    <Pic>
                    </Pic>
                </Left>
                <Right>
                    Если вы хотите внести свой вклад в устойчивую окружающую среду и повысить уровень грамотности в мире, то KITEPTER для вас!
                </Right>
            </Container>
        </FooterBlock>

    );
};

export default Footer;