import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css'
import {requestGroups} from './reducers'

class App extends Component {
  render() {
    return (
      <div className="App" onClick={() => {this.props.getGroups('groups')}}>
        <p className="App-intro">
          I'm the child Component. You can do what you want with me!
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

