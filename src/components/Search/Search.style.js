import styled from "styled-components";

export const SearchBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    form {
        margin-top: 30px;
        position: relative;
        top: 0;
        left: 0;
        display: block;
        label {
            input[type=text] {
                width:  calc(100% - 20px);
                height: 46px;
                line-height: 46px;
                font-size: 1.1em;
                color: rgba(var(--dark),0.5);
                border: none;
                border-radius: 30px;
                padding: 0px 0px 0 20px;
                &:focus {
                    border: none;
                }
                &:focus-visible {
                    outline-width: inherit;
                }
            }
        }
        input[type=button] {
            display: inline-flex;
            justify-content: center;
            align-content: center;
            align-items: center;
            height: 46px;
            padding: 10px 26px;
            border: none;
            background: linear-gradient(to right, rgba(var(--lightGreen), 1) 0%, rgba(var(--lightBlue), 1) 100%);
            border-radius: 30px;
            position: absolute;
            top: 0;
            right: -1px;
            color: var(--white);
            user-select: none;
            white-space: pre;
            text-align: center;
            cursor: pointer;
        }
    }
`;
