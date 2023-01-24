import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <h2 className={inter.className}>
              API GET PRODUCTS
            </h2>

      </div>
    </main>
  )
}
