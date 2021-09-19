import PropTypes from "prop-types";

export const HeaderPropType = {
    title: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.element,
    alignChild: PropTypes.string
}

export const HeaderPropTypeDefault = {
    alignChild: "bottom"
}
