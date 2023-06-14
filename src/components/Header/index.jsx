import Menu from "../Menu"
import styles from './index.module.css'

export default function Header(){

    return(
        <header className={styles.header}>
            <h1 className={styles.h1}>Richard Artur Rodrigues Costa</h1>
            <p className={styles.p}>Meu Portfólio</p>
            <Menu />
        </header>
    )
}