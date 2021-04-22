import React from "react";
import Footer from './Footer';
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterItemList: [],
      formVisibleOnPage: false,
      selectedItem: null
    };
  }


  handleBuyButton = (id) => {
    const decrementedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    console.log("Inside handleBuyButton")
    if (decrementedItem.quantity >= 1) {
      decrementedItem.quantity--;
    }
  }

  handleRestockButton = (id) => {
    const item = this.state.masterItemList.filter(item => item.id === id)[0];
    item.quantity = item.fullStock;
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  };

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(ticket => ticket.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return";
    } else {
      currentlyVisibleState = <ItemList handleRestockButton={this.handleRestockButton} itemList={this.state.masterItemList}
        onItemSelection={this.handleChangingSelectedItem}
        onClickBuyButton={this.handleBuyButton}
      />;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Footer
          handleClick={this.handleClick}
          buttonText={buttonText}
        />
      </React.Fragment>
    );
  }
}

export default ItemControl;