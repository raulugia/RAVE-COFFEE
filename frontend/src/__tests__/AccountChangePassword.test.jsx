import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import AccountChangePassword from "../pages/AccountChangePassword";
import { useUser } from "@clerk/clerk-react"; // Import the mocked useUser

jest.mock("@clerk/clerk-react", () => ({
    useUser: jest.fn(),
}));

describe("AccountChangePassword component", () => {
    const mockedUser = {
        updatePassword: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
        useUser.mockReturnValue({
            user: mockedUser,
        });
    });

    test("component renders correctly", () => {
        render(<AccountChangePassword />);

        expect(screen.getByRole("heading", { name: "CHANGE PASSWORD" })).toBeInTheDocument();
        expect(screen.getByText("Please enter your new password below")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Current Password")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("New Password")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "CHANGE PASSWORD" })).toBeInTheDocument();
    });

    test("updates the password with correct input", async () => {
        render(<AccountChangePassword />);

        fireEvent.change(screen.getByPlaceholderText("Current Password"), {
            target: { value: "currentPassword123", name: "currentPassword" },
        });

        fireEvent.change(screen.getByPlaceholderText("New Password"), {
            target: { value: "NewPassword!123", name: "newPassword" },
        });

        fireEvent.click(screen.getByRole("button", { name: "CHANGE PASSWORD" }));

        expect(mockedUser.updatePassword).toHaveBeenCalledWith({
            currentPassword: "currentPassword123",
            newPassword: "NewPassword!123",
        });
    });

    test("displays an alert if new password is invalid", async () => {
        jest.spyOn(window, "alert").mockImplementation(() => {});

        render(<AccountChangePassword />);

        fireEvent.change(screen.getByPlaceholderText("Current Password"), {
            target: { value: "currentPassword123", name: "currentPassword" },
        });

        fireEvent.change(screen.getByPlaceholderText("New Password"), {
            target: { value: "short", name: "newPassword" },
        });

        fireEvent.click(screen.getByRole("button", { name: "CHANGE PASSWORD" }));

        expect(mockedUser.updatePassword).not.toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Please ensure the new password is valid');
    });
});
