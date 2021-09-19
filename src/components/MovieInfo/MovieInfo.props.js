import PropTypes from "prop-types";

export const MovieSchema = {
    title: PropTypes.string,
    overview: PropTypes.string
}


export const MovieInfoPropType = {
    movie: PropTypes.shape(MovieSchema)
}

export const MovieInfoPropTypeDefault = {
    movie: {}
}
