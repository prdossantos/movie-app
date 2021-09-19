import { Suspense, useEffect } from "react";
import { useQuery } from "react-query";
import LoaderComponent from "./components/Loader";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";
import { createBrowserHistory } from "history";
import { useLoaderContext } from "./contexts/LoaderContext";
import { getConfigs } from "./services/ConfigService";
import { useConfigContext } from "./contexts/ConfigContext";


export const browserHistory = createBrowserHistory({
    basename: "",
    forceRefresh: false
});

const App = () => {

    const { setShowLoader } = useLoaderContext();
    const { setConfigs, configs } = useConfigContext();

    const configsQuery = useQuery("configs", getConfigs);

    useEffect(() => {
        const { data } = configsQuery;
        if (data && data.images && !Object.keys(configs).length) {
            const { secure_base_url, backdrop_sizes, poster_sizes } = data.images;
            setConfigs({ secure_base_url, backdrop_sizes, poster_sizes });
        }
    }, [configs, configsQuery, setConfigs, setShowLoader])

    return (
        <BrowserRouter history={browserHistory}>
            <Suspense fallback={<LoaderComponent isActive={true} />}>
                <Switch>
                    {routes.map((route) => <Route key={route.name} path={route.path} exact={route.exact} component={route.component} />)}
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
