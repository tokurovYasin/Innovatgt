import React, {useRef, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddNewBookPage = styled.div`
  background-image: url("../../assets/img/image 15.png");
  background-size: cover;
  padding: 30px 10%;
  text-align: left;
`;

const AddNewBookPageTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 50px;
`;

const AddNewBookBlock = styled.div`
 
`;

const AddNewBookImgBox = styled.div`
  width: 200px;
  height: 300px;
  border: 4px solid #adabb0;
  border-radius: 5px;
  margin-bottom: 50px;
  background-color: #f2f2f2;
  cursor: pointer;
  vertical-align: top;
  display: inline-block;
  background-color: hsla(0,1%,81%,.15);
  text-align: center;
  position: relative;
  box-shadow: -1px 6px 10px 0 rgba(0,0,0,.07);
`;

const AddNewBookImgInput = styled.input`
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
`;

const AddNewBookImage = styled.div`
  position: absolute;
  text-align: center;
  color: grey;
  font-size: 20px;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
`;

const AddNewBookImageText = styled.div`
  box-sizing: border-box;
  vertical-align: top;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 20px 10px;
  border: 3px solid hsla(0,0%,60.8%,.34);
  background-color: hsla(0,1%,81%,.15);
  text-align: center;
  position: relative;
  box-shadow: -1px 6px 10px 0 rgba(0,0,0,.07);
`;

const AddNewBookInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AddNewBookInfoForm1 = styled.div`
  width: 45%;
  padding-right: 20px;
`;

const StyledForm = styled.form`
  border-radius: 5px;
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  border: 4px solid #adabb0;
  border-radius: 5px;
  margin-bottom: 40px;
  background-color: #f2f2f2;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 4px solid #adabb0;
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  background-color: #f2f2f2;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const AddNewBook = () => {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setLanguage] = useState('')
    const [description, setDescription] = useState('')
    const [like, setLike] = useState('')

    const fileComponent = useRef()

    const formData = { image, title, author, genre, language, description, like }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const book = await axios.post('https://64d24e79f8d60b174361d7d9.mockapi.io/books', formData)
        console.log(book.data)
    }

    // const handleOnChange = (e) => {
    //     e.preventDefault()
    //     console.log()
    // }

    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            genre: '',
            language: '',
            description: '',
            like: ''
        },
        validationSchema: Yup.object({
            title: Yup.string().min(4,'название книги слишком короткое').required('Обязатеьное поле'),
            author: Yup.string().min(6, "название автора слишком короткое").required('Обязатеьное поле'),
            genre: Yup.string().min(6, "название жанра слишком короткое").required('Обязатеьное поле'),
            language: Yup.string().min(4, "некорректный язык книги").required('Обязатеьное поле'),
            description: Yup.string().min(20, "слишком короткое описание книги").required('Обязатеьное поле'),
        }),
        onSubmit: values => {

        },
    });

    return (
        <AddNewBookPage>
            <AddNewBookPageTitle>Поделиться новой книгой</AddNewBookPageTitle>
            <h3>Изображение книги</h3>
            <AddNewBookBlock>
                <AddNewBookInfo>
                    <AddNewBookInfoForm1>
                        <StyledForm onSubmit={handleSubmit}>
                            <AddNewBookImgBox>
                                <AddNewBookImgInput type="file" ref={fileComponent}/>
                                <AddNewBookImage>
                                    <AddNewBookImageText>
                                        Нажмите, чтобы выбрать картину или <br/> перетащите картину сюда
                                    </AddNewBookImageText>
                                </AddNewBookImage>
                            </AddNewBookImgBox>
                            <StyledLabel>Название</StyledLabel>
                            <StyledInput type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Введите название книги'/>
                            <StyledLabel>Автор</StyledLabel>
                            <StyledInput type="text" onChange={(e) => setAuthor(e.target.value)} placeholder='Введите автора книги'/>
                            <StyledLabel>Жанр</StyledLabel>
                            <StyledInput type="text" onChange={(e) => setGenre(e.target.value)} placeholder='Введите жанр книги'/>
                            <StyledLabel>Описание книги</StyledLabel>
                            <StyledTextarea type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Ведите краткое описание книги'/>
                            <StyledLabel>На каком языке написана книга</StyledLabel>
                            <StyledInput type="text" onChange={(e) => setLanguage(e.target.value)} placeholder='Введите категорию книги'/>
                            <StyledLabel>Локация</StyledLabel>
                            <StyledInput type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Введите локацию книги'/>
                            <StyledButton type="submit" >Публиковать книгу</StyledButton>
                        </StyledForm>
                    </AddNewBookInfoForm1>
                </AddNewBookInfo>
            </AddNewBookBlock>
        </AddNewBookPage>
    );
};

export default AddNewBook;