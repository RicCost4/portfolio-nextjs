import Image from 'next/image';
import myGif from '../../../public/img/manutencao.gif'
import styles from "./page.module.css"


export const metadata = {
  title: 'Blog'
}

export default function Page() {
  return (
    <main className={styles.main}>
      <Image src="/img/manutencao.png" alt="my gif" height={91} width={211} />
      <Image src={myGif} alt="my gif" height={150} width={147} />     
    </main>
  )
}