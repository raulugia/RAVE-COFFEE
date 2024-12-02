import React from "react";
import ItemQuantityCard from "../components/ItemQuantityCard";
import { render, fireEvent, screen, act } from "@testing-library/react"
import { useBasket } from "../context/BasketContext";

jest.mock("../context/BasketContext");

describe("ItemQuantityCard component", () => {
    const item = {
        id: 1,
        name: "Cappuccino",
        price: 2.50,
        smallpictureUrl: "https://example.com/image.jpg",
        type: "coffee",
        quantity: 1,
    }
    const mockDispatch = jest.fn()

    beforeEach(() => {
        jest.clearAllMocks()
        useBasket.mockReturnValue({
            dispatch: mockDispatch,
          });
    })

    test("renders correct initial amount", () => {
        render(
            <ItemQuantityCard {...item} />
        )

        expect(screen.getByText("1")).toBeInTheDocument()
    })

    test("amount increases when + is pressed", async() => {
        render(
            <ItemQuantityCard {...item} />
        )

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "+"}))
        })

        expect(screen.getByText("2")).toBeInTheDocument()
    })

    test("amount does not decrease when - is pressed and amount is 1", async() => {
        render(
            <ItemQuantityCard {...item} />
        )

        await act(async () => {
            fireEvent.click(screen.getByRole("button", {name: "-"}))
        })

        expect(screen.getByText("1")).toBeInTheDocument()
    })

    test("amount decreases when - is pressed and amount is > 1", async() => {
        render(
            <ItemQuantityCard {...item} />
        )

        await act(async () => {
            //increase amount to 3
            fireEvent.click(screen.getByRole("button", {name: "+"}))
            fireEvent.click(screen.getByRole("button", {name: "+"}))
        })

        await act(async () => {
            //press - button
            fireEvent.click(screen.getByRole("button", {name: "-"}))
        })

        expect(screen.getByText("2")).toBeInTheDocument()
    })

    test("submits amount correctly", () => {
        render(
            <ItemQuantityCard {...item} />
        )


        fireEvent.click(screen.getByRole("button", {name: "ADD TO BASKET"}))
        

        expect(mockDispatch).toHaveBeenCalledWith({type: "ADD", payload: item})
    })
    
})