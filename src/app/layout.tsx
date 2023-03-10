"use client"; // this is a client component
import {ThemeProvider} from 'styled-components'
import theme from "./styles/defaultGlobal"
import GlobalStyle from './styles/styles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet"/>
      </head>
        <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}  
        </ThemeProvider>
        </body>
    </html>
  )
}
