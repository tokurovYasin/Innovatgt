import styled from "styled-components";
import {useFormik} from "formik";


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



const Register = (props) =>{
    const { setEmail, setPassword, setRepeatPassword, setNumber, setName, setCity } = props
    return (
        <Container>
           <CreateAccount>
                    <CreateAccTitle>Регистрация</CreateAccTitle>
               <p>Введите данные для регистрации</p>
                      <Form>
                        <Input placeholder="ФИО" onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="E-mail"  onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Пароль"  onChange={(e) => setPassword(e.target.value)}/>
                        <Input placeholder="Подтвердите пароль"  onChange={(e) => setRepeatPassword(e.target.value)}/>
                        <Input placeholder="Телефон" onChange={(e) => setNumber(e.target.value)} />
                        <Input placeholder="Город" onChange={(e) => setCity(e.target.value)} />
                          <Button type="submit">Зарегестрироваться</Button>
                          <p>У вас есть аккаунт? <span>Авторизация</span></p>
                    </Form>
               </CreateAccount>
        </Container>
    )
}
export default Register