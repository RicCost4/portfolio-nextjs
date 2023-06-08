import Experiencias from "./components/Experiencias"
import Conhecimentos from "./components/Conhecimentos"
import Habilidades from "./components/Habilidades"
import styled from "styled-components"

const StyleCarreira = styled.main`
    section h1{
        font-family: var(--fontSubTitulo);
        padding: 10px;
        color: var(--cor0);
        background-color: var(--cor2);
        margin: 2px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.541);
        border-radius: 20px;
    }

    section p,
    section div{
        margin: 10px;
        padding: 0 10px;
    }

    .tabela,
    .SofImg{
        margin: auto;
        display: block;
        max-width: 500px;
        min-width: 250px;
    }
    
    .SofImg{
        text-align: center;
    }

    .tabela{
        background-color: var(--cor1);
        margin-top: 15px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.541);
        text-align: left;
    }

    .tabela h3{
        background-color: var(--cor2);
        color: var(--cor4);
        padding: 10px;
        margin: -10px -10px 0 -10px;
        border-radius: 10px 10px 0px 0px;
    }

    .tabela ul{
        list-style-position: inside;
        columns: 2;
        list-style: none;
    }

    .tabela ul,
    .SofImg {
        margin-top: 10px;
    }

    .SofImg img{
        width: 90px;
        height: 90px;
    }

    .cursos {
        color: var(--cor1);
        padding: 0px 10px;
        list-style: none;
    }

    .cursos li {
        padding: 3px 5px;
    }
`

function Carreira(){

    return(
        <StyleCarreira>
            <h1>Carreira</h1>
            <Experiencias />
            <Conhecimentos />
            <Habilidades />
        </StyleCarreira>
    )
}

export default Carreira