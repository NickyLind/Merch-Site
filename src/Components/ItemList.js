import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

const masterItemList = [
  {
    name: "T-shirt",
    description: "black and white",
    quantity: 5,
    fullStock: 20,
    id: v4()
  },
  {
    name: "Beer Coosie",
    description: "band logo",
    quantity: 12,
    fullStock: 20,
    id: v4()
  }
];

// function ItemList(props) {
//   return (
//     <React.Fragment>
//       <hr />
//       {props.itemList.map((item) =>
//         <Item
//           name={item.name}
//           description={item.description}
//           quantity={item.quantity}
//           key={item.id}
//         />
//       )}
//     </React.Fragment>
//   );
// }

function ItemList(props) {
  return (
    <React.Fragment>
      <hr />
      {masterItemList.map((item) =>
        <Item
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          key={item.id}
          fullStock={item.fullStock}
          handleRestockButton={props.handleRestockButton}
        // restockQuantity={props.restockQuantity}
        />
      )}
    </React.Fragment>
  );
  // function handleBuyButton(props) {
  //   props.item.quantity - 1;

  // }
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;