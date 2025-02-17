import { ReactNode } from 'react'

import styles from "./BlockWrapper.module.css"

type BlockWrapperProps = {
  title: string
  children: ReactNode
}

export const BlockWrapper = (props: BlockWrapperProps) => {
  const { title, children } = props

  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}