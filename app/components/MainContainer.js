import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Grid, Segment, Button, Icon, Input } from 'semantic-ui-react';

import createComponent from '../actions';
import CopyToClipboard from 'react-copy-to-clipboard';
import { setCurrent } from '../actions';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copy = this.copy.bind(this);
    this.setCur = this.setCur.bind(this);
    this.changeCode = this.changeCode.bind(this);
  }

  componentDidMount() {}

  setCur(val) {
    this.props.setCurrent(val);
  }

  changeCode(name) {
    this.props.createComponent(name);
  }

  copy() {
    this.setState({ copied: true });
    const that = this;
    setTimeout(function() {
      that.setState({ copied: false });
    }, 500);
  }

  render() {
    return (
      <div className="main">
        <Grid>
          <Grid.Column width={10}>
            <Segment className="code-segment">
              <div className="code">
                {this.props.current && (
                  <div className="code-lines typewriter">
                    <p>{this.props.data[this.props.current]}</p>
                    {!this.props.current && <Icon name="code" color="black"size="massive" />}
                  </div>
                )}
              </div>
              <br />
              <span style={{ marginLeft: '150px' }} />

              {this.props.current && (
                <Input
                  size="big"
                  icon="code"
                  placeholder="Change Template Name"
                  onChange={e => this.changeCode(e.target.value)}
                />
              )}
              {this.props.current && (
                <CopyToClipboard onCopy={this.copy} text={this.props.data[this.props.current]}>
                  <Button size="big" floated="right" onClick={() => this.copy()} color="red">
                    <Icon name="copy" /> Copy code!
                  </Button>
                </CopyToClipboard>
              )}

              {this.state.copied && (
                <span
                  style={{
                    zIndex: 10,
                    background: 'black',
                    position: 'fixed',
                    padding: '1em',
                    borderRadius: '1em',
                    top: '50vh',
                    left: '45vw',
                    fontSize: '1em',
                    color: 'white'
                  }}
                >
                  <Icon size="small" name="check" color="green" />
                  Copied!
                </span>
              )}
            </Segment>
          </Grid.Column>

          <Grid.Column width={1} />

          <Grid.Column width={5}>
            <Segment>
              <Button fluid size="big" onClick={() => this.setCur('reactcomponent')} color="vk">
                <Icon name="react" /> New React Component
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('reduxcomponent')} color="vk">
                <Icon name="connectdevelop" /> New Redux Component
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('functionalcomponent')} color="vk">
                <Icon name="react" /> Pure Functional Component
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('localstorage')} color="vk">
                <Icon name="database" /> Localstorage functions
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('reducer')} color="vk">
                <Icon name="sort amount down" /> New Reducer
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('constant')} color="vk">
                <Icon name="arrow right" /> New Constant
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('asyncconstants')} color="vk">
                <Icon name="exchange" /> Async Constants
              </Button>
              <br />
              <br />
              <Button fluid size="big" onClick={() => this.setCur('loginform')} color="vk">
                <Icon name="sign in" /> New Login Form
              </Button>
              <br />
              <br />
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setCurrent: bindActionCreators(setCurrent, dispatch),
    createComponent: bindActionCreators(createComponent, dispatch)
  };
};

const mapStateToProps = state => ({
  data: state.mainReducer,
  current: state.mainReducer.current
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
