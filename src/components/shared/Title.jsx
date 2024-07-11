import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({
  title = "Chatur",
  description = "CHATUR - CHAT with UR FRIENDS !!",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
