import React from 'react'
import styled, { css } from 'styled-components'

const InputTextDiv = styled.div`
    position: relative;
    display: inline-block;
    padding: 12px 20px;

    height: 48px;
    width: 268px;

    border: ${({ theme }) => theme.colors.white} 1px solid;

    font-size: 1rem;
    // Edit inner input
    & input {
        background: transparent;
        border: transparent 0 solid;
        width: ${({ searchIcon }) => (searchIcon ? '208px' : '228px')};
        color: ${({ theme }) => theme.colors.grayMuted};
        font-size: 1em;
        font-weight: 500;
        margin-left: ${({ searchIcon }) =>
            searchIcon ? '20px' : 0}; // make space for icon
        :focus {
            outline: none;
        }
    }

    // Add search icon
    ${({ searchIcon }) =>
        searchIcon &&
        css`
            ::before {
                position: absolute;
                font-family: 'Material Icons', 'Raleway', sans-serif;
                content: 'search';
                font-size: 23px;
                color: ${({ theme }) => theme.colors.grayMuted};
                left: 10px;
                top: 11px;
            }
        `}
`

const FormatInputText = props => (
    <InputTextDiv {...props}>{props.children}</InputTextDiv>
)

/// USE EXAMPLE ///
// <FormatInputText searchIcon>
//     <input type="text" placeholder="search location" />
// </FormatInputText>

export default FormatInputText
