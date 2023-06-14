'use client'
import styles from './page.module.css'

export default function Error(){
    
    return(
        <main className={styles.main}>
            <h1 className={styles.h1}> Ops, algo deu errado!!</h1>
            <p className={styles.p}>
                Fique tranquilo, aconteceu algum erro do nosso lado, pedimos mil desculpas.
            </p>
            <p className={styles.p}>
                Tente novamente daqui a pouco, se persisti no contacte para resolvermos isto para você.
            </p>
        </main>
    )
}