export default (state = {}, action) => {
  const { name, description, quantity, fullStock, id } = action;
  switch (action.type) {
    case "ADD_ITEM":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          fullStock: fullStock,
          id: id
        }
      });
    default:
      return state;
  }
}