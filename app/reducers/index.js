import { SET_CODE_SNIPPETS, ADD_FORM_FIELDS, SET_CURRENT } from '../actions';

const initial_state = {
  functionalcomponent: '',
  reactcomponent: '',
  localstorage: '',
  loginform: '',
  loginformcontainer: '',
  reduxcomponent: '',
  constant: '',
  asyncconstants: '',
  reducer: '',
  actioncreator: '',
  reduxformfields: [],
  current: ''
};

const mainReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SET_CODE_SNIPPETS:
      return { ...state, [action.payload.name]: action.payload.value };
    case ADD_FORM_FIELDS:
      return { ...state, reduxformfields: state.reduxformfields.concat(action.payload) };
    case SET_CURRENT:
      return { ...state, current: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
