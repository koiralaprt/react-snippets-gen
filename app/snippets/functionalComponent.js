export default function createFunctionalComponent(name) {
  let output = name.replace(/\w+/g, function(txt) {
    // uppercase first letter and add rest unchanged
    return txt.charAt(0).toUpperCase() + txt.substr(1);
  }).replace(/\s/g, '');// remove any spaces
  return `import React from ‘react’;

const ${output} = (props) => {
  return(
 <div></div>
)};

export default ${output};
    `;
}
