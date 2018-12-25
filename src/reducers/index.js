import { combineReducers } from 'redux';

const testText = (state = 'hoge', action) => {
  switch (action.type) {
    case 'CHANGE_TEST_TEXT':
      return action.testText;
    default:
      return state;
  }
};


export default combineReducers({ testText });
