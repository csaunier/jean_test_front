import '@testing-library/jest-dom'
import { InvoiceLinesBlock } from "./InvoiceLinesBlock"
import { render, screen } from '@testing-library/react'
import { invoice } from '@mock/invoice'

describe("<InvoiceLinesBlock />", () => {
  it("should render correctly", async () => {
    render(<InvoiceLinesBlock invoices_lines={invoice.invoice_lines} />)

    expect(screen.getByRole("heading", { name: "Products", level: 2 })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  it("should render empty lines", async () => {
    render(<InvoiceLinesBlock invoices_lines={[]} />)
    expect(screen.getByRole("heading", { name: "Products", level: 2 })).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
    expect(screen.getByText(/No products/)).toBeInTheDocument()
  })
})