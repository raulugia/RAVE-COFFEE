import React from 'react';
import { render, screen} from "@testing-library/react"
import OrderCard from '../components/OrderCard';

describe("OrderCard component", () => {
    const orderData = {
        id: 1, 
        createdAt: "01/01/2024",
        orderCoffees: [
            {
                coffee: { id: 1, name: "Cappuccino", price: 2.50 },
                quantity: 2
            },
        ], 
        orderEquipments: [],
        total: 22.20
    }
    
    test("component renders order details correctly", () => {
        render(<OrderCard {...orderData} />)

        expect(screen.getByText("Cappuccino")).toBeInTheDocument()
    })
})