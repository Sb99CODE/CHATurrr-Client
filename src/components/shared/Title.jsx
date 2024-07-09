import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "CHATur",
  description = "This is A Chating app , CHATur !!",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
