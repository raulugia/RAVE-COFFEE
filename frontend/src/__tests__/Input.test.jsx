import React from "react"
import Input from "../components/Input"
import { render, fireEvent } from "@testing-library/react"

describe("Input component", () => {
    test("renders input field with correct placeholder", () => {
        const { getByPlaceholderText } = render(
            <Input type="email" placeholder="Email" />
        )

        const input = getByPlaceholderText("Email")
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute("placeholder", "Email")
    })

    test("input is rendered with the correct type and name", () => {
        const { getByPlaceholderText } = render(
            <Input type="email" name="email" placeholder="Email" />
        )

        const input = getByPlaceholderText("Email")
        expect(input).toHaveAttribute("type", "email")
        expect(input).toHaveAttribute("name", "email")
    })

    test("input is renders correctly with extra props", () => {
        const { getByPlaceholderText } = render(
            <Input type="email" placeholder="Email" disabled />
        )

        const input = getByPlaceholderText("Email")
        expect(input).toBeDisabled()
    })

    test("input is rendered with one error", () => {
        const { getByPlaceholderText, getByText } = render(
                <Input type="email" placeholder="Email" errors={['Invalid email address']} />
            )
        
        const errorMessage = getByText("Invalid email address")
        expect(errorMessage).toBeInTheDocument()
    })

    test("input is rendered with multiple errors", () => {
        const { container } = render(
                <Input type="text" placeholder="Name" errors={['Special characters not allowed', 'Name is too long']} />
            )
        
        const errors = container.querySelectorAll('p');
        expect(errors[0]).toHaveTextContent('Special characters not allowed');
        expect(errors[1]).toHaveTextContent('Name is too long');
    })

    test("input is rendered with error colors when errors exist", () => {
        const { getByPlaceholderText } = render(
            <Input type="email" placeholder="Email" errors={['Invalid email address']} />
        )

        const input = getByPlaceholderText("Email")
        expect(input).toHaveClass('border-red-600')
    })

    test("calls onChange when input changes", () => {
        const handleChange = jest.fn()

        const { getByPlaceholderText } = render(
            <Input type="email" placeholder="Email" onChange={handleChange} />
        )

        const input = getByPlaceholderText("Email")
        fireEvent.change(input, { target: { value: 'test@example.com' } })

        expect(handleChange).toHaveBeenCalled();
    })

    test("calls onBlur when input loses focus", () => {
        const handleBlur = jest.fn()

        const { getByPlaceholderText } = render(
            <Input type="email" placeholder="Email" onBlur={handleBlur} />
        )

        const input = getByPlaceholderText("Email")
        fireEvent.blur(input)

        expect(handleBlur).toHaveBeenCalled();
    })
})