import React from "react";
import Header from "./Header";
import DisplayControl from "./DisplayControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <DisplayControl />
    </React.Fragment>
  )
}

export default App;

// Display items in a column
// Items need: name, description & quantity
// Buy button should decrease quantity of item by 1
// Restock button should restore quantity of item
// If an items quantity hits zero, list "Out of Stock"
