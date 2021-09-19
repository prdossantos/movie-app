import React from "react";
import { Section } from "../../style";
import { MovieInfoPropType, MovieInfoPropTypeDefault } from "./MovieInfo.props";
import { MovieInfoContainer } from "./MovieInfo.style";

const MovieInfoComponent = ({movie}) => {
    return <MovieInfoContainer>
        <Section justify="flex-start">
            <h3>Sinopse</h3>
            <p className="overview">{movie.overview}</p>
            <ol>
                <li>
                    <p>Release date</p>
                    <p>{movie.release_date}</p>
                </li>
                <li>
                    <p>Vote average</p>
                    <p>{movie.vote_average}</p>
                </li>
                <li>
                    <p>Vote count</p>
                    <p>{movie.vote_count}</p>
                </li>
            </ol>
        </Section>
    </MovieInfoContainer>
}

MovieInfoComponent.propTypes = MovieInfoPropType;
MovieInfoComponent.defaultProps = MovieInfoPropTypeDefault;

export default MovieInfoComponent;
