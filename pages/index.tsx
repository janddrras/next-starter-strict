import Head from 'next/head'
import Link from 'next/link'
import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Link href='/tailwind'>Tailwind css</Link>
    </div>
  )
}

