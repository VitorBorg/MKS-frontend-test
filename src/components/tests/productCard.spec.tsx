import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {ThemeProvider} from 'styled-components'
import theme from "../../app/styles/defaultGlobal"
import ProductCard from "../molecules/productCard/index";
import { addProduct } from "../../store/cart/index";


const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('../../store/cart/index', () => ({
  ...jest.requireActual('../../store/cart/index'),
  addProduct: () => jest.fn(),
}));

describe("ProductCard", () => {
  it("it should render correctly", () => {
    render(
      <ThemeProvider theme={theme}>
          { ProductCard({
            id: 1, 
            photo: "image.png", 
            name: "test", 
            price: "10", 
            description: "description;"
        })}
      </ThemeProvider>
    );

    expect(screen.getByText("COMPRAR")).toBeInTheDocument();
  });

  
  it("it should call addProduct when hits the button", () => {
    render(
      <ThemeProvider theme={theme}>
          { ProductCard({
            id: 1, 
            photo: "image.png", 
            name: "test", 
            price: "10", 
            description: "description;"
        })}
      </ThemeProvider>
    );

    const button = screen.getByTestId("comprarButton");
    fireEvent.click(button);

    expect(addProduct.call.length).toEqual(1);
  });
  
});