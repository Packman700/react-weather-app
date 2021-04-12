import styled from 'styled-components'

const FlexColumnCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: ${({ width }) => (width ? width : 'auto')};
    margin-bottom: ${({ mb }) => (mb ? mb : 0)};
    margin-top: ${({ mt }) => (mt ? mt : 0)};
    padding-left: ${({ pl }) => (pl ? pl : 0)};
    padding-right: ${({ pr }) => (pr ? pr : 0)};
    transform: translateY(${({ y }) => y && y});
`

export default FlexColumnCenter
