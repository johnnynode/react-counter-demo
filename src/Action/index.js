import Dispatcher from '../Dispatcher';
import type from './type';

let action = {
  increase() {
    Dispatcher.dispatch({
      type:type.increase
    });
  },
  decrease() {
    Dispatcher.dispatch({
      type:type.decrease
    });
  }
}

export default action;