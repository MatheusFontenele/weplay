import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* ===== Scrollbar CSS ===== */
    /* Firefox */
    * {
      scrollbar-width: auto;
      scrollbar-color: #c9c9c9 #0A0F13;
    }

    /* Chrome, Edge, and Safari */
    *::-webkit-scrollbar {
      width: 10px;
    }

    *::-webkit-scrollbar-track {
      background: #0A0F13;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #c9c9c9;
      border-radius: 5px;
      border: 3px none #ffffff;
    }

    body{
      background: linear-gradient(90deg, rgba(7,11,34,1) 0%, rgba(8,13,38,1) 28%, rgba(8,13,38,1) 59%);
      color: #FFF;
      overflow-x: hidden;
    }
    body, input, textarea, button{
        font: 400 1.6rem 'Montserrat', sans-serif;
    }
    button{
        cursor: pointer;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    @media(max-width: 1080px){
      ::root{
        font-size: 93.75%;
      }
    }
    @media(max-width: 720px){
      ::root{
        font-size: 87.5%;
      }
    }
`
