import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Scroller from "react-slick"
import axios from "axios";
import {data} from "../../data.js";

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
`;

const ScrollItemBookImg = styled.img`
  width: 260px;
  height: 360px;
  border-radius: 24px;
`;

const ScrollItemBookInfo = styled.div`
    padding: 10px 15px 25px;
  text-align: center;
`;

const Title = styled.h3`
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


const Scroll = () => {

    const [scrollData, setScrollData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const response = {data}
        console.log(response.data)
        setScrollData(response.data)
        // try {
        //
        //     const response = await axios.get({data})
        //     console.log(response.data)
        //     setScrollData(response.data)
        // } catch (error) {
        //     console.error("Error fetching data:", error)
        // }
    }

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };


    return (
        <ScrollBlock>
            <i className="ri-arrow-right-double-line"></i>
            <ScrollAllBooks>
                {
                    scrollData.map(item => (
                        <ScrollItem key={item.id}>
                            <ScrollItemBookImg src={item.img}/>
                            <ScrollItemBookInfo>
                                <Title>{item.title}</Title>
                                <Author>{item.author}</Author>
                                <Genre>{item.genre}</Genre>
                                <Description>{item.description}</Description>
                                <Amount>{item.amount}</Amount>
                                <button>Одожить книгу</button>
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