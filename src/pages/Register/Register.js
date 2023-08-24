import styled from "styled-components";
import {navigate} from "use-history";
import bgrImg from "../../assets/img/212e0f9c94697b8df3ea9d94c0617146.jpeg"
import React from "react";
import {useNavigate} from "react-router-dom";

const RegisterPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
   margin-top: 30px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CreateAccount = styled.div`
 width: 30%;
  margin-bottom: 40px;
`;

const CreateAccTitle = styled.div`
  font-size: 30px;
  margin-bottom: 40px;
  text-align: center;
  color: #3a3939;
    font-family: 'Jost', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Input = styled.input`
  margin-bottom: 10px;
   padding: 15px 10px 15px 20px;
  flex: 5;
  border-radius: 25px;
  border: 1px solid #24255B;
`;

const Errors = styled.div`
  margin-bottom: 5px;
  color: red;
`;

const Button = styled.button`
  width: 100%; 
  background-color: #F3B469;
  color: white;
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
   font-size: 15px;
   color: #3a3939;
     font-family: 'Jost', sans-serif;

   span {
     cursor: pointer;
     margin-left: 2px;
   }

   span:hover {
     color: #0a539b;
   }
 `;
 const ImgContainer = styled.div`
 margin-top: 60px;
 
 `;
const InputTitle = styled.div`
  font-size: 16px;
  color: #4f4e4e;
  font-family: 'Jost', sans-serif;
  padding-left:20px;
`;




const Register = (props) =>{
    const { setEmail, setPassword, setPassword_confirm, setNumber, setUserName, setCity } = props
const navigate = useNavigate();
    return (
        <RegisterPage>
        <Container>
            <CreateAccount>
                    <CreateAccTitle>Регистрация</CreateAccTitle>
               {/*<Desc>Введите данные для регистрации</Desc>*/}
                      <Form >
                          <InputTitle>Введите ФИО</InputTitle>
                        <Input placeholder="ФИО" onChange={(e) => setUserName(e.target.value)}/>
                              <InputTitle>Введите ваш e-mail</InputTitle>
                        <Input placeholder="E-mail" id="e-mail" type="e-mail" onChange={(e) => setEmail(e.target.value)}/>
                              <InputTitle>Введите ваш пароль</InputTitle>
                        <Input placeholder="Пароль" id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                              <InputTitle>Подтвердите ваш пароль</InputTitle>
                        <Input placeholder="Подтвердите пароль" id="password" type="password" onChange={(e) => setPassword_confirm(e.target.value)}/>
                              <InputTitle>Введите ваш номер телефона</InputTitle>
                        <Input placeholder="Телефон" onChange={(e) => setNumber(e.target.value)} />
                              <InputTitle>Выберите ваш город</InputTitle>
                        <Input placeholder="Город" onChange={(e) => setCity(e.target.value)} />
                          <Button type="submit" >Зарегестрироваться</Button>
                          <Desc onClick={() => navigate("/login")}>У вас есть аккаунт?<span>Авторизация</span></Desc>
                    </Form>
               </CreateAccount>
                  <ImgContainer>
                   <img src={bgrImg} width="500"/>
            </ImgContainer>

        </Container>
            </RegisterPage>
    )
}
export default Register