import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <React.Fragment>
      <h3>{props.name} - QTY:{props.quantity}</h3>
      <p><em>{props.description}</em></p>
      <button>Buy</button>
      <button onClick={sendFullStockUp}>Restock</button>
      <hr />
    </React.Fragment >
  );
  function sendFullStockUp() {
    props.handleRestockButton(props.fullStock);
  }
  // function setFullStock() {
  //   if (props.quantity < props.fullStock) {
  //     const changedStock = props.fullStock;
  //     return changedStock;
  //   }
  // } 
}

export default Item;