import React, { useState } from "react"
import AddressForm from "../components/AddressForm"
import { render, fireEvent, screen, act } from "@testing-library/react"
import axiosInstance from "../utils/axiosInstance"

jest.mock("../utils/axiosInstance");

describe("Input component", () => {
    let setLoading, setAddress;

    beforeEach(() => {
        setLoading = jest.fn();
        setAddress = jest.fn();
    });

    test("renders all input fields", () => {
        const { getByPlaceholderText } = render(
            <AddressForm setLoading={setLoading} setAddress={setAddress} />
        );

        expect(getByPlaceholderText("123 Main St")).toBeInTheDocument();
        expect(getByPlaceholderText("2nd floor (optional)")).toBeInTheDocument();
        expect(getByPlaceholderText("London")).toBeInTheDocument();
        expect(getByPlaceholderText("E10 5AN")).toBeInTheDocument();
        expect(getByPlaceholderText("Greater London")).toBeInTheDocument();
        expect(getByPlaceholderText("United Kingdom")).toBeInTheDocument();
    });

    test("submission does not happen if any mandatory fields are empty", () => {
        jest.spyOn(window, "alert").mockImplementation(() => {});
        jest.spyOn(axiosInstance, "post").mockImplementation(() => {});

        render(<AddressForm setLoading={setLoading} setAddress={setAddress} />);

        fireEvent.change(screen.getByPlaceholderText("123 Main St"), { target: { value: "" } });
        fireEvent.change(screen.getByPlaceholderText("London"), { target: { value: "London" } });
        fireEvent.change(screen.getByPlaceholderText("E10 5AN"), { target: { value: "E10 5AN" } });
        fireEvent.change(screen.getByPlaceholderText("Greater London"), { target: { value: "Greater London" } });

        fireEvent.click(screen.getByRole("button", { name: /save address/i }));

        expect(setLoading).not.toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith('Please ensure there are no errors and all fields are filled before submitting');
        expect(axiosInstance.post).not.toHaveBeenCalled();
    })

    test("shows alert on submission failure", async () => {
        jest.spyOn(window, "alert").mockImplementation(() => {});
        axiosInstance.post.mockRejectedValue(new Error("Submission failed"));
    
        render(<AddressForm setLoading={setLoading} setAddress={setAddress} />);
    
        fireEvent.change(screen.getByPlaceholderText("123 Main St"), { target: { value: "123 Main St" } });
        fireEvent.change(screen.getByPlaceholderText("London"), { target: { value: "London" } });
        fireEvent.change(screen.getByPlaceholderText("E10 5AN"), { target: { value: "E10 5AN" } });
        fireEvent.change(screen.getByPlaceholderText("Greater London"), { target: { value: "Greater London" } });
    
        const saveButton = screen.getByRole("button", { name: /save address/i });
    
        await act(async () => {
          fireEvent.click(saveButton);
        });
    
        expect(setLoading).toHaveBeenCalledWith(true);
        expect(window.alert).toHaveBeenCalledWith("An error occurred while saving the address. Please try again.");
        expect(setLoading).toHaveBeenCalledWith(false);
      });

      test("shows errors when invalid input is provided", () => {
        render(<AddressForm setLoading={setLoading} setAddress={setAddress} />);

        fireEvent.focus(screen.getByPlaceholderText("123 Main St"));
        fireEvent.blur(screen.getByPlaceholderText("123 Main St"));
        expect(screen.getByText("This field cannot be empty"))

      })
})