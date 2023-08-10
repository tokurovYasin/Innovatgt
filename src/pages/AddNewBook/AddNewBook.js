import React, {useState} from 'react';
import styled from "styled-components";
import axios from "axios";

const AddNewBookPage = styled.div`
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
`;

const AddNewBookImg = styled.img`
    
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

const AddNewBookInfoForm2 = styled.div`
  width: 50%;
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

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [description, setDescription] = useState('')
    const [like, setLike] = useState('')

    const handleSubmit = (e) =>
        e.preventDefault()
        axios.post('http://34.173.33.226/docs/?format=openapi/add-book/',
        title, author, genre, description, like)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

    return (
        <AddNewBookPage>
            <AddNewBookPageTitle>Поделиться новой книгой</AddNewBookPageTitle>
            <h3>Изображение книги</h3>
            <AddNewBookBlock>
                <AddNewBookImgBox>
                    <AddNewBookImg/>
                </AddNewBookImgBox>
                <AddNewBookInfo>
                    <AddNewBookInfoForm1>
                        <StyledForm onSubmit={handleSubmit}>
                            <StyledLabel>Название</StyledLabel>
                            <StyledInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Введите название книги'/>
                            <StyledLabel>Автор</StyledLabel>
                            <StyledInput type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Введите автора книги'/>
                            <StyledLabel>Описание книги</StyledLabel>
                            <StyledTextarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Ведите краткое описание книги'/>
                            <StyledLabel>Категория</StyledLabel>
                            <StyledInput type="text" value={genre} onChange={(e) => setGenre(e.target.value)} placeholder='Введите категорию книги'/>
                            <StyledLabel>Локация</StyledLabel>
                            <StyledInput type="text"  value={like} onChange={(e) => setLike(e.target.value)} placeholder='Введите локацию книги'/>
                            <StyledButton type="submit" >Публиковать</StyledButton>
                        </StyledForm>
                    </AddNewBookInfoForm1>
                </AddNewBookInfo>
            </AddNewBookBlock>
        </AddNewBookPage>
    );
};

export default AddNewBook;