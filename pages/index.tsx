import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Top page
        </h1>
        <ul>
          <li>
            <Link href='/articles/1'>
              <a>article 1</a>
            </Link>
          </li>
          <li>
            <Link href='/articles/2'>
              <a>article 2</a>
            </Link>
          </li>
          <li>
            <Link href='/articles/3'>
              <a>article 3</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home
