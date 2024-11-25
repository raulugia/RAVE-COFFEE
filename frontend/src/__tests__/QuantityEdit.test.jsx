import React from 'react'
import { useBasket } from '../context/BasketContext'
import { render, screen, fireEvent } from "@testing-library/react";
import QuantityEdit from '../components/QuantityEdit';

jest.mock("../context/BasketContext");

describe("QuantityEdit component", () => {
    const mockedDispatch = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks();
        useBasket.mockReturnValue({ dispatch: mockedDispatch })
    })

    test("displays the correct quantity", () => {
        render(<QuantityEdit id={1} quantity={2} />)

        expect(screen.getByText("2")).toBeInTheDocument()
    })

    test("dispatches correct action when + button is clicked", () => {
        render(<QuantityEdit id={1} quantity={3} />);


        fireEvent.click(screen.getByRole("button", { name: "+" }));
        expect(mockedDispatch).toHaveBeenCalledWith({
            type: "ADD",
            payload: { id: 1, quantity: 1 },
        });
    });

    test("dispatches correct action when the - button is clicked", () => {
        render(<QuantityEdit id={1} quantity={3} />);

        fireEvent.click(screen.getByRole("button", { name: "-" }));
        expect(mockedDispatch).toHaveBeenCalledWith({
            type: "REMOVE ONE",
            payload: { id: 1},
        });
    });

    test("does not dispatch action when the - button is clicked and quantity is 1", () => {
        render(<QuantityEdit id={1} quantity={1} />);

        fireEvent.click(screen.getByRole("button", { name: "-" }));
        expect(mockedDispatch).not.toHaveBeenCalled()
    })
})