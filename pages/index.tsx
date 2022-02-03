import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        sales upgrader
        <iframe style={{ height: '45vh', width: '70vw' }} src="http://localhost:3000/"></iframe>
        assortment control
        <iframe style={{ height: '45vh', width: '70vw' }} src="http://localhost:8080/"></iframe>

        {/* dev
        <iframe style={{ height: '45vh', width: '70vw' }} src="https://dev.sales-upgrader.d-p.io"></iframe> */}

      </main>

    </div>
  )
}

export default Home
