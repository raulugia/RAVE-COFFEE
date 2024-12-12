import Pagination from "../components/Pagination"
import { render, screen, fireEvent, act, waitFor} from "@testing-library/react"
import { useState } from "react"

describe("Pagination", () => {
    const mockedSetPage = jest.fn()

    test("renders pages correctly when total number of pages < 10", () => {
        render(<Pagination totalItems={10} itemsPerPage={5} setPage={jest.fn()} page={1}/>)

        expect(screen.getByText("1")).toBeInTheDocument()
        expect(screen.getByText("2")).toBeInTheDocument()
        expect(screen.queryByText("3")).not.toBeInTheDocument()
    })

    test("renders pages correctly when total number of pages is > 10 and current page is 1", () => {
        render(<Pagination totalItems={50} itemsPerPage={2} setPage={jest.fn()} page={1}/>)

        expect(screen.getByText("1")).toBeInTheDocument()
        expect(screen.getByText("10")).toBeInTheDocument()
        expect(screen.queryByText("11")).not.toBeInTheDocument()
        expect(screen.getByText("...")).toBeInTheDocument()
    })

    test("current page has the right styles", () => {
        render(<Pagination totalItems={50} itemsPerPage={2} setPage={jest.fn()} page={1}/>)

        expect(screen.getByText("1")).toHaveClass("bg-gray-300")
        expect(screen.getByText("2")).toHaveClass("bg-white")
    })

    test("method to update page state is called when new page is selected", async() => {
        render(<Pagination totalItems={50} itemsPerPage={2} setPage={mockedSetPage} page={1}/>)

        expect(screen.getByText("2")).toHaveClass("bg-white")

        await act(async() => {
            fireEvent.click(screen.getByRole("button", {name: "2"}))
        })
        expect(mockedSetPage).toHaveBeenCalled()
        expect(mockedSetPage).toHaveBeenCalledWith(2)
    })
    
    test("first page changes correctly based on selected page", () => {
        const StateWrapper = () => {
            const [currentPage, setCurrentPage] = useState(1)
        
            return <Pagination totalItems={50} itemsPerPage={2} setPage={setCurrentPage} page={currentPage} />;
        };

        render(<StateWrapper />)

        fireEvent.click(screen.getByRole("button", { name: "10" }))

        const ellipses = screen.getAllByText("...")
        expect(ellipses).toHaveLength(2)

        const firstEllipsis = ellipses[0]
        const fiveButton = screen.getByText("5")
        expect(firstEllipsis.nextSibling).toEqual(fiveButton)
    })

    test("last page changes correctly based on selected page", () => {
        const StateWrapper = () => {
            const [currentPage, setCurrentPage] = useState(1)
        
            return <Pagination totalItems={50} itemsPerPage={2} setPage={setCurrentPage} page={currentPage} />;
        };

        render(<StateWrapper />)

        fireEvent.click(screen.getByRole("button", { name: "10" }))

        const ellipses = screen.getAllByText("...")
        expect(ellipses).toHaveLength(2)

        const secondEllipsis = ellipses[1]
        const button = screen.getByText("14")
        expect(secondEllipsis.previousSibling).toEqual(button)
    })
    
})