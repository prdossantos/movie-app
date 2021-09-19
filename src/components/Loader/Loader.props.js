import PropTypes from "prop-types";

export const LoaderPropType = {
    loaderMessage: PropTypes.string.isRequired,
    showLoader: PropTypes.bool.isRequired
}

export const LoaderPropTypeDefault = {
    loaderMessage: "processando",
    showLoader: false
}
