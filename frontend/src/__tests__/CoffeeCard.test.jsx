import React from "react";
import CoffeeCard from "../components/CoffeeCard";
import { useBasket } from '../context/BasketContext'
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

jest.mock('../context/BasketContext')

describe("CoffeeCard component", () => {
    const mockDispatch = jest.fn()
    const itemData = {
        id: 1,
        name: "Cappuccino",
        price: 2.50,
        roast: 4,
        taste: "sweet",
        smallpictureUrl: "https://example.com/cappuccino.jpg",
    }

    beforeEach(() => {
        jest.clearAllMocks();
        useBasket.mockReturnValue({ dispatch: mockDispatch })
    })

    test("renders data correctly", () => {
        render(
            <MemoryRouter>
                <CoffeeCard {...itemData} />
            </MemoryRouter>
        );

        expect(screen.getByText("Cappuccino")).toBeInTheDocument();
        expect(screen.getByText("From £2.50")).toBeInTheDocument();
        expect(screen.getByText("sweet")).toBeInTheDocument();
        expect(screen.getByAltText("Cappuccino")).toHaveAttribute("src", itemData.smallpictureUrl);
    });

    test("quickadd button works as expected", () => {
        render(
            <MemoryRouter>
                <CoffeeCard {...itemData} />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole("button", {name: "QUICK ADD +"}))

        expect(mockDispatch).toHaveBeenCalledWith({ type: "ADD", payload: { id: itemData.id, name: itemData.name, price: itemData.price, smallpictureUrl: itemData.smallpictureUrl, quantity: 1 }  })
    })
})