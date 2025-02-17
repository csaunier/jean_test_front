import styles from "./InvoiceCreate.module.css"
import { BackLink } from '@uiComponents/BackLink/BackLink'
import { Title } from '@uiComponents/Title/Title'

export const InvoiceCreate = () => {
  return (
    <>
      <Title>
        Invoice creation
      </Title>
      <div className={styles.linkWrapper}>
        <BackLink to="/invoices">Back to invoices listing</BackLink>
      </div>
      INVOICE CREATE
    </>
  )
}