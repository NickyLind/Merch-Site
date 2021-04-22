import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  let quantity = props.quantity > 0 ? props.quantity : "out of stock";
  return (
    <React.Fragment>
      <div onClick={() => props.whenItemClicked(props.id)}>
        <h3>{props.name} - QTY: {quantity}</h3>
        <p><em>{props.description}</em></p>
        <button onClick={() => props.onClickBuyButton(props.id)}>Buy</button>
        <button onClick={() => props.handleRestockButton(props.id)}>Restock</button>
        <hr />
      </div>
    </React.Fragment >
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.number,
  fullStock: PropTypes.number,
  handleRestockButton: PropTypes.func,
  whenItemClicked: PropTypes.func,
  onClickBuyButton: PropTypes.func


}

export default Item;