import styled from 'styled-components'

const FlexRowCenter = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: ${({ justifyContent }) =>
        justifyContent ? justifyContent : 'space-between'};
    width: ${({ width }) => (width ? width : '100%')};
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-top: ${({ mt }) => (mt ? mt : 0)};
`

export default FlexRowCenter
