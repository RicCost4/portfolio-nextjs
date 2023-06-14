import Link from "next/link"
import styles from './index.module.css'

export default function Menu(){

    return(
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link className={styles.a} href={"/"}>Pagina Inicial</Link>
            </div>
            <button className={styles.MSand}>&#9776;</button>
            <ul className={styles.menu}>
                <li className={styles.lista}>
                    <Link className={styles.a} href={"/Carreira"}>Carreira</Link>
                </li>
                <li className={styles.lista}>
                    <Link className={styles.a} href={"/Projeto"}>Projetos</Link>
                </li>
                <li className={styles.lista}>
                    <Link className={styles.a} href={"/Blog"}>Blog</Link>
                </li>
                <li className={styles.lista}>
                    <Link className={styles.a} href={"/Contato"}>Contatos</Link>
                </li>
            </ul>
        </nav>
    )
}