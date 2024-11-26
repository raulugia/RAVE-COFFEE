import React from 'react';
import EquipmentCard from "../components/EquipmentCard";
import { useBasket } from '../context/BasketContext'
import { screen, render, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';

jest.mock('../context/BasketContext')

describe('EquipmentCard component', () => {
    const mockedDispatch = jest.fn()
    const itemData = {
        id: 1,
        name: "Item 1",
        price: 2.50,
        smallpictureUrl: "https://example.com/cappuccino.jpg",
    }

    beforeEach(() => {
        jest.clearAllMocks()
        useBasket.mockReturnValue({ dispatch: mockedDispatch })
    })

    test("renders data correctly", () => {
        render(
            <MemoryRouter>
                <EquipmentCard {...itemData} />
            </MemoryRouter>
        )

        expect(screen.getByText("Item 1")).toBeInTheDocument()
        expect(screen.getByText("From £2.50")).toBeInTheDocument()
        expect(screen.getByAltText("Item 1")).toHaveAttribute("src", itemData.smallpictureUrl)
    })

    test("quickadd button works as expected", () => {
        render(
            <MemoryRouter>
                <EquipmentCard {...itemData} />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByRole("button", { name: "QUICK ADD +"}))
        expect(mockedDispatch).toHaveBeenCalledWith({type: "ADD", payload: { id: itemData.id, name: itemData.name, price: itemData.price, smallpictureUrl: itemData.smallpictureUrl, quantity: 1 }  })
        
    })
})