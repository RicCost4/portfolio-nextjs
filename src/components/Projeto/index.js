import React from "react"
import json from "../../../pages/api/json-arquivos/api_projetos.json"
import Link from "next/link"
import styled from "styled-components"
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';

const StyleProjeto = styled.section`
    h2{
        max-width: 400px;
        margin: auto;
    }
    
    h3{
        font-family: var(--fontSubTitulo);
        padding: 10px;
        color: var(--cor0);
        background-color: var(--cor2);
        max-width: 650px;
        margin: auto;
        text-align: center;
        margin-top: 15px;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }

    .caixa1{
        max-width: 650px;
        margin: auto;
        padding: 5px 20px 0px 20px;
        color: var(--cor1);
        border-left: 2px solid var(--cor2);
        border-right: 2px solid var(--cor2);
        display: grid;
        align-items: center;
        justify-content: center;
    }

    .caixa2{
        margin: auto;
        padding-top: 20px;
    }

    .caixa3{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 300px;
    }

    .caixa3:hover{
        border-left: 2px solid var(--cor2);
        border-right: 2px solid var(--cor2);
    }

    .link1{
        width: 270px;
        padding: 10px 0px 10px 10px;
        display: flex;
        color: var(--cor1);
        white-space: nowrap;
    }

    .link1:hover{
        color: var(--cor2);
        background-color: var(--cor4);
    }

    .link2{
        display: flex;
        align-items: center;
        width: 30px;
        padding-right: 10px;
        color: var(--cor1);
    }

    .link2:hover{
        color: var(--cor2);
        background-color: var(--cor4);
    }
`

function Projeto(){
    
    const [lista, setLista] = React.useState([])

    React.useEffect(() => {
        setLista(json.projetos)
    }, [])

    return(
        <StyleProjeto>
            <h2>Hospedados no GitHub</h2>
            <h3>Repositorios</h3>
            <div className="caixa1">
                <p>Repositorios com todos os meus projetos criados, inclusive o meu portfolio.</p>
                <div className="caixa2">
                    {lista.map((e) => {
                        if(e.web){
                            return(
                                <p className="caixa3" key={e.id}>
                                    <Link href={e.links} target="_blank" className="link1">
                                        <DescriptionIcon />
                                        {e.nome}
                                    </Link>
                                    <Link href={e.site} target="_blank" className="link2">
                                        <LanguageIcon /> 
                                    </Link>
                                </p>
                            )
                        }else{
                            return(
                                <p className="caixa3" key={e.id}>
                                    <Link href={e.links} target="_blank" className="link1">
                                        <DescriptionIcon />
                                        {e.nome}
                                    </Link>
                                </p>
                            )
                        }
                    })}
                </div> 
            </div>         
        </StyleProjeto>
    )
}

export default Projeto