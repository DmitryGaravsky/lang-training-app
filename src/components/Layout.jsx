import { React } from 'react'
import { Outlet } from "react-router-dom"
import NavBar from './NavBar/NavBar'
import routes from './routes'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <>
      <header>
        <NavBar routes={routes} />
      </header>
      <main className={styles.Main}>
        <Outlet />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default Layout