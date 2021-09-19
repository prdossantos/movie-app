
import { Card, CardImage } from "../../components/Card/Card.style";
import MovieInfoComponent from "../../components/MovieInfo";
import HeaderComponent from "../../components/Header";
import { Column, ColumnHeader, ColumnWraper, Container, Section } from "../../style";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getMovie } from "../../services/MovieService";
import { useConfigContext } from "../../contexts/ConfigContext";
import { useLoaderContext } from "../../contexts/LoaderContext";

const MoviePage = () => {

    const {id} = useParams();
    const {configs} = useConfigContext();
    const {setShowLoader} = useLoaderContext();

    const {isLoading, data: movieQuery} = useQuery(["movieQuery", id], () => getMovie(id), {
        enabled: !!id && !!Object.keys(configs).length
    })

    const getGenres = ( genres ) => {
        if( !Array.isArray(genres) || !genres.length ) {
            return "";
        }
        const list = genres.map( genre => genre.name);
        return list.join(", ");

    }

    useEffect(() => {
        if( !movieQuery && isLoading) {
            setShowLoader(true);
        } else {
           setShowLoader(false);
        }

    }, [id, isLoading, movieQuery, setShowLoader])

    return <Container>
        <HeaderComponent
            title={movieQuery?.original_title}
            description={getGenres(movieQuery?.genres)}
            alignChild="left"
            extraHeader={<MovieInfoComponent movie={movieQuery} />}
        >
            <Card size="lg">
                <CardImage src={`${configs.secure_base_url}/w780/${movieQuery?.poster_path}`} />
            </Card>
        </HeaderComponent>
        <Section>
            <ColumnWraper>
                <Column>
                    <ColumnHeader>
                        <h2>Elenco da Série</h2>
                    </ColumnHeader>
                    <p>Em breve...</p>
                </Column>
            </ColumnWraper>
        </Section>
    </Container>
}

export default MoviePage;
