import React, { Component } from 'react'
import './App.css'

// 组件
import Message from './message'
import Timer from './timer'
import TodoApp from './todo'
import MarkdownEditor from './editor'
import Logo from './logo'


class App extends Component {
  // constructor 是类被初始化后自动调用的函数
  constructor(props) {
      super(props)
      this.state = {
        showTimer: true,
      }
  }
// jsx 语法
  render() {
    // 用一个变量决定是否显示 timer 组件
    // 组件就是说呢 我们不写页面了
    // 我们写一个个组件 最后把小组件拼成一个 html
    // ? 三元表达式
    // button 绑定事件
    var timer = this.state.showTimer ? <Timer /> : null
    return (
      <div className="App">
        <Logo />
        <Message name="Young" />
        <Message name="洋" />
        <button onClick={this.handleToggleTimer}>开关 timer</button>
        {timer}
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
  }
  // e 用了箭头函数指向 handleToggleTimer 这个函数 再指向 this
  // this 就是外面这个 class App
  handleToggleTimer = (e) => {
    var showTimer = !this.state.showTimer
    // 使用 setState 改变 this.state
    // 程序自动重新调用 render
    // 框架提供的 setState
    this.setState({showTimer})
  }
}

export default App
