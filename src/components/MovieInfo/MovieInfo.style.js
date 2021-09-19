import styled from "styled-components";

export const MovieInfoContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    .overview {
        text-align: justify;
        width: 100%;
    }
    ol {
        list-style-type: none;
        list-style-position: inside;
        margin: 0;
        padding: 0;
        display: flex;
        position: relative;
        top: 0;
        left: 0;
        flex-direction: column;
        li {
            margin-bottom: 10px;
            p {
                font-size: 1rem;
                margin: 0;
                padding: 0;
                overflow: hidden;
                text-overflow: ellipsis;
                font-weight: bold;
                &:last-child {
                    font-weight: normal;
                    font-size: 0.8rem;
                }
            }
        }
    }
`;

export const MovieInfo = styled.div`

`;
