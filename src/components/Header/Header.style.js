import styled from "styled-components";

export const Header = styled.header`
    background-image: linear-gradient(to right, rgba(var(--darkerGrey), 0.5) 0%, rgba(var(--darkerGrey), 0) 100%), url('https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iDbIEpCM9nhoayUDTwqFL1iVwzb.jpg');
    min-height: 200px;
    height: auto;
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    color: var(--white);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    box-sizing: border-box;

    .wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        align-content: flex-start;
        flex-direction: column;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 0px;
        padding-bottom: 0px;
        .title {
            display: flex;
            align-items: flex-start;
            align-content: flex-start;
            flex-direction: column;
            width: 100%;
            margin-bottom: 20px;
            h1 {
                width: 100%;
            }
            h3 {
                width: 100%;
            }
        }
    }
`;

export const HeaderRow = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    flex-wrap: nowrap;
`;
