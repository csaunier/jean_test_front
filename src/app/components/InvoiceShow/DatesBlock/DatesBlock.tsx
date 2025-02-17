import { BlockWrapper } from '@components/InvoiceShow/BlockWrapper/BlockWrapper'

type DatesBlockProps = {
  createDate: string | null
  deadline: string | null
}
export const DatesBlock = (props: DatesBlockProps) => {
  const { createDate, deadline } = props

  let options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <BlockWrapper title="Dates">
      <strong>Invoice creation</strong> : {createDate ? new Date(createDate).toLocaleString("en", options) :  "unavailable"}
      <br />
      <strong>Deadline</strong> : {deadline ? new Date(deadline).toLocaleString("en", options) : "unavailable"}
    </BlockWrapper>
  )
}