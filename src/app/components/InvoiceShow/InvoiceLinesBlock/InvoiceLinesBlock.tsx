import { BlockWrapper } from '@components/InvoiceShow/BlockWrapper/BlockWrapper'
import { Components } from '@api/gen/client'

import styles from "./InvoiceLinesBlock.module.css"
import { formatCurrency } from '../../../utils/utils'

type InvoiceLinesBlockProps = {
  invoices_lines: Components.Schemas.InvoiceLine[]
}

export const InvoiceLinesBlock = (props: InvoiceLinesBlockProps) => {
  const { invoices_lines } = props

  return (
    <BlockWrapper title="Products">
      <ul className={styles.items}>
        {invoices_lines.length === 0 && (
          <li>No products</li>
        )}
        { invoices_lines.map((line) => {
          return (
            <li key={line.id}>
              <strong>{ line.quantity } {line.label}</strong> (unit price without tax : { formatCurrency(line.product.unit_price_without_tax) }, tax: {formatCurrency(line.product.unit_tax)}, vat: {line.product.vat_rate}), <strong>Subtotal : {formatCurrency(line.price)}</strong>
            </li>
          )
        }) }
      </ul>
    </BlockWrapper>
  )
}