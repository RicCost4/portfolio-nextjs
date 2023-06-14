import styles from './page.module.css'

export default function NotFound(){
    
    return(
        <main className={styles.main}>
            <h1 className={styles.h1}> Pagina não encontrada - 404!!</h1>
            <p className={styles.p1}>
                Que pena, não encontramos a Pagina solicitada, verifica a URL ou tente novamente depois.
            </p>
        </main>
    )
}