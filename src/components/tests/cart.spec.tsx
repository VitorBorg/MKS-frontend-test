import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import store from "../../store/store";
import React from "react";
import { Provider } from 'react-redux';
import * as redux from 'react-redux'
import {ThemeProvider} from 'styled-components'
import theme from "../../app/styles/defaultGlobal"

import { addProduct } from "../../store/cart/index";
import Cart from "../organisms/cart";


const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('../../store/cart/index', () => ({
  ...jest.requireActual('../../store/cart/index'),
  addProduct: () => jest.fn(),
  removeProduct: () => jest.fn(),
  increaseQuantityProduct: () => jest.fn(),
  decreaseQuantityProduct: () => jest.fn(),
  updateData: () => jest.fn()
}));

const realUseState = React.useState
const stubInitialState =  ['stub data']

const spyProductsCart = jest.spyOn(redux, 'useSelector')
const spyPriceCart = jest.spyOn(redux, 'useSelector')

spyProductsCart.mockReturnValue([
    {
        id: "0",
        photo: "photo",
        name: "name",
        price: "R$1",
        quantity: "1",
    }
    ])

spyPriceCart.mockReturnValue("R$ 0")



describe("Cart", () => {
  it("it should render correctly", () => {
    render(
      <ThemeProvider theme={theme}>
            <Cart />
      </ThemeProvider>
    );

    expect(screen.getByTestId("Carrinho")).toBeInTheDocument()
  });

  /*
  it("it should call setMenu when hits the button", () => {
    const setMenu = jest.fn();

    const spyMenu: any = (useState: any) => [useState, setMenu];
    jest.spyOn(React, 'useState').mockImplementation(spyMenu);


    render(
        <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Cart />
            </Provider>
        </ThemeProvider>
      );


    const button = screen.getByTestId("Carrinho");
    fireEvent.click(button);

    expect(setMenu).toHaveBeenCalledWith("true");
  });

  */
});