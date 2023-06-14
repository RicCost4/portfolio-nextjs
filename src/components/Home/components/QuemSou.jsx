"use client";
import Image from "next/image"
import React from "react";
import styles from '../index.module.css'
import api1 from '@/service/quemsouP1.json'
import api2 from '@/service/quemsouP2.json'

export default function QuemSou(){

    const [paragrafo1, setParagrafo1] = React.useState([])
    const [paragrafo2, setParagrafo2] = React.useState([])

    React.useEffect(() => {
        setParagrafo1(api1)
        setParagrafo2(api2)
    }, [])

    return(
        <section>
            <h1 className={styles.h1}>Quem Sou!</h1>
            <div className={styles.perfil}>
                <Image src={'/img/IMG-Chad03.jpg'} alt="Chad" width={300} height={300} className={styles.perfilImg} />
                <div className={styles.perfilTxt}>
                {paragrafo1.map((e) => {
                    return(
                        <p key={e.id} className={styles.p}>
                            {e.texto}
                        </p>
                    )
                })}
                {paragrafo2.map((e) => {
                    return(
                        <p key={e.id} className={styles.p}>
                            <strong>{e.strong}</strong>{e.texto}
                        </p>
                    )
                })}
                </div>
            </div>
        </section>
    )
}