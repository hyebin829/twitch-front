import GNB from 'components/GNB'
import Header from 'components/Header'
import { Outlet } from 'react-router-dom'

import styles from './layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <GNB />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer />
    </div>
  )
}

export default Layout
