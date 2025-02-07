import type { FunctionComponent } from "react"

import styles from "./LandingPage.module.css"
import { Link } from "react-router-dom"

export const LandingPage: FunctionComponent = () => {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>
        Welcome to <span className={styles.highlight}>Invoices Manager</span>
      </h1>
      <Link
        to="/invoices"
        className={styles.link}
      >
        Let's manage some invoices
      </Link>
    </main>
  )
}
