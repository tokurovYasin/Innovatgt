import React from 'react';
import Register from "../Register";
import {useFormik} from "formik";
import styled from "styled-components";
import {navigate} from "use-history";
import ImgLogin from "../../assets/img/logina2.jpeg"
import bgrImg from "../../assets/img/212e0f9c94697b8df3ea9d94c0617146.jpeg";



const Container = styled.div`
 //background-image: linear-gradient(to left top, #7fb0ed, #668bc8, #4f67a3, #39457f, #24255b);;
 // display: flex;
 // justify-content: center;
 // align-items: center;
 // flex-direction: column;
 // width: 100%;
 // height: 100vh;
    margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CreateAccount = styled.div`
 width: 30%;
  margin-bottom: 40px;
  position: relative;
`;

const CreateAccTitle = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  
    //  position: absolute;
    //right: 150px;
    //top: 107px;
`;

const LoginImgBox = styled.div`

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Input = styled.input`
  margin-bottom: 10px;
  border: 1px solid #24255B;
    padding: 15px 10px 15px 20px;
  flex: 5;
  border-radius: 25px;
`;

const Errors = styled.div`
  margin-bottom: 5px;
  color: red;
`;

const Button = styled.button`
  background-color: #F3B469;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 25px;
  border: 1px solid #F3B469;
  font-size: 18px;
  cursor: pointer;
`;
 const Desc = styled.p`
   align-items: center;
   display: flex;
   justify-content: center;
   font-size: 16px;
  
   font-family: 'Jost', sans-serif;
   span {
     cursor: pointer;
     margin-left: 2px;
   }
   span:hover {
     color: #24255B;
   }
 `;

 const ImgContainer = styled.div`
 
 
 `;




const Login = (props) => {
    const {setPassword, setEmail} = props
    return (
        <Container>
            <CreateAccount>
                <CreateAccTitle>
                    Логин
                </CreateAccTitle>
                  <LoginImgBox>
                          {/*<img src={ImgLogin} width="500" height="250"/>*/}
                    </LoginImgBox>
                <Desc>Введите ваш логин и пароль</Desc>
                <Form>
                    <Input id="email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <Input id="password" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit" onClick={() => navigate("/userpage")}>Войти</Button>
                    <Desc><span>Не помню пароль</span></Desc>
                    <Desc>У вас нет аккаунта? <span>Регистрация</span></Desc>
                </Form>
            </CreateAccount>
              <ImgContainer>
                   <img src={bgrImg} width="500"/>
            </ImgContainer>
        </Container>
    );
};

export default Login;