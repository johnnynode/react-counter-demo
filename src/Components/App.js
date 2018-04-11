import React, { Component } from 'react';
import action from '../Action';
import store from '../Store';
import {Container} from 'flux/utils';

class App extends Component {
  static getStores() {
    return [store];
  }

  static calculateState() {
    return {
      counter:store.getState()
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={action.increase}>+</button>
        <button onClick={action.decrease}>-</button>
      </div>
    );
  }
}

export default Container.create(App);