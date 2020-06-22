import React, { Component, Fragment } from "react";
import ReactTooltip from "react-tooltip";

export default (props) => (
  <Fragment>
    <i
      className="far fa-check-circle mt-1 mx-1 text-danger"
      data-tip="Varified"
    ></i>
    <ReactTooltip place="top" effect="solid" />
  </Fragment>
);
