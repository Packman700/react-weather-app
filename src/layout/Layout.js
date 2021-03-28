import React from "react"
import styled, {createGlobalStyle , ThemeProvider} from "styled-components"
import theme from "utils/theme";

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Raleway', sans-serif;
    font-weight: ${({theme}) => theme.fonts.weight.regular};
    display: flex;
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
  }
  
  *, *::before, *::after {
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
  }
  
`

const StyleWrapper = styled.div`
  display: flex;
  
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${({theme}) => theme.colors.primaryDark};
`

const Layout = ({children}) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle/>
            <StyleWrapper>
                {children}
            </StyleWrapper>
        </>
    </ThemeProvider>
)

export default Layout

