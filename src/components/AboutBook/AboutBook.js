import axios from "axios";
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {useParams} from "react-router-dom";

const AboutBookPage = styled.div`
    height: 100%;
`;

const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
`;

const BookItemInfo = styled.div`
  cursor: pointer;
  display: flex;
`;
const BookItemImg = styled.img`
  width: 400px;
  height: 450px;
`;

const Title = styled.h2`
    
`;

const Author = styled.h2`
    
`;

const BookInfo = styled.h4`
    
`;

const Owner = styled.h4`
    
`;

const Description = styled.p`
    
`;

const Condition = styled.div`
    
`;

const Address = styled.h4`
    
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

    return (
        <AboutBookPage >
            <Container>
                <BookItemInfo>
                    <BookItemImg src={book.image}/>
                    <BookInfo>
                        <Title>{book.title}</Title>
                        {/*<Author>{book.author}</Author>*/}
                        {/*<Genre>{book.genre}</Genre>*/}
                        <Condition>{book.condition}</Condition>
                        {/*<Owner>{book.owner.username}</Owner>*/}
                        {/*<Address>{book.owner.city}</Address>*/}
                    </BookInfo>
                    {/*<button>Одолжить книгу</button>*/}
                </BookItemInfo>
                <Description>{book.description}</Description>
            </Container>
        </AboutBookPage>
    );
};


export default AboutBook;

