import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

 * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    outline: 0;
 }
 
  body {
    display: block;
    width: 100%;  
    height: auto;
    background-color: rgb(33, 34, 35);
    color: #d7d7d7;
    z-index: 1;
    position: relative;
    font-size: 16px;
    line-height: 22px;
    font-family: MuseoSans,sans-serif;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    min-height: 100vh;
    margin: 0 auto;
    ::selection {
      background-color: #0662d2;
      color: #ffffff;
    }
  }
`;
