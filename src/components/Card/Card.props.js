import PropTypes from "prop-types";

export const CardPropType = {
    /**
     * Título do card
     */
    title: PropTypes.string.isRequired,
    /**
     * Descrição do card
     */
    description: PropTypes.string.isRequired,
    /**
     * Imagem do card
     */
     srcImg: PropTypes.string.isRequired
}
