import React, {useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {navigate} from "use-history";
import { useFormik } from "formik";
import * as Yup from "yup";
import BgImage from "../../assets/img/addBookBg.jpeg"
import { createAuthProvider } from 'react-token-auth';

const AddNewBookPage = styled.div`
  background-image: url("${BgImage}");
  background-size: 32%;
  background-repeat: no-repeat;
  padding: 30px 10% ;
  background-position: 4% 77%;
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
  cursor: pointer;
`;

const StyledInputOptions = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 15px 10px 15px 20px;
  border: 2px solid #adabb0;
  border-radius: 25px;
  margin-bottom: 20px;
  background-color: #f2f2f2;
  cursor: pointer;
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
    const [imgUrl, setImgUrl] = useState()
    const [image, setImage] = useState()
    const [title, setTitle] = useState('')
    const [condition, setCondition] = useState()
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setLanguage] = useState('')
    const [description, setDescription] = useState('')
    const fileComponent = useRef()

    const formData = { image, title, condition, author, genre, language, description}
    const fileReader = new FileReader()
    fileReader.onloadend =() => {
        setImgUrl(fileReader.result)
    }

    const handleSubmit = async (e) => {
        const formData  = new FormData()
        formData.append("image",image)
        formData.append("title", title)
        formData.append("condition", condition)
        formData.append("author", author)
        formData.append("genre", genre)
        formData.append("language", language)
        formData.append("description", description)
        const token = JSON.parse(localStorage.getItem("user"))

        const response = await axios.post('http://34.173.33.226/api/v1/add-book/', formData, {
            headers: {
                Authorization: `Bearer ${token.access}`,
            },
        });
        console.log('Book created:', response.data);
    };
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

            fileReader.readAsDataURL(e.dataTransfer.files[0])
        }
    }

    const handleDragEmpty = (e) => {
        e.preventDefault()
    }



    return (
        <AddNewBookPage>
            <AddNewBookPageTitle>Добавить книгу</AddNewBookPageTitle>
                <AddNewBookInfo>
                    <AddNewBookInfoForm1>
                        <StyledForm onSubmit={handleSubmit}>
                            <AddNewBookBlockLeft>
                                <AddBookImageLabel>Изображение книги</AddBookImageLabel>
                                <AddNewBookImgBox>
                                    <AddNewBookImgInput type="file"  name="image" ref={fileComponent} onChange={handleChange}/>
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
                                <StyledLabel>Жанр книги</StyledLabel>
                                <StyledInputOptions
                                    type="text" list="options2" onChange={(e) => setGenre(e.target.value)} placeholder="Выберите жанр книги" required/>
                                <StyledDatalist id="options2">
                                    <StyledOption value="Фэнтези"/>
                                    <StyledOption value="Фантастика"/>
                                    <StyledOption value="Детективы"/>
                                    <StyledOption value="Триллеры"/>
                                    <StyledOption value="Ужасы"/>
                                    <StyledOption value="Приключения"/>
                                    <StyledOption value="Любовные романы"/>
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
                                    type="text" list="options3" onChange={(e) => setCondition(e.target.value)} placeholder="Выберите состояние книги" required/>
                                <StyledDatalist id="options3">
                                    <StyledOption value="Новая книга" />
                                    <StyledOption value="Хорошее состояние" />
                                    <StyledOption value="Приемлемое состояние" />
                                </StyledDatalist>
                                <StyledLabel>На каком языке написана книга</StyledLabel>
                                <StyledInputOptions
                                    type="text" list="option4" onChange={(e) => setLanguage(e.target.value)} placeholder='Выберите язык книги' required/>
                                <StyledDatalist id="option4">
                                    <StyledOption value="Кыргызский"/>
                                    <StyledOption value="Английский"/>
                                    <StyledOption value="Китайский"/>
                                    <StyledOption value="Русский"/>
                                    <StyledOption value="Неменцкий"/>
                                    <StyledOption value="Чешский"/>
                                    <StyledOption value="Испанский"/>
                                    <StyledOption value="Хинди"/>
                                    <StyledOption value="Арабский"/>
                                    <StyledOption value="Турецкий"/>
                                    <StyledOption value="Корейский"/>
                                    <StyledOption value="Французский"/>
                                    <StyledOption value="Немецкий"/>
                                    <StyledOption value="Вьетнамский"/>
                                    <StyledOption value="Персидский"/>
                                    <StyledOption value="Португальский"/>
                                    <StyledOption value="Японский"/>
                                    <StyledOption value="Итальянский"/>
                                    <StyledOption value="Польский"/>
                                </StyledDatalist>
                                <StyledLabel>Описание книги</StyledLabel>
                                <StyledTextarea type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Ведите краткое описание книги' required/>
                                <StyledButton type="submit" >Публиковать книгу</StyledButton>
                            </AddNewBookBlockRight>
                        </StyledForm>
                    </AddNewBookInfoForm1>
                </AddNewBookInfo>
        </AddNewBookPage>
    );
};

export default AddNewBook;