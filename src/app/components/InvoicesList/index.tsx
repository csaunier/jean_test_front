import { useApi } from 'api'
import { Invoice } from 'types'
import { useEffect, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Title } from '@uiComponents/Title/Title'
import { CTAWrapper } from '@uiComponents/CTAWrapper/CTAWrapper'

const InvoicesList = () => {
  const api = useApi()

  const [invoicesList, setInvoicesList] = useState<Invoice[]>([])

  const fetchInvoices = useCallback(async () => {
    const { data } = await api.getInvoices()
    setInvoicesList(data.invoices)
  }, [api])

  useEffect(() => {
    fetchInvoices()
  }, [fetchInvoices])

  return (
    <>
      <Title>
        Invoices listing
      </Title>
      <CTAWrapper>
        {/*
          Button is not accepting Link inside as props :/
          Ugly fallback, see if it's can be fixed, otherwise Link with appropriate styles
        */}
        <Link to="/invoice/create">
          <Button as="span">Create an invoice</Button>
        </Link>
      </CTAWrapper>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Customer</th>
            <th>Address</th>
            <th>Total</th>
            <th>Tax</th>
            <th>Finalized</th>
            <th>Paid</th>
            <th>Date</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          {invoicesList.map((invoice) => (
            <tr key={invoice.id}>
              <td><Link to={`/invoice/${invoice.id}`}>{invoice.id}</Link></td>
              <td>
                {invoice.customer?.first_name} {invoice.customer?.last_name}
              </td>
              <td>
                {invoice.customer?.address}, {invoice.customer?.zip_code}{' '}
                {invoice.customer?.city}
              </td>
              <td>{invoice.total}</td>
              <td>{invoice.tax}</td>
              <td>{invoice.finalized ? 'Yes' : 'No'}</td>
              <td>{invoice.paid ? 'Yes' : 'No'}</td>
              <td>{invoice.date}</td>
              <td>{invoice.deadline}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default InvoicesList
