import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalTheme } from "./style";
import { LoaderContextProvider } from "./contexts/LoaderContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ConfigContextProvider } from "./contexts/ConfigContext";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false
        },
    },
});

ReactDOM.render(
    <LoaderContextProvider >
        <ConfigContextProvider>
            <QueryClientProvider client={queryClient}>
                <Fragment>
                    <GlobalTheme />
                    <App />
                </Fragment>
            </QueryClientProvider>
        </ConfigContextProvider>
    </LoaderContextProvider>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
