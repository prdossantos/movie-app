import { createContext, useContext, useState } from "react";

const ConfigContext = createContext({});

const ConfigContextProvider = ({children}) => {
    const [configs, setConfigs] = useState({});

    return (
        <ConfigContext.Provider value={{
            setConfigs,
            configs
        }}>
            {children}
        </ConfigContext.Provider>
    );
};

const useConfigContext = () => {
    const context = useContext(ConfigContext);

    if (!context) {
      throw new Error("useConfigContext undefined");
    }

    return context;
}


export {ConfigContextProvider, useConfigContext};
