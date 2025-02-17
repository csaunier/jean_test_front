import { BlockWrapper } from '@components/InvoiceShow/BlockWrapper/BlockWrapper'
import { formatCurrency } from '../../../utils/utils'

type TotalBlockProps = {
  total: string | null
  tax: string | null
}
export const TotalBlock = (props: TotalBlockProps) => {
  const { total, tax } = props

  return (
    <BlockWrapper title="Total">
      {!total ? "No price" : (
        <><strong>{formatCurrency(total)}</strong> {tax && (<>(including tax of {formatCurrency(tax)})</>)}</>
      )}
    </BlockWrapper>
  )
}