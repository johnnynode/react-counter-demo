import React, { Component } from 'react';
import action from '../Action';
import store from '../Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 数据是在store中取
      counter: store.getCounter()
    }
  }

  componentDidMount() {
    // 第一次调用addListener是监听，返回了一个取消监听的函数
    this.listener = store.addListener(()=>{
      this.setState({
        counter:store.getCounter()
      })
    });
  }

  componentWillUnmount() {
    this.listener(); // 再次调用，取消监听
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

export default App;