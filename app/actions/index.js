import functionalcomponent from '../snippets/functionalComponent';
import actioncreator from '../snippets/actionCreator';
import localstorage from '../snippets/localStorage';
import loginform from '../snippets/loginformCreator';
import reactcomponent from '../snippets/reactComponent';
import reducer from '../snippets/reducer';
import reduxcomponent from '../snippets/reduxConnectedComponent';
import * as constants from '../snippets/reduxConstants';
import reduxform from '../snippets/reduxform';

export const SET_CODE_SNIPPETS = 'SET_CODE_SNIPPETS';
export const ADD_FORM_FIELDS = 'ADD_FORM_FIELDS';
export const SET_CURRENT = 'SET_CURRENT';

export default function createComponent(name) {
  return (dispatch, getState) => {
    let current = getState().mainReducer.current;
    let code;
    switch (current) {
      case 'functionalcomponent': {
        code = functionalcomponent(name);
        dispatch(setCodeSnippets('functionalcomponent', code));
        break;
      }
      case 'actioncreator': {
        code = actioncreator(name);
        dispatch(setCodeSnippets('actioncreator', code));
        break;
      }
      case 'localstorage': {
        code = localstorage();
        dispatch(setCodeSnippets('localstorage', code));
        break;
      }
      case 'loginform': {
        code = loginform(name);
        dispatch(setCodeSnippets('loginform', code));
        break;
      }
      case 'reactcomponent': {
        code = reactcomponent(name);
        dispatch(setCodeSnippets('reactcomponent', code));
        break;
      }
      case 'reduxcomponent': {
        code = reduxcomponent(name);
        dispatch(setCodeSnippets('reduxcomponent', code));
        break;
      }
      case 'reducer': {
        code = reducer(name);
        dispatch(setCodeSnippets('reducer', code));
        break;
      }
      case 'constant': {
        code = constants.constantsCreator(name);
        dispatch(setCodeSnippets('constant', code));
        break;
      }
      case 'asyncconstants': {
        code = constants.asyncConstantsCreator(name);
        dispatch(setCodeSnippets('asyncconstants', code));
        break;
      }
      default:
        return;
    }
  };
}

export function setCodeSnippets(name, value) {
  return dispatch => {
    let dat = { name: '', value: '' };
    dat.name = name;
    dat.value = value;
    dispatch({ type: SET_CODE_SNIPPETS, payload: dat });
  };
}

export function addformfields(val) {
  return dispatch => {
    dispatch({ type: ADD_FORM_FIELDS, payload: val });
  };
}

export function setCurrent(name) {
  return dispatch => {
    dispatch({ type: SET_CURRENT, payload: name });
    dispatch(createComponent('template_name'));
  };
}
