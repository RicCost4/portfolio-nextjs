"use client";
import React from "react";
import Image from "next/image";
import apiLinguagens from "@/service/linguagens.json";
import apiCursos from "@/service/cursos.json";
import styles from '../index.module.css'


function Conhecimentos(){

    const [linguagens, setLinguagens] = React.useState([])
    const [cursos, setCursos] = React.useState([])

    React.useEffect(() => {
        setLinguagens(apiLinguagens)
        setCursos(apiCursos)
    }, [])

    return(
        <section className={styles.section}>
            <h1>Conhecimentos</h1>
            <div className={styles.div}>
                <div className={styles.tabela}>
                    <h3>Meus conhecimentos são</h3>
                    <ul>
                        {linguagens.map((e) => {
                                return (
                                    <li key={e.id} className={styles.li}>{e.linguagem}</li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.SofImg}>
                    {linguagens.map((e) => {
                            return (
                                <Image key={e.id} src={e.url} height={100} width={100} alt={"foto-de-uma-linguagem"} />
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <p>
                    <strong>Técnicas</strong>: Possuo cursos online de aperfeiçoamento de conhecimento;
                </p>
                <ul className={styles.cursos}>
                    {cursos.map((e) => {
                            return (
                                <li key={e.id}>● {e.atividades}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Conhecimentos