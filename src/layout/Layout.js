import React from "react"
import styled, {createGlobalStyle , ThemeProvider} from "styled-components"
import theme from "utils/theme";

const GlobalStyle = createGlobalStyle`

  body {
    font-weight: ${({theme}) => theme.fonts.weight.regular};
    display: flex;
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
  }
  
  *, *::before, *::after {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    box-sizing: border-box;
  }
  
  :root{
    font-size: 16px;
  }
  
  // Off animation if user turn off this on his system
  @media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
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

