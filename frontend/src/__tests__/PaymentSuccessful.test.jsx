import { screen, render, act, waitFor } from "@testing-library/react"
import { useNavigate, MemoryRouter } from "react-router-dom"
import PaymentSuccessful from "../components/PaymentSuccessful"

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}))

describe("PaymentSuccessful component", () => {
    const mockNavigate = jest.fn()
    beforeEach(() => {
        jest.useFakeTimers()
        jest.clearAllMocks()
        useNavigate.mockReturnValue(mockNavigate)
    })

    test("renders component with correct data", () => {
        render(
            <MemoryRouter>
                <PaymentSuccessful totalPrice={50} id="123" />
            </MemoryRouter>
        )

        expect(screen.getByText("Payment Succeeded!")).toBeInTheDocument()
        expect(screen.getByText(/£50.00/i)).toBeInTheDocument()
    })

    test("counter works as expected", async () => {
        render(
            <MemoryRouter>
                <PaymentSuccessful totalPrice={50} id="123" />
            </MemoryRouter>
        );
    
        expect(await screen.findByText(/You will be redirected in 5/)).toBeInTheDocument();
    
        act(() => {
            jest.advanceTimersByTime(1000);
        });
    
        expect(await screen.findByText(/You will be redirected in 4/)).toBeInTheDocument();
    });

    test("navigate is called with correct route when counter reaches 0", async () => {
        render(
            <MemoryRouter>
                <PaymentSuccessful totalPrice={50} id="123" />
            </MemoryRouter>
        );
    
        act(() => {
            jest.advanceTimersByTime(5000);
        });
    
        expect(mockNavigate).toHaveBeenCalledWith("/account/orders/123")
    })

    test("navigates to /account/orders when no id is provided", async () => {
        render(
            <MemoryRouter>
                <PaymentSuccessful totalPrice={50} id="" />
            </MemoryRouter>
        );
    
        expect(mockNavigate).toHaveBeenCalledWith("/account/orders")
    })
    
})