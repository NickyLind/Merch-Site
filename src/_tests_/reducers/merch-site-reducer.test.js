import merchSiteReducer from '../../reducers/merch-site-reducer';

describe('merchSiteReducer', () => {

  let action;
  const itemData = {
    name: 'tshirt',
    description: 'tshirt with band logo',
    quantity: 20,
    fullStock: 20,
    id: 1,
  };


  //tests are below

  test('Should return default state if there is no action passed into the reducer', () => {
    expect(merchSiteReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new item data to masterItemList', () => {
    const { name, description, quantity, fullStock, id } = itemData;
    action = {
      type: 'ADD_ITEM',
      name: name,
      description: description,
      quantity: quantity,
      fullStock: fullStock,
      id: id
    };

    expect(merchSiteReducer({}, action)).toEqual({
      [id]: {
        name: name,
        description: description,
        quantity: quantity,
        fullStock: fullStock,
        id: id
      }
    });
  });

});