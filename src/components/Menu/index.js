import Link from "next/link"
import styled from "styled-components"

const StyleMenu = styled.nav`
    background-color: var(--cor2);
    font-family: var(--fontMenu);
    margin: auto;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    top: 0px;
    display: flex;
    flex-direction: row;

    a:hover{
        text-decoration: underline;
        color: var(--cor4);
    }

    .menu{
        list-style: none;
        margin: 0px;
        padding: 0px;
        overflow: hidden;
        transition: all 0.6s;
    }

    .logo,
    .lista {
        margin: 0px;
        padding: 0 20px;
        border-radius: 10px;
        height: 30px;
    }

    .MSand {
        background-color: transparent;
        padding: 0 10px;
        border: none;
        font-size: 36px;
        position: absolute;
        right: 10px;
        display: none;
    }
    
    .logo,
    .MSand {
        color: var(--cor0);
        transition-duration: 1s;
    }
    
    .menu {
        display: flex;
        flex-direction: row;
    }
    
    .lista:hover,
    .logo:hover,
    .MSand:hover {
        cursor: pointer;
        opacity: 0.8;
        background-color: var(--cor3);
    }
    
    .MSand:focus~.menu {
        height: 110px;
    }

    @media screen and (max-width: 850px) {
        
        align-items: flex-start;
        flex-direction: column;
    
        .menu {
            text-align: center;
            margin: 0;
            height: 0;
        }
    
        .MSand {
            display: flex;
        }
    
        .logo {
            margin: 10px;
        }
    
        .lista,
        .menu {
            width: 100%;
        }
    
        .menu {
            flex-direction: column;
        }
    }
`

function Menu(){

    return(
        <StyleMenu>
            <div className="logo">
                <Link href={"./"}>Pagina Inicial</Link>
            </div>
            <button className="MSand">&#9776;</button>
            <ul className="menu">
                <li className="lista">
                    <Link href={"/Atividade"}>Carreira</Link>
                </li>
                <li className="lista">
                    <Link href={"/Projetos"}>Projetos</Link>
                </li>
                <li className="lista">
                    <Link href={"/Contatos"}>Contatos</Link>
                </li>
            </ul>
        </StyleMenu>
    )
}

export default Menu