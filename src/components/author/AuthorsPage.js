import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AuthorList from "./AuthorList";
import * as authorActions from "../../actions/authorActions";

class AuthorsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
  }

  redirectToAddAuthorPage() {
    this.context.router.history.push("/author");
  }

  render() {
    const { authors } = this.props;
    return (
      <div>
        <h1>Authors</h1>
        <button className="btn btn-primary" onClick={this.redirectToAddAuthorPage}>
          Add Author
        </button>
        <AuthorList authors={authors} />
      </div>
    );
  }
}

AuthorsPage.propTypes = {
  authors: PropTypes.array.isRequired
};

AuthorsPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
