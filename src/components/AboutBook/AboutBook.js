import axios from "axios";
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const AboutBookPage = styled.div`
  height: 100%;
  padding-top: 80px;
  color: #020233;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BookItemInfo = styled.div`
  display: flex;
`;

const BookItemImg = styled.img`
  width: 333px;
  height: 450px;
`;

const Title = styled.h2`
    margin-top: 0;
`;

const Author = styled.h3`
    
`;

const BookInfo = styled.h4`
    margin-left: 50px;
`;

const Owner = styled.h4`
    margin-top: 30px;
`;

const Description = styled.h3`
    
`;

const Condition = styled.h3`
    
`;

const Genre = styled.h3`
`;

const Status = styled.h3`
    
`;

const Address = styled.h3`
    
`;

const ChangeBtn = styled.button`
  margin: 50px 0;
  width: 200px;
  padding: 10px 15px;
  border: navajowhite;
  background-color: #040470;
  border-radius: 25px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #2929a2;
  }
`;

const AboutBook = () => {
    const {id} = useParams()
    const [ book, setBook ] = useState({})

    useEffect( () =>{
        const token = JSON.parse(localStorage.getItem("user"))

        axios.get(`http://34.173.33.226/api/v1/book-detail/${id}`,{
            headers: {
                Authorization: `Bearer ${token.access}`,
            },
        })
            .then((response) => {
                setBook(response.data)
                console.log(response.data)
            })
    }, [id] )


    const sendExchangeRequest = () => {
        const token = JSON.parse(localStorage.getItem("user"))
        const id = book.id
        axios.post(`http://34.173.33.226/api/v1/request-book/${id}/`, {
            headers: {
                Authorization: `Bearer ${token.access}`,
            },
        })
        console.log(book.owner.id)
        console.log(book)
    }

    return (
        <AboutBookPage >
            <Container>
                <BookItemInfo>
                    <BookItemImg src={book.image}/>
                    <BookInfo>
                        <Title>Название : {book.title}</Title>
                        <Author>Автор : {book.author}</Author>
                        <Genre>Жанр : {book.genre}</Genre>
                        <Condition>Состояние книги : {book.condition}</Condition>
                        <Status>Статус : {book.status}</Status>
                        <Description>Описание : {book.description}</Description>
                        {/*<Owner>Владелец книги : {book.owner.username}</Owner>*/}
                        {/*<Address>Вы можете забрать книгу по адресу : {book.owner.city}</Address>*/}
                        <ChangeBtn onClick={sendExchangeRequest}>Запросить книгу</ChangeBtn>
                    </BookInfo>
                </BookItemInfo>
            </Container>
        </AboutBookPage>
    );
};

export default AboutBook;