import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import styled from "styled-components";
import axios from "axios";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useHistory} from "use-history";
import {UserPage} from "../UserPage";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

`;


const AuthRootComponent = () => {
    const [ email,setEmail ] = useState("")
    const [ password,setPassword ] = useState("")
    const [ password_confirm,setPassword_confirm ] = useState("")
    const [ number,setNumber ] = useState("")
    const [ username,setUserName ] = useState("")
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
       const user = await axios.post("http://34.173.33.226/api/v1/login/", userData )
        console.log(user.data)
        } else {
            if (password === password_confirm) {
                const userData = {
                    username,
                    email,
                    password,
                    password_confirm,
                    number,
                    city
                }
            const newUser = await axios.post("http://34.173.33.226/api/v1/register/", userData)
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
            password_confirm: '',
            number: '',
            city: '',
            username: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().min(6, "Your password is too short.").required('Password is required'),
            password_confirm: Yup.string().min(6, "Your password is too short.")
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
                        ? <Register setEmail = {setEmail} setPassword = {setPassword} setUserName = {setUserName} setNumber = {setNumber}
                                    setPassword_confirm  = {setPassword_confirm } setCity = {setCity}  />  : null }

        </Box>


    )

};

export default AuthRootComponent;