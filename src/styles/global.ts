import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #0A0F13;
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
