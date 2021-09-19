import React from "react";
import { HeaderPropType, HeaderPropTypeDefault } from "./Header.props";
import { Header, HeaderRow } from "./Header.style";

const HeaderComponent = ({title, description, alignChild, extraHeader, children}) => {
    return <Header>
        <HeaderRow>
            {alignChild === "left" && children}
            <div className="wrapper">
                <div className="title">
                    <h1>{title}</h1>
                    {description && <h3>{description}</h3>}
                    {extraHeader}
                </div>
                {alignChild === "bottom" && children}
            </div>
        </HeaderRow>
    </Header>
}

HeaderComponent.propTypes = HeaderPropType;
HeaderComponent.defaultProps = HeaderPropTypeDefault;

export default HeaderComponent;
