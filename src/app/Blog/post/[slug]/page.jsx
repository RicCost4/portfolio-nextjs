import Image from 'next/image';
import myGif from '../../../../../public/img/manutencao.gif'
import styles from "../../page.module.css"


export async function generateMetadata({params}) {
  return{
    title:`post  ${params.slug}`
  }
}

export default async function Page( {params: {slug}}) {
  return (
    <main className={styles.main}>
      <Image src="/img/manutencao.png" alt="my gif" height={91} width={211} />
      <p>Post: {slug}</p>
      <Image src={myGif} alt="my gif" height={150} width={147} />     
    </main>
  )
}