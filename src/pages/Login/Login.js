import React from 'react';
import Register from "../Register";
import {useFormik} from "formik";
import styled from "styled-components";

const Container = styled.div`
  background-color: rgba(245, 245, 245, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
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
  border: 1px solid darkcyan;
`;

const Errors = styled.div`
  margin-bottom: 5px;
  color: red;
`;

const Button = styled.button`

  width: 100%;
`;

const Login = (props) => {
    const {setPassword, setEmail} = props
    return (
        <Container>
            <CreateAccount>
                <CreateAccTitle>Авторизация</CreateAccTitle>
                <p>Введите ваш логин и пароль</p>
                <Form>
                    <Input id="email" type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                    <Input id="password" type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit">Войти</Button>
                    <p>Не помню пароль</p>
                    <p>У вас нет аккаунта? <span>Регистрация</span></p>
                </Form>
            </CreateAccount>
        </Container>
    );
};

export default Login;