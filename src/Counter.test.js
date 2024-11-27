import Counter from "./Counter";
import {render, fireEvent} from "@testing-library/react"

describe(Counter, () => {
    it("Counter value handling correctly", () => {
        const {getByTestId} = render(<Counter initialCount={0}/>)
        const countValue = Number(getByTestId("count").textContent);

        expect(countValue).toEqual(0)
    })
    it("count should increase by 1 if the increment button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)

        const incrementBtn = getByRole("button", {name: "Increment"})
        const countValue1 = Number(getByTestId("count").textContent);
        fireEvent.click(incrementBtn)
        expect(countValue1).toEqual(0)
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(1)
    })

    it("count should decrease by 1 if the decrease button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={0}/>)

        const incrementBtn = getByRole("button", {name: "Decrement"})
        const countValue1 = Number(getByTestId("count").textContent);
        fireEvent.click(incrementBtn)
        expect(countValue1).toEqual(0)
        const countValue2 = Number(getByTestId("count").textContent);
        expect(countValue2).toEqual(-1)
    })

    it("count should go back to 0 if the restart button is clicked", () => {
        const {getByTestId, getByRole} = render(<Counter initialCount={50}/>)

        const restartBtn = getByRole("button", {name: "Restart"})
        fireEvent.click(restartBtn)
        expect(Number(getByTestId("count").textContent)).toEqual(0)
    })
})