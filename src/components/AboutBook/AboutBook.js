
import axios from "axios";
import React, {useEffect, useState} from 'react';
import styled from "styled-components";

// const AboutBookPage = styled.div`
//
// `;
//
// const AboutBookPage = styled.div`
//
// `;









const AboutBook = () => {
const [ book, setBook ] = useState( [])
 useEffect( () =>{
fetchData()

},{} )
    const fetchData =  async () => {
    const response =  await axios.get("http://34.173.33.226/api/v1/all-books/")
        setBook(response.data.results)
        console.log(response.data)


           }

           return (
       <>
                      <div>
                    {
                        book.map(item => (
                            <div key={item.id}>{item.title}</div>,
                                <div>{item.author}</div>,
                                <div>{item.genre}</div>

                        ))
                    }
                </div>
                </>
    );
};

export default AboutBook;