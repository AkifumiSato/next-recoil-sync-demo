import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

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
        <h1 className={styles.title}>
          Article {id}
        </h1>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps<Props, { id: string }> = ({ params: { id } }) => {
  return {
    props: {
      id,
    }
  }
}
