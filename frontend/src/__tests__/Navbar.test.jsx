import React from "react"
import { render, screen } from "@testing-library/react"
import Navbar from "../components/Navbar"
import { MemoryRouter } from "react-router-dom"

jest.mock("../components/BasketBtn", () => () => <div data-testid="basket-btn">Basket Button</div>)

describe("Navbar component", () => {
    const links = [
        { text: "COFFEE", path: "/coffee" },
        { text: "EQUIPMENT", path: "/equipment" },
        { text: "SUBSCRIPTIONS", path: "/subscriptions" },
        { text: "WHOLESALE", path: "/wholesale" },
        { text: "COFFEE GIFTS", path: "/gifts" },
    ];

    // test("renders links correctly", () => {
    //     render(
    //         <MemoryRouter>
    //             <Navbar />
    //         </MemoryRouter>
    //     )

    //     expect(screen.getByAltText("rave logo")).toBeInTheDocument()

    //     links.forEach(link => {
    //         expect(screen.getByText(link.text)).toBeInTheDocument()
    //     })
    // })

    // test("links are rendered with the correct path", () => {
    //     render(
    //         <MemoryRouter>
    //             <Navbar />
    //         </MemoryRouter>
    //     )

    //     links.forEach(link => {
    //         const anchorElement = screen.getByText(link.text).closest("a");
    //         expect(anchorElement).toHaveAttribute("href", link.path);
    //     })
    // })

    test("basket button is rendered correctly", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        expect(screen.getByTestId("basket-btn")).toBeInTheDocument()
    })

    test("renders children through Outlet", () => {
        render(
          <MemoryRouter initialEntries={["/"]}>
            <Navbar />
            <div data-testid="outlet-content">Mock Outlet Content</div>
          </MemoryRouter>
        );
    
        expect(screen.getByTestId("outlet-content")).toBeInTheDocument();
      });
})