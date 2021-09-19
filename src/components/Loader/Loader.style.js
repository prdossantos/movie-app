import styled from "styled-components";

export const Loader = styled.span`
    z-index: 999;
    top: 0px;
    left: 0px;
    visibility: hidden;
    transition: opacity 0.3s linear 0s, visibility 0.2s linear 0.3s;
    justify-content: center;
    align-items: center;
    display: none;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 1;
    background-color: rgb(var(--darkBlue));

    .text {
      font-size: 18px;
      margin-right: 5px;
      color: var(--white);
      .dots {
        margin-left: 8px;
        position: absolute;
        margin-top: 10px;
        .dot {
            background-color: var(--white);
            height: 5px;
            width: 5px;
            border-radius: 50%;
            margin: 0px 2px;
            display: inline-block;
            animation: sdelay 0.7s infinite ease-in-out;
            &.dot1 {
                animation-delay: -0.6s;
                margin-left: 0;
            }
            &.dot2 {
                animation-delay: -0.5s;
            }
            &.dot3 {
                animation-delay: -0.4s;
            }
            &.dot4 {
                animation-delay: -0.3s;
            }
        }
      }
    }


    ${props => props.showLoader &&`
        visibility: visible;
        display: flex;
        justify-content: center;
        align-items: center;
    `};

    @keyframes sdelay {
    0%,
    40%,
    100% {
        transform: translateY(-10px);
        -webkit-transform: translateY(-10px);
    }
    20% {
        transform: translateY(-20px);
        -webkit-transform: translateY(-20px);
    }
    }

`;
