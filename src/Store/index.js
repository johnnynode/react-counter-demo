import Dispatcher from "../Dispatcher";
import type from "../Action/type";
import EventEmitter from 'events';

const CHANGE_COUNTER = "CHANGE_COUNTER";
const _emitter = new EventEmitter();

let counter = 0;

let store = {
  getCounter() {
    return counter;
  },

  addListener(callback) {
    _emitter.on(CHANGE_COUNTER, callback);
    // 移除监听
    return () => {
      _emitter.removeListener(CHANGE_COUNTER, callback);
    }
  },

  _dispatcherToken: Dispatcher.register((action) => {
    switch(action.type) {
      case type.increase:
        counter ++;
        break;
      case type.decrease:
        counter --;
        break;
      default:
        break;
    }
    // 宏CHANGE_COUNTER 已经和它的callback绑定在了一起
    _emitter.emit(CHANGE_COUNTER);
  })
}

export default store;