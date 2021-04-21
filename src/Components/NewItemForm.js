import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name of item" />
        <input
          type="text"
          name="description"
          placeholder="Describe item" />
        <input
          type="number"
          name="quantity"
          placeholder="Amount" />
      </form>
    </React.Fragment>
  );

  function handleNewItemSubmission(e) {
    e.preventDefault();
    props.onNewItemCreation({ name: e.target.name.value, description: e.target.description.value, quantity: e.target.quantity.value, id: v4() })
  }
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;