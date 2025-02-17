import '@testing-library/jest-dom'
import { CustomerBlock } from "./CustomerBlock"
import { render, screen } from '@testing-library/react'
import { invoice } from '@mock/invoice'

describe("<CustomerBlock />", () => {
  it("should render correctly", async () => {
    render(<CustomerBlock customer={invoice.customer} />)

    expect(screen.getByRole("heading", { name: "Customer", level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Klein Lauren/)).toBeInTheDocument()
  })
})