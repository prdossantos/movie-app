import React, { useEffect, useState } from "react";
import CardComponent from "../../components/Card";
import SearchComponent from "../../components/Search";
import { CardContainer } from "../../components/Card/Card.style";
import HeaderComponent from "../../components/Header";
import { Column, ColumnHeader, ColumnWraper, Container, Section } from "../../style";
import { useQuery } from "react-query";
import { getMoviesUpComming } from "../../services/MovieService";
import { useLoaderContext } from "../../contexts/LoaderContext";
import { useConfigContext } from "../../contexts/ConfigContext";
import { useHistory } from "react-router";

const HomePage = () => {

    const {setShowLoader} = useLoaderContext();
    const {configs} = useConfigContext();
    const [movies, setMovies] = useState([]);
    const history = useHistory();
    const {isLoading, data: moviesUpcomming} = useQuery("moviesUpcomming", getMoviesUpComming, {
        enabled: !!Object.keys(configs).length
    });

    const navigateTo = (id) => {
        history.push(`/movie/${id}`);
    }

    useEffect(() => {
        setShowLoader(true);
    }, [isLoading, setShowLoader])

    useEffect(() => {
        if( moviesUpcomming && moviesUpcomming.results && moviesUpcomming.results.length ) {
            setMovies(moviesUpcomming.results);
            setShowLoader(false);
        }
    }, [moviesUpcomming, setShowLoader])

    return <Container>
        <HeaderComponent
            title="Bem-vindo(a)."
            description="Milhões de filmes, séries e pessoas para descobrir. Explore já."
        >
            <SearchComponent />
        </HeaderComponent>
        <Section>
            <ColumnWraper>
                <Column>
                    <ColumnHeader>
                        <h2>Próximos Lançamentos</h2>
                    </ColumnHeader>
                    <CardContainer>
                        {movies && movies.length > 0 && movies.map( movie => <span
                            className="cursor-pointer"
                            onClick={() => navigateTo(movie.id)}
                            key={movie.id}>
                                <CardComponent
                                    srcImg={`${configs.secure_base_url}/w154${movie.poster_path}`}
                                    title={movie.original_title}
                                    description={`${movie.overview.substr(0, 15)}...`}
                                />
                            </span>
                        )}
                    </CardContainer>
                </Column>
            </ColumnWraper>
        </Section>
    </Container>
}

export default HomePage;
