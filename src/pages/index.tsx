import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Slider from '@/components/Slider/Slider'
import { roomList } from '@/mocks/reservations'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={`${styles.HomeRoute}`}>
          <h1 className={`${styles.page__title}`}>
            Home
          </h1>
          <div className={`${styles.page__content}`}>
            <div className={`${styles.section}`}>
              <p className={`${styles.title}`}>Our selection</p>
              <div className={`${styles.content}`}>
                <Slider data={roomList} />
              </div>
            </div>
            <div className={`${styles.section}`}>
              <p className={`${styles.title}`}>Top rated</p>
              <div className={`${styles.content}`}>
                <Slider data={roomList} />
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
