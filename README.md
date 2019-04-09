此项目是用[Create React App](https://github.com/facebook/create-react-app)启动的.

## 可用脚本

在项目目录中，可以运行：

### `npm start`

以开发模式运行应用程序。<br>
打开[http://localhost:3000](http://localhost:3000)在浏览器中查看。

如果进行编辑，页面将重新加载。<br>
您还将在控制台中看到任何eslint错误。

### `npm test`

以交互监视模式启动测试运行程序。<br>
有关详细信息，请参阅 [running tests](https://facebook.github.io/create-react-app/docs/running-tests)。

### `npm run build`

将用于生产的应用程序生成到`build`文件夹中。<br>
它在生产模式下正确地捆绑响应，并优化构建以获得最佳性能。

生成被缩小，文件名包括哈希。<br>
您的应用程序已准备好部署！

有关详细信息，请参阅 [deployment](https://facebook.github.io/create-react-app/docs/deployment)。

### `npm run eject`

**注意：这是单向操作。一旦你`npm run eject`，你就不能回去了！**

如果您对构建工具和配置选项不满意，可以随时`eject`。此命令将从项目中移除单个生成依赖项。

相反，它将把所有配置文件和可传递的依赖项（Webpack、Babel、eSlint等）直接复制到您的项目中，这样您就可以完全控制它们了。除`eject`之外的所有命令都将继续工作，但它们将指向复制的脚本，以便您可以对其进行调整。现在你只能靠自己了。

你不必使用`eject`。调整后的特性集适用于中小型部署，您不应该觉得有义务使用此特性。然而，我们理解，如果您不能在准备好时对它进行自定义，那么这个工具就不会有用。

### 项目目录结构
```
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   `-- manifest.json
|-- src
|   |-- components  // 封装组件
|   |   `-- Button.js
|   |-- modals  // 存放不同的action
|   |   |-- reducerCaption.js
|   |   `-- reducerFontSize.js
|   |-- routes  // 视图展示层
|   |   |-- App.js
|   |   |-- Counter.js
|   |   |-- FontSize.js
|   |   `-- Summary.js
|   |-- index.css
|   |-- index.js
|   |-- App.test.js
|   |-- serviceWorker.js
|   `-- store.js  // store仓库
|-- README.md
|-- .gitignore
`-- yarn.lock
```
### demo示例功能点
- 使用Redux进行状态管理；
- 使用combineReducers将多个reducer组合管理。

### 功能实现
- 1.安装`create-react-app`
```
npm install -g create-react-app
```
- 2.查看版本
```
create-react-app --version
// 我的版本是2.1.1
```
- 3.通过命令创建一个`demo`文件
```
create-react-app demo
```
- 4.删除`App.js`,`App.css`,然后
```
// 新建文件
|-- |-- components  // 封装组件
|   |   `-- Button.js
|   |-- modals  // 存放不同的action
|   |   |-- reducerCaption.js
|   |   `-- renderFontSize.js
|   `-- routes  // 视图展示层
|       |-- App.js
|       |-- Counter.js
|       |-- FontSize.js
|       `-- Summary.js
`-- store.js  // store仓库

// 修改App.test.js
import App from './App';  -- >  import App from './routes/App';
```
### demo示例功能点
- 使用Redux进行状态管理；
- 使用combineReducers将多个reducer组合管理。

### 功能实现
- 1.安装`create-react-app`
```
npm install -g create-react-app
```
- 2.查看版本
```
create-react-app --version
// 我的版本是2.1.1
```
- 3.通过命令创建一个`demo`文件
```
create-react-app demo
```
- 4.删除`App.js`,`App.css`,然后
```
// 新建文件
|-- |-- components  // 封装组件
|   |   `-- Button.js
|   |-- modals  // 存放不同的action
|   |   |-- reducerCaption.js
|   |   `-- renderFontSize.js
|   `-- routes  // 视图展示层
|       |-- App.js
|       |-- Counter.js
|       |-- FontSize.js
|       `-- Summary.js
`-- store.js  // store仓库

// 修改App.test.js
import App from './App';  -- >  import App from './routes/App';
```
- 5.存放公用的state，以及对于这个state的一系列操作。
```
// reducerCaption.js
// type类型
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
 // 初始化state数据
const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20,
}
// action行为
export const increment = (counterCaption) => {
    return {
        type: INCREMENT,
        counterCaption,
    }
}
export const decrement = (counterCaption) => {
    return {
        type: DECREMENT,
        counterCaption,
    }
}
// reducer
export function reducerCaption(state = initValues, action) {
    const { counterCaption } = action;
    switch (action.type) {
        case INCREMENT: 
            return { ...state, [counterCaption]: state[counterCaption] + 1};
        case DECREMENT: 
            return { ...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state;
        }
}
```
- 6.在展示的组件里通过store.getState()获取公共的state状态，在组件加载完成后设置监听器，订阅onChange函数（当store变化，自动执行onChange函数，改变state状态，重新渲染页面）
```
// Counter.js
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import store from '../store';
import { increment, decrement } from '../modals/reducerCaption';
import Button from '../components/Button';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = this.getOwnState();
    }
    componentDidMount() {
        store.subscribe(this.onChange); // 设置监听器
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange); // 关闭监听器，防止内存泄漏
    }
    getOwnState = () => {
        const { reducerCaption } = store.getState(); // 获取store的状态
        return {
            value: reducerCaption[this.props.caption]
        }
    }
    onChange = () => {
        this.setState(this.getOwnState())
    }
    // 发起一个+1的action
    onIncrement = () => {
        store.dispatch(increment(this.props.caption));
    }
    // 发起一个-1的action
    onDecrement = () => {
        store.dispatch(decrement(this.props.caption));
    }
    render() {
        const value = this.state.value;
        const { caption } = this.props;

        return (
            <div>
                <Button onClick={this.onIncrement}>+</Button>
                <Button onClick={this.onDecrement}>-</Button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}
// 对传入的值进行类型检查： 值必须为string且不能为空
Counter.propTypes = {
    caption: PropTypes.string.isRequired,
}
export default Counter;
```
- 7.当然我们不能将所有的`reducer`都放在一起，通过`switch`方法判断会使得代码太臃肿了，且不易维护，所以将不同的`reducer`写在不同的地方，通过`combineReducers`函数将这些`reducer`联合起来，再通过`createStore`方法创建一个仓库，这样我们可以通过es6解构store.getState()获取对应的reducer返回的数据。
```
// store.js
import { createStore, combineReducers } from 'redux';
import { reducerCaption } from './modals/reducerCaption';
import { reducerFontSize } from './modals/renderFontSize';

const reducer = combineReducers({
    reducerCaption,
    reducerFontSize
});

const store = createStore(reducer);

export default store;

```