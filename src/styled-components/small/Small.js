import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeEffects = css`
    ${({ fade }) =>
        fade &&
        css`
            opacity: 0;
            animation: ${fadeIn} 1000ms ease-in 500ms forwards;
        `}

    ${({ fastFade }) =>
        fastFade &&
        css`
            opacity: 0;
            animation: ${fadeIn} 600ms ease-in 0ms forwards;
        `}
`

const Small = styled.small`
    display: ${({ hide }) => hide && 'none'};

    ${fadeEffects};

    color: ${({ theme }) => theme.colors.grayMuted};
    font-size: 16px;
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-top: ${({ mt }) => (mt ? mt : 0)};
`

export default Small
