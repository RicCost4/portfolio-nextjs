"use client";
import React from "react";
import api from "@/service/experiencia.json";
import styles from '../index.module.css'

function Experiencias(){
    const [paragrafo, setParagrafo] = React.useState([])

    React.useEffect(() => {
        setParagrafo(api)
    }, [])

    return(
        <section className={styles.section}>
            <h1>Experiências</h1>
            {paragrafo.map((e) => {
                return(
                    <p key={e.id}>
                        {e.paragrafo}
                    </p>
                )
            })}
        </section>
    )
}

export default Experiencias