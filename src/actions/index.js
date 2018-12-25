
export const setTestButton = () => (dispatch) => {
  return dispatch({ type: 'CHANGE_TEST_TEXT', testText: 'test' });
};


export const onPlaceChange = textBody => (dispatch) => {
  return dispatch({ type: 'CHANGE_TEST_TEXT', testText: textBody });
};
