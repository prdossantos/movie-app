import styled, { createGlobalStyle } from 'styled-components';

export const GlobalTheme = createGlobalStyle`
    :root {
        --lightGrey: 227,227,227;
        --darkerGrey: 200,200,200;
        --darkBlue: 3,37,65;
        --lightBlue: 1,180,228;
        --lighterGreen: 192,254,207;
        --lightGreen: 30,213,169;
        --dark: 0,0,0;
        --white: white;
        --borderRadius: 8px;
    }
    body {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        height: auto;
        margin: 0;
        -ms-overflow-style: -ms-autohiding-scrollbar;
        background-color: var(--white);
        color: var(--dark);
        font-family: 'Source Sans Pro', Arial, sans-serif;
        font-size: 1em;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 1rem;
    }
    h2 {
        font-size: 1.6rem;
        font-weight: 600;
    }
    h3 {
        font-size: 1.3rem;
        font-weight: 600;
        margin: 0;
    }
    .cursor-pointer {
        cursor: pointer;
        transition: transform .2s;
        transform: scale(1);
        &:hover {
            transform: scale(1.1);
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
    background-color: var(--white);
    margin-top: 0px;
`;

export const Section = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justify ? props.justify : "center" };
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
`;

export const ColumnWraper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 30px;
`;


export const Column = styled.div`
    width: 100%;
`;

export const ColumnHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    h2 {
        margin-right: 20px;
        white-space: nowrap;
    }
`;
