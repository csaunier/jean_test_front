import { BlockWrapper } from '@components/InvoiceShow/BlockWrapper/BlockWrapper'

type StatusBlockProps = {
  paid: boolean,
  finalized: boolean,
  deadline: string | null
}
export const StatusBlock = (props: StatusBlockProps) => {
  const { paid, finalized, deadline } = props

  return (
    <BlockWrapper title="Status">
      Paid: {paid ? "yes" : "no"}
      <br />
      Finalized: {finalized ? "yes" : "no"}
      {deadline && (<>
        <br />
        Late: {new Date(deadline) < new Date() ? "yes" : "no"}
      </>)}
    </BlockWrapper>
  )
}