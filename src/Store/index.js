import Dispatcher from "../Dispatcher";
import type from "../Action/type";
import EventEmitter from 'events';
import {ReduceStore} from 'flux/utils';

class Store extends ReduceStore {
  getInitialState() {
    return 0;
  }
  reduce(state,action) {
    switch(action.type) {
      case type.increase:
        return ++state;
      case type.decrease:
        return --state;
      default:
        return state;
    }
  }
}

export default new Store(Dispatcher);