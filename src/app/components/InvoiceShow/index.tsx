import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { useApi } from 'api'
import { Invoice } from 'types'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styles from '../InvoicesList/InvoicesList.module.css'
import { BackLink } from '../../ui-component/BackLink/BackLink'

const InvoiceShow = () => {
  const { id } = useParams<{ id: string }>()
  const api = useApi()
  const [invoice, setInvoice] = useState<Invoice>()

  useEffect(() => {
    api.getInvoice(id).then(({ data }) => {
      setInvoice(data)
    })
  }, [api, id])

  return (
    <>
      <div className={styles.ctaWrapper}>
        <BackLink to={`/invoices`}>Back to listing</BackLink>
        {/*
          Button is not accepting Link inside as props :/
          Ugly fallback, see if it's can be fixed, otherwise Link with appropriate styles
        */}
        <Link to={`/invoice/${id}/edit`}>
          <Button as="span" size="lg">Edit this invoice</Button>
        </Link>
      </div>
      <pre>{JSON.stringify(invoice ?? '', null, 2)}</pre>
    </>
  )
}

export default InvoiceShow
