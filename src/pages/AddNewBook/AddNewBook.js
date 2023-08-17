import React, {useRef, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {navigate} from "use-history";
import { useFormik } from "formik";
import * as Yup from "yup";
import BgImage from "../../assets/img/bg-image.png"

const AddNewBookPage = styled.div`
  background-image: url("${BgImage}");
  background-size: 30%;
  background-repeat: no-repeat;
  padding: 30px 10% 20%;
  background-position: 100% 80%;
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

const StyledLabelLocation = styled.label`
  font-size: 18px;
  display: block;
  margin: 20px 0;
  font-weight: bold;
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

    const [map, setMap] = useState({
        name: '',
        location: '',
    });

    const [image, setImage] = useState()
    const [imgUrl, setImgUrl] = useState()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [language, setLanguage] = useState('')
    const [description, setDescription] = useState('')

    const fileComponent = useRef()
    const formData = { image, imgUrl, title, author, genre, language, description}

    const fileReader = new FileReader()
    fileReader.onloadend =() => {
        setImgUrl(fileReader.result)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const book = await axios.post('http://34.173.33.226/api/v1/add-book/', formData)
            .then(response => {
                console.log('Response:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        console.log(book.data)
        axios.post('http://34.173.33.226/api/v1/add-book/', map)
            .then(response => {
                console.log('Response:', response.data);
                // Handle success
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle error
            });
    }

    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            setImage(file)
            fileReader.readAsDataURL(file)
        }
        const { name, value } = e.target;
        setMap((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.dataTransfer.files && e.dataTransfer.files.length) {
            setImage(e.dataTransfer.files[0])
            fileReader.readAsDataURL(e.dataTransfer.files[0])
        }
    }

    const handleDragEmpty = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    // const formik = useFormik({
    //     initialValues: {
    //         title: '',
    //         author: '',
    //         genre: '',
    //         language: '',
    //         description: '',
    //         like: ''
    //     },
    //     validationSchema: Yup.object({
    //         title: Yup.string().min(4,'название книги слишком короткое').required('Обязатеьное поле'),
    //         author: Yup.string().min(6, "название автора слишком короткое").required('Обязатеьное поле'),
    //         genre: Yup.string().min(6, "название жанра слишком короткое").required('Обязатеьное поле'),
    //         language: Yup.string().min(4, "некорректный язык книги").required('Обязатеьное поле'),
    //         description: Yup.string().min(20, "слишком короткое описание книги").required('Обязатеьное поле'),
    //     }),
    //     // onSubmit: values => {
    //     //
    //     // },
    // });

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
                                <StyledLabelLocation>Локация</StyledLabelLocation>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187125.06005001668!2d74.28003711789455!3d42.87645194892584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2sBishkek%2C%20Kyrgyzstan!5e0!3m2!1sen!2sid!4v1692287003758!5m2!1sen!2sid"
                                    width="260" height="450" style={{ border: 0, borderRadius: 25}} allowFullScreen="" loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>

                                <h3>Опубликовать местоположение и встроить в карту</h3>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Location Name"
                                        value={map.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        placeholder="Latitude, Longitude"
                                        value={map.location}
                                        onChange={handleChange}
                                    />
                                    <button type="submit">Submit</button>
                                </form>
                            </AddNewBookBlockLeft>
                            <AddNewBookBlockRight>
                                <StyledLabel>Название</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setTitle(e.target.value)} placeholder='Введите название книги'/>
                                <StyledLabel>Автор</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setAuthor(e.target.value)} placeholder='Введите автора книги'/>
                                <StyledLabel>Жанр</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setGenre(e.target.value)} placeholder='Введите жанр книги'/>
                                <StyledLabel>На каком языке написана книга</StyledLabel>
                                <StyledInput type="text" onChange={(e) => setLanguage(e.target.value)} placeholder='Введите категорию книги'/>
                                <StyledLabel>Описание книги</StyledLabel>
                                <StyledTextarea type="text" onChange={(e) => setDescription(e.target.value)} placeholder='Ведите краткое описание книги'/>
                                <StyledButton type="submit" onClick={() => navigate("/")}>Публиковать книгу</StyledButton>
                            </AddNewBookBlockRight>
                        </StyledForm>
                    </AddNewBookInfoForm1>
                </AddNewBookInfo>
        </AddNewBookPage>
    );
};

export default AddNewBook;