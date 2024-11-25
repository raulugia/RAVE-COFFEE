import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BasketModal from "../components/BasketModal";
import { useBasket } from "../context/BasketContext";
import { useNavigate } from "react-router-dom";

jest.mock("../context/BasketContext");
jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
  }));

describe("BasketModal component", () => {
    let mockNavigate;

    beforeEach(() => {
        mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate);
    
        useBasket.mockReturnValue({
          basket: [],
          totalPrice: 0,
          itemsQuantity: 0,
          setDisplayModal: jest.fn(),
        });
      });
    
      test("renders correct messages when basket is empty", () => {
        render(<BasketModal />)

        expect(screen.getByText("Your cart is empty!")).toBeInTheDocument()
        expect(screen.getByText("Add your favorite items to your cart.")).toBeInTheDocument()
        expect(screen.getByRole("button", { name: /shop now!/i })).toBeInTheDocument()
      })

      test("displays basket items when basket is not empty", () => {
        useBasket.mockReturnValue({
            basket: [
              { id: 1, name: "Item 1", price: 10, quantity: 2 },
              { id: 2, name: "Item 2", price: 20, quantity: 1 },
            ],
            totalPrice: 40,
            itemsQuantity: 3,
            setDisplayModal: jest.fn(),
        });

        render(<BasketModal />)

        expect(screen.getByText("Item 1")).toBeInTheDocument()
        expect(screen.getByText("Item 2")).toBeInTheDocument()
        //individual item prices
        expect(screen.getByText("£10")).toBeInTheDocument()
        expect(screen.getByText("£20")).toBeInTheDocument()

        expect(screen.getByText(/subtotal/i)).toBeInTheDocument();
        //subtotal
        expect(screen.getByText("£40")).toBeInTheDocument();
      })

      test("displays free shipping message when subtotal is > £25", () => {
        useBasket.mockReturnValue({
            basket: [
              { id: 1, name: "Item 1", price: 10, quantity: 2 },
              { id: 2, name: "Item 2", price: 20, quantity: 1 },
            ],
            totalPrice: 40,
            itemsQuantity: 3,
            setDisplayModal: jest.fn(),
        });

        render(<BasketModal />)

        expect(screen.getByText("🔥 You've unlocked FREE SHIPPING! 🔥"))
      })

      test("displays correct amount needed for free shipping when subtotal < £25", () => {
        useBasket.mockReturnValue({
            basket: [
              { id: 1, name: "Item 1", price: 10, quantity: 1 },
            ],
            totalPrice: 10,
            itemsQuantity: 1,
            setDisplayModal: jest.fn(),
        });

        render(<BasketModal />)

        expect(screen.getByText("You are £15.00 away from FREE SHIPPING 📦"))
      })

      test("closes the modal when close button is clicked", () => {
        const mockSetDisplayModal = jest.fn();
        useBasket.mockReturnValue({
          basket: [],
          totalPrice: 0,
          itemsQuantity: 0,
          setDisplayModal: mockSetDisplayModal,
        });
    
        render(<BasketModal />);
    
        fireEvent.click(screen.getByTestId("close-button"));
    
        expect(mockSetDisplayModal).toHaveBeenCalledWith({ isVisible: false, contentType: null });
      });
})