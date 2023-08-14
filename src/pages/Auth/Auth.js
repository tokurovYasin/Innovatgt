import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import styled from "styled-components";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";


const Box = styled.div`
  background-image: url("../../assets/img/background photo (1).png");
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  //height: 1000px;

`;


const AuthRootComponent = () => {
    const [ email,setEmail ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ repeatPassword,setRepeatPassword ] = useState("")
    const [ number,setNumber ] = useState("")
    const [ name,setName ] = useState("")
    const [ city,setCity ] = useState("")

    const location = useLocation()
    // const history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(location.pathname === "/login") {
                const userData = {
           email,
           password
       }
       const user = await axios.post("https://64d4d327b592423e4694be3a.mockapi.io/login", userData )
        console.log(user.data)
        } else {
            if (password === repeatPassword) {
                   const userData = {
                name,
                email,
                password,
                number,
                city
            }
            const newUser = await axios.post("https://64d4d327b592423e4694be3a.mockapi.io/register", userData)
           alert("Вы успешно зарегестрировались!")



            } else {
                throw new Error("У вас не совпадают пароли")
            }
        }
    }

        const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
            number: '',
            city: '',
            name: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Your password is too short.").required('Password is required'),
            repeatPassword: Yup.string().min(6, "Your password is too short.")
                .oneOf([Yup.ref("password"), null], "Password must match").required('Password is required'),

        }),
        onSubmit: values => {
            delete values.repeatPassword
            // dispatch(newUser(values))
        },
    });

    return (
        <Box onSubmit={handleSubmit}>
            {
                location.pathname === "/login"
                    ? <Login setEmail = {setEmail} setPassword = {setPassword}/> : location.pathname === "/register"
                        ? <Register setEmail = {setEmail} setPassword = {setPassword} setName = {setName} setNumber = {setNumber}
                                    setRepeatPassword = {setRepeatPassword} setCity = {setCity}  />  : null}
        </Box>

    )

};

export default AuthRootComponent;