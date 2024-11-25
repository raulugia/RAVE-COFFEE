import React from "react"
import { render, fireEvent } from "@testing-library/react"
import MainBtn from "../components/MainBtn"

describe("MainBtn component", () => {
    test("renders button with correct text", () => {
        const { getByRole } = render(
            <MainBtn text="Click Me" />
        )

        const btn = getByRole("button", { name: "Click Me" } )
        expect(btn).toBeInTheDocument()
    })

    test("button is disabled when prop is true", () => {
        const { getByRole } = render(
            <MainBtn text="Click Me" disabled={true} />
        )

        const btn = getByRole("button", { name: "Click Me" } )
        expect(btn).toBeDisabled()
    })

    test("button is enabled by default", () => {
        const { getByRole } = render(
            <MainBtn text="Click Me" />
        )

        const btn = getByRole("button", { name: "Click Me" } )
        expect(btn).toBeEnabled()
    })

    test("correct method is called when button is clicked", () => {
        const mockMethod = jest.fn()

        const { getByRole } = render(
            <MainBtn text="Click Me" method={mockMethod} />
        )

        const btn = getByRole("button", { name: "Click Me" })
        fireEvent.click(btn)

        expect(mockMethod).toHaveBeenCalled()
        expect(mockMethod).toHaveBeenCalledTimes(1)
    })
})