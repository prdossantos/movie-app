import PropTypes from "prop-types";

export const SearchPropType = {
    placeholder: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

export const SearchPropTypeDefault = {
    placeholder: "Pesquisar por um filme, uma série televisiva, uma pessoa...",
    buttonText: "Buscar"
}
