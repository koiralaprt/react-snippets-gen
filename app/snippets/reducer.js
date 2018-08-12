export default function actionCreator(name) {
  let output = name
    .replace(/\w+/g, function(txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, ''); // remove any spaces
  return `
  // import {} from './'; // for importing constants

const initial_state = {
 
};

export default function ${output}(state = initial_state, action) {
  let newState = JSON.parse(JSON.stringify(state)); //change newstate values and send it as normal,prevents mutation of state ;)

  switch (action.type) {
    default:
      return state;
  }
}
`;
}
