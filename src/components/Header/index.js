import styled from "styled-components"
import Menu from "../Menu"

const StyleHeader = styled.header`
    background-image: linear-gradient(to bottom, var(--cor3), var(--cor2));
    min-height: 150px;
    text-align: center;
    padding-top: 30px;

    h1{
        color: var(--cor0);
        font-weight: normal;
        font-family: var(--fontTitulo);
        font-size: 3em;
        margin-bottom: 20px;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.555);
    }

    p{
        color: var(--cor4);
        font-size: 1.2em;
        margin: auto;
        padding-bottom: 30px;
        padding-right: 10px;
        padding-left: 10px;
        max-width: 500px;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.555);
    }
`

function Header(){

    return(
        <StyleHeader>
            <h1>Richard Artur Rodrigues Costa</h1>
            <p>Meu Portfólio</p>
            <Menu />
        </StyleHeader>
    )
}

export default Header