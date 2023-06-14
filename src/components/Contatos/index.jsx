"use client";
import React from "react"
import api from "@/service/contato.json"
import Link from "next/link"
import Image from "next/image"
import styles from "./index.module.css"

export default function Contatos(){
    const [lista, setLista] = React.useState([])

    React.useEffect(() => {
        setLista(api)
    }, [])

    return(
        <div className={styles.section}>
            {lista.map((e) => {
                return(
                    <Link key={e.id} href={e.url} className={styles.a} target="_blank">
                        <Image src={e.img} height={40} width={40} alt="url"/>
                        <span>{e.nome}</span>
                    </Link>
                )
            })}
        </div>
    )
}