import { fireEvent, render, screen } from "@testing-library/react";
import Search from "../Search";


// const getSpy = jest.spyOn(api, "getData")
// .mockResolvedValue(mockResponse)

  

  
// test("should check for an input element",  () => {
//     render(<Test/>);
//     const inputElement = screen.getByText(/Test/i);
//     expect(inputElement).toBeInTheDocument();
// }) 

describe("search bar", () => {
    test("should check for the search bar",  () => {
        render(<Search/>);
        const inputElement =  screen.getByPlaceholderText(/search/i);
        expect(inputElement).toBeInTheDocument();
    })    
    
    test("should check that texts are been typed on the search bar", async() => {
        render(<Search/>);
        const inputElement = screen.getByPlaceholderText(/search/i);
        fireEvent.change(inputElement, { target: { value: "Head of Arthur Jerome Eddy" } });
        expect(inputElement.value).toBe("Head of Arthur Jerome Eddy"); 
    })
})

// test("should check that the enter key is pressed on the search bar", async() => {
//     render(<Search/>);
//     const inputElement = await screen.getByPlaceholderText(/search/i);
//     fireEvent.keyDown(inputElement, {key: "Enter", code: "Enter"});
//     // expect(getSpy).toBeCalled();
//     waitFor(() => expect(get).toBeCalled()) 
// })
//
