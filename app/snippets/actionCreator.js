export default function actionCreator(name) {
  let output = name
    .replace(/\w+/g, function(txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, ''); // remove any spaces
  return `
  export function ${output}() {
    return (dispatch, getState) => {
      // replace type and payload with your own
      // dispatch({ type: , payload:  });
    };
  }
  `;
}