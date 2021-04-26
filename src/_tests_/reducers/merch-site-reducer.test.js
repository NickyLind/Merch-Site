import merchSiteReducer from '../../reducers/merch-site-reducer';

describe('merchSiteReducer', () => {
  test('Should return default state if there is no action passed into the reducer', () => {
    expect(merchSiteReducer({}, { type: null })).toEqual({});
  });
});