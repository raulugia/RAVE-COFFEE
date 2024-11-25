import React from "react"
import Input from "../components/Input"
import { render, fireEvent } from "@testing-library/react"

describe("Input component", () => {
    test("renders input field with correct placeholder", () => {
        const { getByPlaceholderText} = render(
            <Input type="email" placeholder="Email" />
        )

        const input = getByPlaceholderText("Email")
        expect(input).toBeInTheDocument()
    })

    test("input is rendered with the correct type", () => {
        const { getByPlaceholderText } = render(
            <Input type="email" placeholder="Email" />
        )

        const input = getByPlaceholderText("Email")
        expect(input).toHaveAttribute("type", "email")
    })
})