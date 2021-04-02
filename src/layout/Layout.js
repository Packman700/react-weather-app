import React from "react"
import styled, {createGlobalStyle , ThemeProvider} from "styled-components"
import theme from "utils/theme";

const GlobalStyle = createGlobalStyle`

  body {
    font-weight: 600;
    display: flex;
    padding: 0;
    margin: 0;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.primaryDark};
    overflow-x: hidden; // Disable horizontal scrollbar
    overflow: overlay; // For scroll bar // Todo Replace to more supported way
  }
  
  cite {
    font-style: normal;
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

  // SCROLLBAR
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(99, 99, 99, 0.9);
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
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
  width: 100vw;
  background-color: ${({theme}) => theme.colors.primaryDark};

  @media ${({theme}) => theme.breakPoints.verticalRotation} {
    & {
      flex-direction: column;
    }
  }
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

