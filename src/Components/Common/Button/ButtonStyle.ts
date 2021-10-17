import styled from "styled-components";

export const StyleButton = styled.button`
    /* default */
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 26px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 10px;
    position: static;
    width: 728px;
    width: 100%;
    height: 36px;
    left: 0px;
    top: 0px;
    background: #0058B9;
    border-radius: 10px;
    border:none;
    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0px 4px;
    letter-spacing: 0.25px;
    text-transform: uppercase;

    &.primary{
        border-radius: 20px;
        width: 242px;
    }

    &.secondary{
        background: #D9DBE9;
        letter-spacing: 0.25px;
        text-transform: uppercase;
        color: #5A5A89;
        border-radius: 20px;
        width: 98px;
    }

    &.text{
        background: none;
        color: #5A5A89;
        border-radius: 20px;
    }

    &.text:hover{
        background: rgba(217, 219, 233, 0.3);
    }

    &:hover{
        opacity: 0.8;
        cursor: pointer;
    }

    & .arrow-right{
        margin-left: 0.5rem;
    }
`;
