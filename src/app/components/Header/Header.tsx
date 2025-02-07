import { NavLink } from "react-router-dom"

import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.link} to="/">
        Invoices Manager
      </NavLink>
    </header>
  )
}
