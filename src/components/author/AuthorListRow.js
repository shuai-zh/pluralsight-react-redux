import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AuthorListRow = ({ author }) => {
  return (
    <tr>
      <td>
        <Link to={"/author/" + author.id}>
          {author.id}
        </Link>
      </td>
      <td>
        {author.firstName}
      </td>
      <td>
        {author.lastName}
      </td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorListRow;
