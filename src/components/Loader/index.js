import React from "react";
import { Loader } from "./Loader.style";
import { LoaderPropType, LoaderPropTypeDefault } from "./Loader.props";

const LoaderComponent = ( props ) => {

    const { showLoader, loaderMessage } = props;

    return (
        <Loader showLoader={showLoader} >
            <span className="text">
                <p>
                    {loaderMessage}
                    <span className="dots">
                        <span className={"dot dot1"}></span>
                        <span className={"dot dot2"}></span>
                        <span className={"dot dot3"}></span>
                    </span>
                </p>
            </span>
        </Loader>
    );
};

LoaderComponent.propTypes = LoaderPropType;
LoaderComponent.defaultProps = LoaderPropTypeDefault;

export default LoaderComponent;
