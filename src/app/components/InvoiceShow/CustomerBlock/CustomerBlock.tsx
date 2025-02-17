import { BlockWrapper } from '@components/InvoiceShow/BlockWrapper/BlockWrapper'
import { Components } from '@api/gen/client'

type CustomerBlockProps = {
  customer?: Components.Schemas.Customer
}

export const CustomerBlock = (props: CustomerBlockProps) => {
  const { customer } = props


  return (
    <BlockWrapper title="Customer">
      {!customer ? "Unknown" : (
        <>
          <strong>{customer.last_name} {customer.first_name}</strong>,
          {customer.address} {customer.city}, {customer.zip_code} {customer.country}
        </>
      )}
    </BlockWrapper>
  )
}