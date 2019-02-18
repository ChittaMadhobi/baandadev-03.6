// Root Reducer
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import todos from './TodoReducer';
import messages from './messageReducer';
import pursuits from './sxPursuitReducer';
import sxMessages from './sxMessageReducer';
import sxProject from './sxProjectReducer';

//import { uiReducer } from './reducer-ui';
import visibilityFilter from './visibilityFilter';
import modal from './modalReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  form: reduxForm,
  //ui: uiReducer,
  todos,
  messages,
  pursuits,
  sxMessages,
  sxProject,
  visibilityFilter,
  modal
});
