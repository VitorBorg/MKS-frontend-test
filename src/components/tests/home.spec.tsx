import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {ThemeProvider} from 'styled-components'
import theme from "../../app/styles/defaultGlobal"
import ProductCard from "../molecules/productCard/index";
import { addProduct } from "../../store/cart/index";
import Homepage from "../templates/home.tsx";


const mockAddProduct = jest.fn();
const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

jest.mock('../../store/cart/index', () => {
  addProduct: () => mockAddProduct
});

describe("Homepage", () => {
  it("it should render correctly", () => {
    render(
      <ThemeProvider theme={theme}>
          <Homepage />
      </ThemeProvider>
    );

    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });
});