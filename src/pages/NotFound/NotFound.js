import React from 'react';
import NotFoundImg from "../../assets/img/notFoundImg.jpeg"
import styled from "styled-components";
// import {navigate} from "use-history";

const NotFoundPage = styled.div`
  background-image: url("${NotFoundImg}");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 50% 25%;
  height: 65vh;
  position: relative;
`;

// const NotFoundBtn = styled.button`
//   width: 200px;
//   border: none;
//   position: absolute;
//   top: 60%;
//   right: 44%;
//   padding: 15px;
//   background-color: #262664;
//   color: white;
//   border-radius: 25px;
//   cursor: pointer;
//   font-size: 20px;
// `;

const NotFound = () => {
    return (
        <>
            <NotFoundPage></NotFoundPage>
        </>
    );
};

export default NotFound;