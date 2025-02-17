import '@testing-library/jest-dom'
import { StatusBlock } from "./StatusBlock"
import { render, screen } from '@testing-library/react'
import { invoice } from '@mock/invoice'

describe("<InvoiceLinesBlock />", () => {
  it("should render correctly negative status", async () => {
    render(<StatusBlock finalized={invoice.finalized} deadline={invoice.deadline} paid={invoice.paid} />)

    expect(screen.getByRole("heading", { name: "Status", level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Paid: no/)).toBeInTheDocument()
    expect(screen.getByText(/Finalized: no/)).toBeInTheDocument()
    expect(screen.getByText(/Late: yes/)).toBeInTheDocument()
  })

  it("should render positive status", async () => {
    const date = new Date()
    date.setDate(date.getDate() + 1)
    const positiveInvoice = {
      ...invoice,
      finalized: true,
      deadline: date.toDateString(),
      paid: true,
    }
    render(<StatusBlock finalized={positiveInvoice.finalized} deadline={positiveInvoice.deadline} paid={positiveInvoice.paid} />)
    expect(screen.getByRole("heading", { name: "Status", level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Paid: yes/)).toBeInTheDocument()
    expect(screen.getByText(/Finalized: yes/)).toBeInTheDocument()
    expect(screen.getByText(/Late: no/)).toBeInTheDocument()
  })
})