import Apresentacao from "./components/Apresentacao"
import QuemSou from "./components/QuemSou"
import styled from "styled-components"

const StyleHome = styled.main`
    section h1{
        font-family: var(--fontSubTitulo);
        text-align: left;
        padding: 10px;
        color: var(--cor0);
        background-color: var(--cor2);
        margin: 2px;
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.541);
        border-radius: 20px;
    }

    section p{
        margin: 10px;
    }

    .perfil {
        display: flex;
    }
    
    .perfilImg {
        margin: 10px;
        border-radius: 15px;
    }
    
    .perfilTxt {
        padding: 0px 15px;
    }

    @media screen and (max-width: 750px) {
        .perfil {
            display: flex;
            flex-direction: column;
            text-align: center;
        }
    
        .perfilImg {
            margin: auto;
            display: block;
            border-radius: 50%;
        }
    }
`

function Home(){

    return(
        <StyleHome>
            <Apresentacao />
            <QuemSou />
        </StyleHome>
    )
}

export default Home