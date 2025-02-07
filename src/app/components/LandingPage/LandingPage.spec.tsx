import '@testing-library/jest-dom'
import { LandingPage } from "./LandingPage"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

describe("LandingPage component", () => {
  it("should render", () => {
    render(
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    )
    expect(
      screen.getByRole("heading", { name: /Welcome to Invoices Manager/, level: 1 })
    ).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /Let's manage some invoices/ })).toBeInTheDocument()
  })
})
