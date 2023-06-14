"use client";
import React from "react"
import api from "@/service/projeto.json"
import Link from "next/link"
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import styles from './index.module.css'

export default function Projetos(){
    
    const [lista, setLista] = React.useState([])

    React.useEffect(() => {
        setLista(api)
    }, [])

    return(
        <>
            <h2 className={styles.h2}>Hospedados no GitHub</h2>
            <h3 className={styles.h3}>Repositorios</h3>
            <div className={styles.caixa1}>
                <p>Repositorios com todos os meus projetos criados, inclusive o meu portfolio.</p>
                <div className={styles.caixa2}>
                    {lista.map((e) => {
                        if(e.web){
                            return(
                                <p className={styles.caixa3} key={e.id}>
                                    <Link href={e.links} target="_blank" className={styles.link1}>
                                        <DescriptionIcon />
                                        {e.nome}
                                    </Link>
                                    <Link href={e.site} target="_blank" className={styles.link2}>
                                        <LanguageIcon /> 
                                    </Link>
                                </p>
                            )
                        }else{
                            return(
                                <p className={styles.caixa3} key={e.id}>
                                    <Link href={e.links} target="_blank" className={styles.link1}>
                                        <DescriptionIcon />
                                        {e.nome}
                                    </Link>
                                </p>
                            )
                        }
                    })}
                </div> 
            </div>         
        </>
    )
}