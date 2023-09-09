import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import {navigate} from "use-history";

const ScrollBlock = styled.div`
  overflow-x: auto;
  white-space: nowrap;
  margin-top: 50px;
  padding: 10px;
  max-width: 100%;
  margin-bottom: 50px;
`;

const ScrollAllBooks = styled.div`
  display: inline-block;
`;

const ScrollItem = styled.a`
  display: inline-block;
  background-color: #fffdfd;
  border: 3px solid #c4c2c2;
  border-radius: 25px;
  cursor: pointer;
  margin: 0 30px;
  width: 300px;
`;

const ScrollItemBookImg = styled.img`
  width: 100%;
  height: 360px;
  border-radius: 24px;
`;

const ScrollItemBookInfo = styled.div`
  padding: 10px 15px 25px;
  text-align: center;
`;

const Title = styled.h2`
  margin-top: 10px;
`;
const Author = styled.h4`
    
`;

const Genre = styled.h4`
    
`;

const Description = styled.p`
    
`;

const Amount = styled.h4`
    
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


const Scroll = () => {

    const [scrollData, setScrollData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const token = JSON.parse(localStorage.getItem("user"))
        const response = await axios.get('http://34.173.33.226/api/v1/all-books/')
        setScrollData(response.data.results);
    }

    return (
        <ScrollBlock>
            <i className="ri-arrow-right-double-line"></i>
            <ScrollAllBooks>
                {
                    scrollData.map(item => (
                        <ScrollItem key={item.id} onClick={() => navigate("/about-Book")}>
                            <ScrollItemBookImg src={item.image}/>
                            <ScrollItemBookInfo>
                                <Title>{item.title}</Title>
                                <Author>{item.author}</Author>
                                <Genre>{item.genre.title}</Genre>
                                <Amount>{item.amount}</Amount>
                                <ChangeBtn onClick={() => navigate("/about-Book")}>Подробнее</ChangeBtn>
                            </ScrollItemBookInfo>
                        </ScrollItem>
                    ))
                }
            </ScrollAllBooks>
            <i className="ri-arrow-right-double-fill"></i>
        </ScrollBlock>
    );
};

export default Scroll;