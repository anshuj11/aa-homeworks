import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";

import loginForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  const errors = state.errors.session;
  return {
    errors: errors,
    formType: "login"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //mapDispatchToProps
)(loginForm);
