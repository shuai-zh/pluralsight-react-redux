import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import toastr from "toastr";
import * as authorActions from "../../actions/authorActions";
import AuthorForm from "./AuthorForm";

export class ManageAuthorPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      author: Object.assign({}, props.author),
      errors: {},
      saving: false
    };

    this.updateAuthorState = this.updateAuthorState.bind(this);
    this.saveAuthor = this.saveAuthor.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.author.id !== nextProps.author.id) {
      this.setState({
        author: Object.assign({}, nextProps.author)
      });
    }
  }

  updateAuthorState(event) {
    const field = event.target.name;
    let author = this.state.author;
    author[field] = event.target.value;
    return this.setState({ author });
  }

  isAuthorFormValid() {
    let isFormValid = true;
    let errors = {};

    if (this.state.author.firstName.length < 2) {
      errors.firstName = "First name must be at least 2 characters.";
      isFormValid = false;
    }

    if (this.state.author.lastName.length < 2) {
      errors.lastName = "Last name must be at least 2 characters.";
      isFormValid = false;
    }

    this.setState({
      errors
    });

    return isFormValid;
  }

  redirect() {
    this.setState({ saving: false });
    toastr.success("Author saved");
    this.context.router.history.push("/authors");
  }

  saveAuthor(event) {
    event.preventDefault();
    if (!this.isAuthorFormValid()) return;

    this.setState({ saving: true });
    this.props.actions.saveAuthor(this.state.author).then(() => this.redirect()).catch(err => {
      toastr.error(err);
      this.setState({ saving: false });
    });
  }

  render() {
    return (
      <AuthorForm
        onChange={this.updateAuthorState}
        onSave={this.saveAuthor}
        author={this.state.author}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ManageAuthorPage.contextTypes = {
  router: PropTypes.object
};

function getAuthorById(authors, id) {
  const author = authors.filter(author => author.id === id);
  if (author.length) {
    return author[0];
  }

  return null;
}

function mapStateToProps(state, ownProps) {
  const authorId = ownProps.match.params.id;

  let author = {
    id: "",
    firstName: "",
    lastName: ""
  };

  if (authorId && state.authors.length > 0) {
    author = getAuthorById(state.authors, authorId);
  }

  return {
    author: author
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
