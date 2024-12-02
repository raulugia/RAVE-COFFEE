import React from 'react';
import { render, screen} from "@testing-library/react"
import OrderCard from '../components/OrderCard';
import { MemoryRouter } from 'react-router-dom';

describe("OrderCard component", () => {
    const orderData = {
        id: 1, 
        createdAt: "01/01/2024",
        orderCoffees: [
            {
                coffee: { id: 1, name: "Cappuccino", price: 10.50 },
                quantity: 2
            },
        ], 
        orderEquipments: [],
        total: 21.00
    }
    
    test("component renders order details correctly", () => {
        render(
            <MemoryRouter>
                <OrderCard {...orderData} />
            </MemoryRouter>
        )

        expect(screen.getByText("Cappuccino")).toBeInTheDocument()
        expect(screen.getByText("x 2")).toBeInTheDocument()
        expect(screen.getByText("£10.50")).toBeInTheDocument()
        expect(screen.getByText(/£21.00/i)).toBeInTheDocument()
    })

    test("component renders with correct Link", () => {
        render(
            <MemoryRouter>
                <OrderCard {...orderData} />
            </MemoryRouter>
        )

        const anchorElement = screen.getByText("Cappuccino").closest("a")
        expect(anchorElement).toHaveAttribute("href", `/account/orders/${orderData.id}`)
    
    })
})