import React from 'react';
import styled from "styled-components";
import bgrImg from "../../assets/img/212e0f9c94697b8df3ea9d94c0617146.jpeg";
import {useNavigate} from "react-router-dom";
import UserPage from "../UserPage";
import BookIcon from "../../assets/img/book-line.png";
import UserIcon from "../../assets/img/user-fill.png";


const Container = styled.div`
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

    const navigate = useNavigate();

    return (
        <Container>
            <CreateAccount>
                <CreateAccTitle>
                    Логин
                </CreateAccTitle>
                <Desc>Введите ваш логин и пароль</Desc>
                <Form>
                    <Input id="email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <Input id="password" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit">Войти</Button>
                    <Desc onClick={() => navigate("/forgotpassword")}><span>Не помню пароль</span></Desc>
                    <Desc onClick={() => navigate("/register")}>У вас нет аккаунта? <span>Регистрация</span></Desc>
                </Form>
            </CreateAccount>
              <ImgContainer>
                   <img src={bgrImg} width="500"/>
            </ImgContainer>
        </Container>
    );
};

export default Login;