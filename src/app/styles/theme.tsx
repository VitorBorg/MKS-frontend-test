//import { Children } from 'react';
import {ThemeProvider} from 'styled-components'

import theme from "./defaultGlobal"
import GlobalStyle from './styles';

const Theme = ({children} : any) => (
  <>
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}  
  </ThemeProvider>
  </>
  );


export default Theme;