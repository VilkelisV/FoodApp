import React from "react";
import { Link } from "react-router-dom";
import { BTN_BACK } from "../../constants";

const BackButton = () => {
  return (
    <>
      <Link to="/">
        <button className="btn">{BTN_BACK}</button>
      </Link>
    </>
  );
};

export default BackButton;
