import {screen, render } from "@testing-library/react"
import ReviewCard from "../components/ReviewCard"
import StarRating from "../components/StarRating";

jest.mock("../components/StarRating", () => jest.fn(() => <div data-testid="star-rating"></div>));

describe("ReviewCard component", () => {
    const review = {
        name: "John",
        surname: "Doe",
        createdAt: "01/01/2024",
        review: "Love this coffee!",
        rating: 4.0,
    }

    test("renders data correctly", () => {
        render(<ReviewCard {...review} />)

        expect(screen.getByText("John Doe")).toBeInTheDocument()
        expect(screen.getByText("Love this coffee!")).toBeInTheDocument()
        expect(screen.getByText("Reviewed on 01/01/2024")).toBeInTheDocument()
    })

    test("passes the correct rating prop to StarRating", () => {
        render(<ReviewCard {...review} />);
      
        expect(StarRating).toHaveBeenCalledWith(
          expect.objectContaining({ rating: 4.0 }),
          expect.anything()
        )
      })
      
})