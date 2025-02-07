import { useParams } from 'react-router'
import { BackLink } from '../../ui-component/BackLink/BackLink'

import styles from "./InvoiceEdit.module.css"

export const InvoiceEdit = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <div className={styles.linkWrapper}>
        <BackLink to={`/invoice/${id}`}>Back to overview</BackLink>
      </div>
      INVOICE EDIT : { id }
    </>
  )
}