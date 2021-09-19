import React from "react";
import { CardPropType } from "./Card.props";
import { Card, CardContent, CardImage } from "./Card.style";

const CardComponent = ({title, description, srcImg}) => {
    return <Card>
        <CardImage src={srcImg} />
        <CardContent>
            <h2>{title}</h2>
            <p>{description}</p>
        </CardContent>
    </Card>
}

CardComponent.propTypes = CardPropType;

export default CardComponent;
