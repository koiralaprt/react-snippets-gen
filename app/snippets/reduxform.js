export default function reduxFormCreator(name) {
  let output = name
    .replace(/\w+/g, function(txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, ''); // remove any spaces
  return `
import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ${output}Form = (props) => {
  return (
    <div>
    <form>
    // form submit buttons 
    <div>
        <button type="submit" >
          Submit
        </button>
        <button type="button"  onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
    </div>
  )
}
export default reduxForm({
  form: '${output}' // a unique identifier for this form
})(${output}Form)

`;
}
