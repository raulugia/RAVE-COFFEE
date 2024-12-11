import ReviewsModal from "../components/ReviewsModal";
import { screen, fireEvent, render, act } from "@testing-library/react"
import axiosInstance from "../utils/axiosInstance";

jest.mock("../utils/axiosInstance")

Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
    configurable: true,
    value: jest.fn(),
});

describe("ReviewsModal component", () => {
    const props = {
        itemId: 1,
        type: "coffee",
        averageRating: 4,
        itemName: "Coffee 1",
        setDisplayReviews: jest.fn()
    }

    const returnedData = [
        {
            user: {
                name: "John",
                surname: "Doe"
            },
            rating: 4,
            review: "This coffee is great!",
            createdAt: "01/01/2024"
        },
    ]

    beforeEach(() => {
        axiosInstance.get.mockResolvedValueOnce({
            data: {
                reviews: returnedData,
                totalReviews: 1
            }
        })
    })

    test("sends get request correctly", async() => {
        render(<ReviewsModal {...props} />)
        
        expect(axiosInstance.get).toHaveBeenCalledWith("/item/1/reviews", {
            params: { type: "coffee", page: 1 },
        })
    })

    test("renders returned data correctly", async () => {
        render(<ReviewsModal {...props} />);
    
        expect(await screen.findByText("John Doe")).toBeInTheDocument()
        expect(await screen.findByText("4")).toBeInTheDocument()
        expect(await screen.findByText("This coffee is great!")).toBeInTheDocument()
        expect(await screen.findByText("Reviewed on 01/01/2024")).toBeInTheDocument()
    })

    test("closes modal and restores overflow", async () => {
        render(<ReviewsModal {...props} />)
      
        await screen.findByText("John Doe")

        fireEvent.click(screen.getByTestId("close-button"))
      
        expect(props.setDisplayReviews).toHaveBeenCalledWith(false)
        expect(document.body.style.overflow).toBe("auto")
      })

})