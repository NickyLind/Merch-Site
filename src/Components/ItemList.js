import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.itemList.map((item) =>
        <Item
          whenItemClicked={props.onItemSelection}
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          fullStock={item.fullStock}
          handleRestockButton={props.handleRestockButton}
          onClickBuyButton={props.onClickBuyButton}
          key={item.id}
          id={item.id}
        />
      )}
    </React.Fragment>
  );
}


ItemList.propTypes = {
  itemList: PropTypes.array,
  handleRestockButton: PropTypes.func,
  onItemSelection: PropTypes.func

};

export default ItemList;
