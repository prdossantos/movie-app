import React from "react";

import CardComponent from "../components/Card";

export default {
  title: "MovieAPP/Components/Card",
  component: CardComponent
};

const Template = (args) => <CardComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: "Título",
    description: "The Templeton brothers",
    srcImg: "https://image.tmdb.org/t/p//w154/kv2Qk9MKFFQo4WQPaYta599HkJP.jpg"
};
