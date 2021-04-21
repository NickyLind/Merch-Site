import React from "react";
import Footer from './Footer';
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

class DisplayControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterItemList: [],
      formVisibleOnPage: false
    };
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

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />;
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

export default DisplayControl;