import '@testing-library/jest-dom'
import { TotalBlock } from "./TotalBlock"
import { render, screen } from '@testing-library/react'
import { invoice } from '@mock/invoice'

describe("<InvoiceLinesBlock />", () => {
  it("should render correctly", async () => {
    render(<TotalBlock total={invoice.total} tax={invoice.tax} />)

    expect(screen.getByRole("heading", { name: "Total", level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/\$109,245.00/)).toBeInTheDocument()
  })

  it("should render empty total", async () => {
    render(<TotalBlock total={null} tax={null} />)
    expect(screen.getByRole("heading", { name: "Total", level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/No price/)).toBeInTheDocument()
  })
})