// @react
"use client";
import React from 'react'
import Link from "next/link";
import packageJson from '../../../package.json';
import styles from './index.module.css'


export default function Footer(){
       
    const [gitHub, setGithub] = React.useState('/')

    const versionList = packageJson.version.split('.')
    const formatarVersion = versionList.slice(0, 2).join('.')

    let ano = new Date()
    let year = ano.getFullYear()

    
    return(
        <footer className={styles.footer}>
            <p>
                Esse site foi criado pelo <Link className={styles.a} href={gitHub} target={"_blank"}>@Richard Artur</Link> como consolidação dos estudos e apresentação profissional, 2022 - {year} versão {formatarVersion}
            </p>
        </footer>
    )
}