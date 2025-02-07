import type { FunctionComponent } from "react"
import { Header } from "../Header/Header"
import { Outlet } from "react-router"

import styles from "./Layout.module.css"

export const Layout: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
