import React, {useState, useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";
import {navigate} from "use-history";

const AllBooksPage = styled.div`
 padding: 50px 80px ;
  text-align: center;
`;

const AllBooksPageTitle = styled.h1`
  font-size: 40px;
  color: #1d1d59;
  margin-bottom: 80px;
`;

const BooksBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookItem = styled.div`
  width: 300px;
  box-shadow: 1px 1px 4px 0 #9b9b9b;
  border-radius: 25px;
  transition: all 0.3s ease-in-out;
  padding-bottom: 30px;
  overflow: hidden;
  
`;

const BookItemImg = styled.img`
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  width: 300px;
  height: 350px;
  &:hover {
    transform: scale(1.15);
    transition: all 0.3s ease-in;
  }
`;

const BookItemInfo = styled.div`
    
`;

const Title = styled.h2`
    
`;

const Author = styled.h2`
    
`;

const Genre = styled.h2`
    
`;

const Description = styled.p`
    
`;

const Amount = styled.div`
    
`;

const BookList = () => {

    const [books, setBooks] = useState([]);

    useEffect( () =>{
       fetchData()
    },[] )

    const fetchData =  async () => {
        const token = JSON.parse(localStorage.getItem("user"))
        const response = await axios.get('http://34.173.33.226/api/v1/all-books/')
        setBooks(response.data.results);
        console.log(response.data.results)
    }

    return (
        <AllBooksPage>
            <AllBooksPageTitle>All Books</AllBooksPageTitle>
            <BooksBlock>
                {books.map(book => (
                    <BookItem key={book.id}>
                        <BookItemInfo>
                            <BookItemImg src={book.image}/>
                            <Title>{book.title}</Title>
                            <Author>{book.author}</Author>
                            <Genre>{book.genre.title}</Genre>
                            <Description>{book.description}</Description>
                            <Amount>{books.owner}</Amount>
                            <button>Одолжить книгу</button>
                        </BookItemInfo>
                    </BookItem>
                ))}
            </BooksBlock>
        </AllBooksPage>
    );
};

export default BookList;