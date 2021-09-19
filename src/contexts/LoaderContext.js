import { createContext, Fragment, useContext, useState } from "react";
import { LoaderPropType, LoaderPropTypeDefault } from "../components/Loader/Loader.props";
import LoaderComponent from "../components/Loader";

const LoaderContext = createContext(LoaderPropType);

const LoaderContextProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    const [message, setMessage] = useState(LoaderPropTypeDefault.loaderMessage);

    const setShowLoader = ( isShown = false, text = message) => {
        setMessage(text);
        setIsActive(isShown);
    }

    return (
        <LoaderContext.Provider value={{
            setShowLoader
        }}>
            <Fragment>
                {children}
                <LoaderComponent showLoader={isActive} loaderMessage={message}/>
            </Fragment>
        </LoaderContext.Provider>
    );
};

const useLoaderContext = () => {
    const context = useContext(LoaderContext);

    if (!context) {
      throw new Error("useLoaderContext undefined");
    }

    return context;
}


export {LoaderContextProvider, useLoaderContext};
