import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    padding-top: 0px;
    padding-bottom: 20px;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border: 1px solid rgba(var(--lightGrey), 1);
    background-color: var(--white);
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    border: 1px solid rgba(var(--lightGrey), 1);
    border-radius: var(--borderRadius);
    overflow: hidden;
    margin-top: 0px;
    margin-right: 0.8rem;
    width: 150px;
    min-width: 150px;
    margin-bottom: 1.5rem;
    margin-left: 0.8rem;
    ${props => props.size === "lg" && `
        border-width: 0px;
        min-width: 300px;
        width: 300px;
        height: 450px;
        overflow: hidden;
    `}
`;

export const CardImage = styled.img`
    box-shadow: 0 2px 8px rgb(var(--dark) / 10%);
    border-radius: var(--borderRadius);
    width: 100%;
    min-height: calc(150px * 1.5);
    background: var(--lightGrey);
    overflow: hidden;
`;

export const CardContent = styled.div`
    width: 100%;
    padding: 5px 10px 12px 10px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    h2 {
        font-size: 0.9rem;
        margin: 0;
        width: 100%;
        word-wrap: normal;
        overflow-wrap: break-word;
    }
    p {
        font-size: 0.8rem;
        margin: 0;
        padding: 0;
        color: rgba(var(--dark),0.6);
    }
`;
