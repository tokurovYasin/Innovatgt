import React, {useRef, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {navigate} from "use-history";
import { useFormik } from "formik";
import * as Yup from "yup";
import BgImage from "../../assets/img/addBookBg.jpeg"
import {MenuItem} from "@mui/material";

const AddNewBookPage = styled.div`
  background-image: url("${BgImage}");
  background-size: 32%;
  background-repeat: no-repeat;
  padding: 30px 10% 20%;
  background-position: 4% 56%;
`;

const AddNewBookPageTitle = styled.h1`
  
`;

const StyledForm = styled.form`
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
`;

const AddNewBookBlockLeft = styled.div`
  width: 35%;
 
`;

const AddBookImageLabel = styled.h3`
    
`;

const AddNewBookBlockRight = styled.div`
  width: 65%;
`;

const AddNewBookImgBox = styled.div`
  width: 260px;
  height: 400px;
  border: 3px solid #adabb0;
  border-radius: 25px;
  background-color: #f2f2f2;
  cursor: pointer;
  vertical-align: top;
  margin-bottom: 20px;
  display: inline-block;
  background-color: hsla(0,1%,81%,.15);
  text-align: left;
  position: relative;
  box-shadow: -1px 6px 10px 0 rgba(0,0,0,.07);
  &:hover {
    border: dashed 3px rgba(112, 111, 111, 0.34) !important;
    background-color: rgba(158, 154, 154, 0.15) !important;
  }
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

const SpanImg = styled.span`
  display: block;
  z-index: -1;
  margin: 20px;
  line-height: 26px;
`;
 const Image = styled.img`
   z-index: 2;
   width: 100%;
   height: 100%;
   border-radius: 25px;
 `;

const AddNewBookImageText = styled.div`
  box-sizing: border-box;
  vertical-align: top;
  display: inline-block;
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
`;

const AddNewBookInfo = styled.div`
`;

const AddNewBookInfoForm1 = styled.div`
    width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StyledLabel = styled.label`
  font-size: 18px;
  display: block;
  margin: 20px 0;
  font-weight: bold;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 15px 10px 15px 20px;
  border: 2px solid #adabb0;
  border-radius: 25px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`;

const StyledInputOptions = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 15px 10px 15px 20px;
  border: 2px solid #adabb0;
  border-radius: 25px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
`;

const StyledDatalist = styled.datalist`
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledOption = styled.option`
  padding: 8px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 2px solid #adabb0;
  padding: 25px;
  border-radius: 25px;
  font-size: 18px;
  background-color: #f2f2f2;
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
  width: 220px;
  height: 55px;
  font-size: 18px;
  background-color: #24255B;
  color: white;
  padding: 10px;
  display: block;
  margin: 10px auto 50px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`;

const AddNewBook = () => {

    const [image, setImage] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [title, setTitle] = useState('')
    const [condition, setCondition] = useState()
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setLanguage] = useState('')
    const [description, setDescription] = useState('')

    const fileComponent = useRef()
    const formData = { image, imgUrl,title, condition, author, genre, language, description}

    const fileReader = new FileReader()
    fileReader.onloadend =() => {
        setImgUrl(fileReader.result)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const book = await axios.post("http://34.173.33.226/api/v1/add-book/", formData)
        console.log(book.data)
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            setImage(file)
            fileReader.readAsDataURL(file)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault()
        if (e.dataTransfer.files && e.dataTransfer.files.length) {
            setImage(e.dataTransfer.files[0])
            fileReader.readAsDataURL(e.dataTransfer.files[0])
        }
    }

    const handleDragEmpty = (e) => {
        e.preventDefault()
    }

    const formik = useFormik({
        initialValues: {
            title: '',
            author: '',
            genre: '',
            language: '',
            description: '',

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
            <AddNewBookPageTitle>Добавить книгу</AddNewBookPageTitle>
                <AddNewBookInfo>
                    <AddNewBookInfoForm1>
                        <StyledForm onSubmit={handleSubmit}>
                            <AddNewBookBlockLeft>
                                <AddBookImageLabel>Изображение книги</AddBookImageLabel>
                                <AddNewBookImgBox>
                                    <AddNewBookImgInput type="file" ref={fileComponent} onChange={handleChange}/>
                                    <AddNewBookImage>
                                        <AddNewBookImageText>
                                            {image ?
                                                <Image src={imgUrl ? imgUrl : "no_photo.jpg"}
                                                       onDrop={handleDrop}
                                                       onDragEnter={handleDragEmpty}
                                                       onDragOver={handleDragEmpty}
                                                />
                                                :
                                                <SpanImg>Нажмите, чтобы выбрать картину или перетащите картину сюда</SpanImg>
                                            }
                                        </AddNewBookImageText>
                                    </AddNewBookImage>
                                </AddNewBookImgBox>
                            </AddNewBookBlockLeft>
                            <AddNewBookBlockRight>
                                <StyledLabel>Название</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Введите название книги' required/>
                                <StyledLabel>Автор</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setAuthor(e.target.value)} placeholder='Введите автора книги' required/>
                                <StyledLabel>Тип книги</StyledLabel>
                                <StyledInputOptions
                                    type="text" list="options1" placeholder="Выберите тип книги" required/>
                                <StyledDatalist id="options1">
                                    <StyledOption value="Комиксы"/>
                                    <StyledOption value="Манги"/>
                                    <StyledOption value="Ранобэ"/>
                                    <StyledOption value="Новеллы"/>
                                    <StyledOption value="Самопомощи"/>
                                    <StyledOption value="Научные"/>
                                    <StyledOption value="Поучительные"/>
                                    <StyledOption value="Литературные"/>
                                    <StyledOption value="Лингвистические"/>
                                    <StyledOption value="Технические"/>
                                    <StyledOption value="Дидактические"/>
                                    <StyledOption value="Информативные"/>
                                    <StyledOption value="Религиозные"/>
                                    <StyledOption value="Иллюстрированные"/>
                                    <StyledOption value="Лектронные"/>
                                    <StyledOption value="Поэтические"/>
                                    <StyledOption value="Биографические"/>
                                    <StyledOption value="Дидактические"/>
                                    <StyledOption value="Художественные"/>
                                </StyledDatalist>
                                <StyledLabel>Жанр книги</StyledLabel>
                                <StyledInputOptions
                                    type="text" list="options2" placeholder="Выберите жанр книги" required/>
                                <StyledDatalist id="options2">
                                    <StyledOption value="Фэнтези"/>
                                    <StyledOption value="Фантастика"/>
                                    <StyledOption value="Детективы"/>
                                    <StyledOption value="Любовные романы"/>
                                    <StyledOption value="Эротика"/>
                                    <StyledOption value="Триллеры"/>
                                    <StyledOption value="Ужасы"/>
                                    <StyledOption value="Приключения"/>
                                    <StyledOption value="Проза"/>
                                    <StyledOption value="Поэзия"/>
                                    <StyledOption value="Бизнес литература"/>
                                    <StyledOption value="Психология"/>
                                    <StyledOption value="Искусство и культура"/>
                                    <StyledOption value="Научная литература"/>
                                    <StyledOption value="Хобби и досуг"/>
                                    <StyledOption value="Звучение языков"/>
                                    <StyledOption value="Компьютерная литература"/>
                                    <StyledOption value="История"/>
                                    <StyledOption value="Общество"/>
                                    <StyledOption value="Мэмуары"/>
                                    <StyledOption value="Красота и здоровье"/>
                                    <StyledOption value="Книги для дошкольников"/>
                                    <StyledOption value="Школьные учебники"/>
                                    <StyledOption value="Детские детективы"/>
                                    <StyledOption value="Энциклопедия"/>
                                    <StyledOption value="Книги для подростков"/>
                                </StyledDatalist>
                                <StyledLabel>Состояние книги</StyledLabel>
                                <StyledInputOptions
                                    type="text" list="options3" placeholder="Выберите состояние книги" required/>
                                <StyledDatalist id="options3">
                                    <StyledOption value="Новая книга" />
                                    <StyledOption value="Хорошее состояние" />
                                    <StyledOption value="Приемлемое состояние" />
                                </StyledDatalist>
                                <StyledLabel>На каком языке написана книга</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setLanguage(e.target.value)} placeholder='Введите категорию книги' required/>
                                <StyledLabel>Описание книги</StyledLabel>
                                <StyledTextarea type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Ведите краткое описание книги' required/>
                                <StyledButton type="submit" onClick={() => navigate("/")}>Публиковать книгу</StyledButton>
                            </AddNewBookBlockRight>
                        </StyledForm>
                    </AddNewBookInfoForm1>
                </AddNewBookInfo>
        </AddNewBookPage>
    );
};

export default AddNewBook;