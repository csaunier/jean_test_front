import { useParams } from 'react-router'
import { BackLink } from '@uiComponents/BackLink/BackLink'

import styles from "./InvoiceEdit.module.css"
import { Title } from '@uiComponents/Title/Title'

export const InvoiceEdit = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <>
      <Title>
        Invoice edition
      </Title>
      <div className={styles.linkWrapper}>
        <BackLink to={`/invoice/${id}`}>Back to overview</BackLink>
      </div>
      INVOICE EDIT : { id }
    </>
  )
}