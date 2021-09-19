import HomePage from "./pages/Home";
import MoviePage from "./pages/Movie";


export const routes = [
    { name: "Movies", exact: true, path: "/", component: HomePage },
    { name: "Movie", exact: true, path: "/movie/:id", component: MoviePage },
];
