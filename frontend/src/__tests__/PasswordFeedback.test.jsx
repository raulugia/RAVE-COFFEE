import React from 'react';
import { render, screen } from "@testing-library/react"
import PasswordFeedback from '../components/PasswordFeedback';

describe("PasswordFeedback component", () => {
    test("renders feedback for long password", () => {
        const errors = { password: ["long"] };
        render(<PasswordFeedback errors={errors} isPassword={true} />);

        expect(screen.getByText("Be at least 8 characters long")).toBeInTheDocument();
    });

    test("renders feedback for missing lowercase letter", () => {
        const errors = { password: ["lowercase"] };
        render(<PasswordFeedback errors={errors} isPassword={true} />);

        expect(screen.getByText("Have at least 1 lowercase letter")).toBeInTheDocument();
    });

    test("renders feedback for missing uppercase letter", () => {
        const errors = { password: ["uppercase"] };
        render(<PasswordFeedback errors={errors} isPassword={true} />);

        expect(screen.getByText("Have at least 1 uppercase letter")).toBeInTheDocument();
    });

    test("renders feedback with correct style properties when there are errors", () => {
        const errors = { password: ["long"] };
        render(<PasswordFeedback errors={errors} isPassword={true} />)

        expect(screen.getByText("Be at least 8 characters long")).toHaveClass("text-red-600")
    })

    test("renders feedback with correct style properties when there are no errors", () => {
        const errors = { password: [] };
        render(<PasswordFeedback errors={errors} isPassword={true} />)

        expect(screen.getByText("Be at least 8 characters long")).toHaveClass("text-green-600")
    })

    test("renders feedback with correct style properties when password has not been entered yet", () => {
        const errors = { password: [] };
        render(<PasswordFeedback errors={errors} isPassword={false} />)

        expect(screen.getByText("Be at least 8 characters long")).toHaveClass("text-gray-400")
    })
})