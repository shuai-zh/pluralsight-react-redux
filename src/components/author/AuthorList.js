import React from "react";
import PropTypes from "prop-types";
import AuthorListRow from "./AuthorListRow";

const AuthorList = ({ authors }) => {
  return (
    <div className="author-list">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => <AuthorListRow key={author.id} author={author} />)}
        </tbody>
      </table>
    </div>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
