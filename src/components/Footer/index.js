import Link from "next/link";
import index from "../../../pages/api/json-arquivos/api_index.json";
import link from "../../../pages/api/json-arquivos/api_contato.json"
import packageJson from '../../../package.json';
import styled from "styled-components"

const StyleFooter = styled.footer`
    background: linear-gradient(90deg, var(--cor4) 0%, var(--cor3) 35%, var(--cor3) 58%, var(--cor4) 100%);
    border: 30px;
    color: var(--cor0);
    display: flex;
    text-align: center;
    justify-content: center;
    font-size: 0.9em;
    padding: 10px;
    width: 100%;
    height: 50px;
    margin: auto;
    bottom: 0;
    position: fixed;

    a{
        color: var(--cor1);
        font-weight: bolder;
    }

    a:hover {
        text-decoration: underline;
        color: var(--cor2);
    }

    @media screen and (max-width: 850px) {
        font-size: 0.8em;
    }
`

function Footer(){
    const textos = index
    const github = link

    let ano = new Date()
    let year = ano.getFullYear()

    const versionList = packageJson.version.split('.')
    const formatarVersion = versionList.slice(0, 2).join('.')

    return(
        <StyleFooter>
            <p>
                Esse site foi criado pelo <Link href={github.link[1].url} target={"_blank"}>@{textos.perfil.nome}</Link> como consolidação dos estudos e apresentação profissional, 2022 - {year} versão {formatarVersion}
            </p>
        </StyleFooter>
    )
}

export default Footer