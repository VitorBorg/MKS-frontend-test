import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  
* {
  margin: 0px;
  padding: 0;
  font-family: ${(props:any) => props.theme.fonts.main};

  h1 {
    color: ${(props:any) => props.theme.colors.letterLight};
    font-size:  ${(props:any) => props.theme.fontSize.Logo};
    font-weight: 600;
    line-height: 17px;

    @media (max-width: ${(props:any) => props.theme.screen.md}) {
      font-size: ${(props:any) => props.theme.fontSize.displaySm};
    }
    @media (max-width: ${(props:any) => props.theme.screen.xl}) {
      font-size: ${(props:any) => props.theme.fontSize.displayMd};
    }
  }

  h2 {
    color: ${(props:any) => props.theme.colors.letterLight};
    font-size:  ${(props:any) => props.theme.fontSize.SubLogo};
    font-weight: 300;
    line-height: 0px;
  }

  h3 {
    font-size:  ${(props:any) => props.theme.fontSize.productName};
    line-height: 19px;
    font-weight: 400;
  }
  h5 {
    font-size:  ${(props:any) => props.theme.fontSize.productPrice};
    line-height: 15px;
    font-weight: 700;
  }

}

body {
  width: 100vw;
  color: ${(props:any) => props.theme.colors.letter};
  overflow-x: hidden;
  background-color: ${(props:any) => props.theme.colors.background};
  font-size:  ${(props:any) => props.theme.fontSize.normal};
}

  span {
    font-family: ${(props:any) => props.theme.fonts.main};
  }
::-webkit-scrollbar{
    width: 3px;
    
  }
  ::-webkit-scrollbar-track{
    background: none;
  }
  ::-webkit-scrollbar-thumb{
    background-image: linear-gradient(${(props) =>
      props.theme.colors.Purple}, ${(props:any) => props.theme.colors.dark});
    border-radius: 25px;
  }
`

export default GlobalStyle;