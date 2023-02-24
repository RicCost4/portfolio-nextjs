import {createGlobalStyle} from "styled-components";

export const CSSReset = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    font-family: var(--fonte-padrao);
    font-size: 1em;
    background-color: var(--cor4);
  }

  main{
    background-color: var(--cor4);
    min-width: 300px;
    max-width: 1000px;
    margin: auto;
    margin-bottom: 50px;
    padding: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  a {
    text-decoration: none;
    color: var(--cor0);
  }

  main h1{
    margin-bottom: 10px;
    font-family: var(--fontTitulo);
    text-align: center;
    background-color: var(--cor1);
    color: var(--cor4);
    font-size: 2em;
    border-radius: 25px;
  }

  main h2{
    padding: 5px 15px;
    margin: 10px;
    font-family: var(--fontSubTitulo);
    background-image: linear-gradient(to right, var(--cor3), transparent);
    color: var(--cor4);
    font-size: 1.5em;
    text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.808);
    border-radius: 15px;
  }

  section p {
    font-family: var(--fontTxt);
    color: var(--cor1);
    text-align: justify;
    text-indent: 30px;
  }

  section a {
    text-align: center;
    color: var(--cor0);
    font-size: 1em;
    text-decoration: none;
  }

  section a:hover {
    background-color: var(--cor3);
    color: var(--cor4);
    cursor: pointer;
  }
`