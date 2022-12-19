
import * as React from "react"
import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface Props {
  children?: React.ReactNode;
}

export const MainLayouts:React.FC<Props>= ({children}) => {
    return (
        <>
            <Head>
                <title>Home - Lara</title>
                <meta name="description" content="Home Page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="next, lara, alonso, curso" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>

                {children}
                
            </main>
        </>
    )
}
