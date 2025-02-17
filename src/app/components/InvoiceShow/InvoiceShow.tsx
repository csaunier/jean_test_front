import { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { useApi } from 'api'
import { Invoice } from 'types'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { BackLink } from '@uiComponents/BackLink/BackLink'
import { Title } from '@uiComponents/Title/Title'
import { CustomerBlock } from '@components/InvoiceShow/CustomerBlock/CustomerBlock'
import { InvoiceLinesBlock } from '@components/InvoiceShow/InvoiceLinesBlock/InvoiceLinesBlock'
import { CTAWrapper } from '@uiComponents/CTAWrapper/CTAWrapper'

import styles from "./InvoiceShow.module.css"
import { TotalBlock } from '@components/InvoiceShow/TotalBlock/TotalBlock'
import { DatesBlock } from '@components/InvoiceShow/DatesBlock/DatesBlock'
import { StatusBlock } from '@components/InvoiceShow/StatusBlock/StatusBlock'

export const InvoiceShow = () => {
  const { id } = useParams<{ id: string }>()
  const api = useApi()
  const [invoice, setInvoice] = useState<Invoice>()

  useEffect(() => {
    api.getInvoice(id).then(({ data }) => {
      setInvoice(data)
    })
  }, [api, id])

  if (!invoice) return (
    <div>Do empty states with return link</div>
  )

  return (
    <>
      <Title>
        Invoice details
      </Title>
      <CTAWrapper>
        <BackLink to={`/invoices`}>Back to listing</BackLink>
        {/*
          Button is not accepting Link inside as props :/
          Ugly fallback, see if it's can be fixed, otherwise Link with appropriate styles
        */}
        <Link to={`/invoice/${id}/edit`}>
          <Button as="span">Edit this invoice</Button>
        </Link>
      </CTAWrapper>
      <div className={styles.blockWrapper}>
        <StatusBlock finalized={invoice.finalized} paid={invoice.paid} deadline={invoice.deadline} />
        <CustomerBlock customer={invoice.customer} />
        <DatesBlock createDate={invoice.date} deadline={invoice.deadline} />
        <InvoiceLinesBlock invoices_lines={invoice.invoice_lines} />
        <TotalBlock total={invoice.total} tax={invoice.tax} />
      </div>
    </>
  )
}

