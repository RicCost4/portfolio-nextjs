import Head from "next/head"
import Link from "next/link"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import Menu from "../src/components/Menu"
import { CSSReset } from "../src/components/CSS.resert"
import "./_app.css"

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/chad.ico" />
                <title>Meu Portfólio</title>
            </Head>
            <CSSReset />
            <Header />
            <Menu />
            <Component {...pageProps} />
            <Footer />
        </>
    )
  }
  export default MyApp