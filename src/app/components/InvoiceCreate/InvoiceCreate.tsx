import styles from "./InvoiceCreate.module.css"
import { BackLink } from '../../ui-component/BackLink/BackLink'

export const InvoiceCreate = () => {
  return (
    <>
      <div className={styles.linkWrapper}>
        <BackLink to="/invoices">Back to invoices listing</BackLink>
      </div>
      INVOICE CREATE
    </>
  )
}