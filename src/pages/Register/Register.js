import styled from "styled-components";
import {navigate} from "use-history";
import bgImg from "../../assets/img/bg-image.png"

const RegisterPage = styled.div`
  background-image: url("${bgImg}");
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
  border: 1px solid #3f3e3e;
`;

const Errors = styled.div`
  margin-bottom: 5px;
  color: red;
`;

const Button = styled.button`
  width: 100%; 
  background-color: #2d59a9;
  color: white;

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

const Register = (props) =>{
    const { setEmail, setPassword, setRepeatPassword, setNumber, setName, setCity } = props

    return (
        <RegisterPage>
        <Container>
           <CreateAccount>
                    <CreateAccTitle>Регистрация</CreateAccTitle>
               <Desc>Введите данные для регистрации</Desc>
                      <Form >
                        <Input placeholder="ФИО" onChange={(e) => setName(e.target.value)}/>
                        <Input placeholder="E-mail" id="e-mail" type="e-mail" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Пароль" id="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Input placeholder="Подтвердите пароль" id="password" type="password" onChange={(e) => setRepeatPassword(e.target.value)}/>
                        <Input placeholder="Телефон" onChange={(e) => setNumber(e.target.value)} />
                        <Input placeholder="Город" onChange={(e) => setCity(e.target.value)} />
                          <Button type="submit" onClick={() => navigate("/")} >Зарегестрироваться</Button>
                          <Desc>У вас есть аккаунт? <span>Авторизация</span></Desc>
                    </Form>
               </CreateAccount>
        </Container>
            </RegisterPage>
    )
}
export default Register