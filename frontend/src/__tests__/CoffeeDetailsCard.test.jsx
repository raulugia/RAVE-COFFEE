import React from "react";
import CoffeeDetailsCard from "../components/CoffeeDetailsCard";
import { render, fireEvent, screen, act } from "@testing-library/react"

describe("CoffeeDetailsCard component", () => {
    test("renders data correctly", () => {
        render(
            <CoffeeDetailsCard taste={"Caramel"} roast={3}/>
        )

        expect(screen.getByText("Caramel")).toBeInTheDocument()

        const svgs = screen.getAllByTestId("bean");
        expect(svgs).toHaveLength(5)
    })

    test("renders beans style correctly based on roast", () => {
        render(
            <CoffeeDetailsCard taste={"Caramel"} roast={3}/>
        )

        const svgs = screen.getAllByTestId("bean");
        expect(svgs).toHaveLength(5)

        //ensure that 3 of the beans are brown since roast is 3
        svgs.forEach((svg, index) => {
            if(index < 3){
                expect(svg).toHaveAttribute("fill", "#7C3F2D")
            }else{
                expect(svg).toHaveAttribute("fill", "#FFFFFF")
            }
        })
    })
})