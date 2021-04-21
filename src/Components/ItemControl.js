import React from "react";
import PropTypes from "prop-types";
import DisplayControl from "./DisplayControl";
import Item from "./Item";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity,
      fullStock: props.fullStock
    }
  }


  handleRestockButton = (originalQuantity) => {
    console.log(originalQuantity);
    this.setState({
      initialQuantity: originalQuantity
    })
  }

  // handleRestockButton = () => {
  //   const originalQuantity = this.quantity;
  //   this.setState(prevState => ({
  //     intitialQuantity: originalQuantity
  //   }));
  // }


  buyButton = () => {
    this.setState(prevState => {
      if (prevState.quantity > 0) {
        return {
          quantity: prevState.quantity - 1
        }
      }
    });
  }


  render() {
    let quantityText = this.state.quantity
    if (this.state.quantity == 0) {
      quantityText = "Out of Stock"
    }
    return (
      <React.Fragment>
        <Item
          decrement={this.buyButton}
          quantityText={quantityText}
        />
      </React.Fragment>
    )
  }
}
export default ItemControl;

