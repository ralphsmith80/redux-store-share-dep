import React, { Component } from 'react'
import {connect} from 'react-redux'
import {requestGroups} from './reducers'

class App extends Component {
  render() {
    return (
      <div className="App" onClick={() => {
          console.log('child click')
          this.props.getGroups('groups')
        }}>
        <p className="App-intro">
          I'm the child Component. Click me to invoke a store action!
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groups: state.groups,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getGroups: (resolved) => {
      dispatch(requestGroups(resolved))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

