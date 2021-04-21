import React from "react";
// import PropTypes from "prop-types";
// import ItemControl from "./ItemControl";

function Item(props) {

  return (
    <React.Fragment>
      <h3>{props.name} - QTY:{props.quantityText}</h3>
      <p><em>{props.description}</em></p>
      <button onClick={props.decrement}>Buy</button>
      <button onClick={sendFullStockUp}>Restock</button>
      <hr />
    </React.Fragment >
  );

  function sendFullStockUp() {
    props.handleRestockButton(props.fullStock);
  }

  function sendCurrentQuantity() {
    props.handleBuyButton(props.quantity);
  }

  // function buyButton(props) {
  //   props.quantity--
  // }
  // function setFullStock() {
  //   if (props.quantity < props.fullStock) {
  //     const changedStock = props.fullStock;
  //     return changedStock;
  //   }
  // }
}

export default Item;

