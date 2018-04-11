# react-counter-demo

### flux version

- 当点击界面上的+号的时候,会调用action.increase函数
- 通过action中定义的increase函数, Dispatcher分发相应的数据
- 在store中存储数据，通过_dispatcherToken方法，获取Dispatcher中的action
- 在store中根据匹配的action.type进行相关的操作，然后再触发事件
- 在App.js中，组件挂载的时候监听事件，组件销毁的时候取消监听事件

