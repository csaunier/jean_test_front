import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

import styles from "./BackLink.module.css"

type BackLinkProps = {
  to: string
  children: ReactNode
}

export const BackLink = (props: BackLinkProps) => {
  const { to, children } = props
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  )
}