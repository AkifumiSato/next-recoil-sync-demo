import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Counter } from '../../src/components/Counter'

type Props = {
  id: string
}

const Home: NextPage<Props> = ({ id }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Article {id}</h1>
        <Counter />
        <ul>
          <li>
            <Link href="/articles/1">
              <a>article 1</a>
            </Link>
          </li>
          <li>
            <Link href="/articles/2">
              <a>article 2</a>
            </Link>
          </li>
          <li>
            <Link href="/articles/3">
              <a>article 3</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props, { id: string }> = ({
  params: { id },
}) => {
  return {
    props: {
      id,
    },
  }
}
