import { ReactNode } from 'react'

import styles from "./Title.module.css"

type TitleProps = {
  children: ReactNode
}

export const Title = (props: TitleProps) => {
  const { children } = props

  return (
    <h1 className={styles.title}>
      {children}
    </h1>
  )
}