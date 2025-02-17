import '@testing-library/jest-dom'
import { BlockWrapper } from "./BlockWrapper"
import { render, screen } from '@testing-library/react'

describe("<BlockWrapper />", () => {
  it("should render correctly", async () => {
    render(<BlockWrapper title="title" children="children" />)

    expect(screen.getByRole("heading", { name: "title", level: 2 })).toBeInTheDocument()
  })
})