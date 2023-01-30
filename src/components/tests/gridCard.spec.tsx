import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import {ThemeProvider} from 'styled-components'
import theme from "../../app/styles/defaultGlobal"
import GridCard from "../organisms/gridCards";
import { productAPI } from "@/types/types";

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
  }));

describe("gridCard", () => {
    it("it should list correctly", () => {
        const nameProduct = "name";

        render(
            <ThemeProvider theme={theme}>
                <GridCard Cards={[
                    {
                        brand: "brand",
                        createdAt: "2023-01-23T18:17:04.771Z",
                        description: "Ipsum",
                        id: "0",
                        name: nameProduct,
                        photo: "url",
                        price: "R$100",
                        updateAt: "2023-01-23T18:17:04.771Z"
                    }
                ]}/>
            </ThemeProvider>
          );

          expect(screen.getByText(nameProduct)).toBeInTheDocument();
    })
})