# react-counter-demo

### flux version

- 当点击界面上的+号的时候,会调用action.increase函数
- 通过action中定义的increase函数, Dispatcher分发相应的数据
- 在store中存储数据，通过_dispatcherToken方法，获取Dispatcher中的action
- 在store中根据匹配的action.type进行相关的操作，然后再触发事件
- 在App.js中，组件挂载的时候监听事件，组件销毁的时候取消监听事件

### flux version plus - ReduceStore

- 在store中, 导入flux版的ReduceStore, 不需要再次使用自己绑定的宏和EventEmitter和初始化数据counter了
- 通过ReduceStore不再需要自己写监听函数了，注意导出的时候通过new的方式并传入Dispatcher
- 之后在App.js中修改获取数据的方式，通过store.getState()方法
- ReduceStore主要是优化store的

### flux version plus - Container

- 在App.js中 首先从flux/utils中导入Container组件
- 在App.js中constructor和componentDidMount和componentWillUnmount需要去除
- 在App.js中取而代之的方法是static类型的getStores方法和calculateState方法
- 最后导出的时候需要用到Container.create方法传入我们写的App组件