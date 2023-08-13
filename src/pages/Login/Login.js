import React from 'react';
import Register from "../Register";
import {useFormik} from "formik";
import styled from "styled-components";



const Container = styled.div`
background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const CreateAccount = styled.div`
 width: 30%;
  margin-bottom: 40px;

  

`;

const CreateAccTitle = styled.div`
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
  padding: 15px 25px;
  flex: 5;
  border-radius: 4px;
  border: 1px solid black;
`;

const Errors = styled.div`
  margin-bottom: 5px;
  color: red;
`;

const Button = styled.button`
  background-color: #2d59a9;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #2d59a9;
  font-size: 18px;
  cursor: pointer;
`;
 const Desc = styled.p`
   align-items: center;
   display: flex;
   justify-content: center;
   font-size: 16px;
   color: #595858;

   span {
     cursor: pointer;
     margin-left: 2px;
   }

   span:hover {
     color: #0a539b;


   }
 `;
const Login = (props) => {
    const {setPassword, setEmail} = props
    return (
        <Container>
            <CreateAccount>
                <CreateAccTitle>Авторизация</CreateAccTitle>
                <Desc>Введите ваш логин и пароль</Desc>
                <Form>
                    <Input id="email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <Input id="password" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit">Войти</Button>
                    <Desc><span>Не помню пароль</span></Desc>
                    <Desc>У вас нет аккаунта? <span>Регистрация</span></Desc>
                </Form>
            </CreateAccount>
        </Container>
    );
};

export default Login;