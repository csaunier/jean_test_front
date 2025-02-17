import '@testing-library/jest-dom'
import { DatesBlock } from "./DatesBlock"
import { render, screen } from '@testing-library/react'
import { invoice } from '@mock/invoice'

describe("<DatesBlock />", () => {
  it("should render correctly", async () => {
    render(<DatesBlock createDate={invoice.date} deadline={invoice.deadline} />)

    expect(screen.getByRole("heading", { name: "Dates", level: 2 })).toBeInTheDocument()
    expect(screen.getByText(/Friday, November 22, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/Wednesday, December 18, 2024/)).toBeInTheDocument()
  })
})