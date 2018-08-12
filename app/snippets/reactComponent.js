export default function createReactComponent(name) {
  let output = name
    .replace(/\w+/g, function(txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, ''); // remove any spaces
  return `import React, { Component } from 'react';

  class ${output} extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
  
    }
  
    render() {
      return (
      <div>
      </div>
      );
    }
  }
  export default ${output};
    `;
}


