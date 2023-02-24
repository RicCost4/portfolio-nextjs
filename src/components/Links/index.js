import React from "react"
import contato from "../../../pages/api/json-arquivos/api_contato.json"
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

const StyleContatos = styled.section`
    margin: auto;
    padding: 20px 20px;
    display: grid;
    align-items: center;
    justify-content: center;

    a {
        background-color: var(--cor3);
        color: var(--cor1);
        width: 250px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 10px 20px;
        margin: 10px;
        border-radius: 25px;
        top: 50%;
        left: 50%;
        transition-duration: 1s;
    }

    a:hover {
        background-image: linear-gradient(to bottom, var(--cor4), var(--cor3), var(--cor4));
        color: var(--cor0);
    }

    a img {
        border-radius: 50%;
        vertical-align: top;
    }

    a span{
        margin: 0 10px;
    }
`

function Links(){
    const json = contato
    const [meusLinks, setMeusLinks] = React.useState([])

    React.useEffect(() => {
        setMeusLinks(json.link)
    }, [])
    return(
        <StyleContatos>
            {meusLinks.map((e) => {
                return(
                    <Link key={e.id} href={e.url} target="_blank">
                        <Image src={e.img} height={40} width={40} alt=" "/>
                        <span>{e.nome}</span>
                    </Link>
                )
            })}
            <Link href={json.email.url} >
                <AlternateEmailIcon />
                {json.email.nome}
            </Link>
            <Link href={json.curriculo.url} target="_blank">
                <PictureAsPdfIcon />
                {json.curriculo.nome}
            </Link>
        </StyleContatos>
    )
}

export default Links