export default function createReduxConnectedComponent(name) {
  let output = name
    .replace(/\w+/g, function(txt) {
      // uppercase first letter and add rest unchanged
      return txt.charAt(0).toUpperCase() + txt.substr(1);
    })
    .replace(/\s/g, ''); // remove any spaces
  return `import React, { Component } from 'react';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';

  // import * as actionCreator from './';

  class ${output} extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    componentDidMount() {
  
    }
  
    componentWillReceiveProps(newProps) {

    }

    render() {
      return (
      <div>
      </div>
      );
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
     // Action: bindActionCreators(actionCreator, dispatch),
     
    };
  };
  
  const mapStateToProps = state => ({
    
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(${output});
  
    `;
}


