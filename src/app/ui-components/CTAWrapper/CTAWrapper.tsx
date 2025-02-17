import { ReactNode } from 'react'

import styles from "./CTAWrapper.module.css"

type CTAWrapperProps = {
  children: ReactNode
}
export const CTAWrapper = (props: CTAWrapperProps) => {
  const { children } = props

  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}