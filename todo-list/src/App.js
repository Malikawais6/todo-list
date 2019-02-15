import React, { Component } from "react";
import Header from "./components/header";
import TodoInput from "./components/todoInput";
import TodoItem from "./components/todoItem";
import TodoInfo from "./components/todoInfo";
import "./App.css";
const list = [
  { id: 0, text: "test1", checked: true },
  { id: 1, text: "test2", checked: true }
];
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodos: [...list],
      todos: [...list],
      nextId: 2
    };

    //  this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.check = this.check.bind(this);
  }

  addTodo = todoText => {
    let todos = this.state.todos.slice();
    todos.push({ id: this.state.nextId, text: todoText, checked: true });
    this.setState({
      todos: todos,
      newTodos: todos,
      checked: true,
      nextId: ++this.state.nextId
    });
  };

  removeTodo(id) {
    this.setState({
      newTodos: this.state.newTodos.filter((todo, index) => todo.id !== id),
      nextId: --this.state.nextId
    });
  }

  check(id) {
    console.log("ID " + id);
    for (var i = 0; i <= this.state.todos.length - 1; i++) {
      if (this.state.newTodos[i].id === id) {
        console.log("test " + this.state.newTodos[i].checked);
        // if (this.state.newTodos[i].checked === true) {
        //   console.log("check " + this.state.newTodos[i].id);
        this.setState({ checked: true });
        //}
      } else {
        // console.log(this.state.newTodos[i].checked);
        this.setState({ checked: false });
      }
    }
  }

  sortList = sortBy => {
    if (sortBy === "all") {
      this.setState({ newTodos: this.state.todos });
    }
    var checked = [];
    var unchecked = [];
    for (var i = 0; i <= this.state.todos.length - 1; i++) {
      if (this.state.todos[i].checked == false) {
        checked.push(this.state.todos[i]);
      } else {
        unchecked.push(this.state.todos[i]);
      }
    }
    if (sortBy === "active") {
      this.setState({ newTodos: unchecked });
    }
    if (sortBy === "completed") {
      this.setState({ newTodos: checked });
    }
  };
  render() {
    return (
      <div className="App">
        <Header />

        <div className="todo-wrapper">
          <TodoInput
            todoText=""
            addTodo={this.addTodo}
            checkAll={this.checkAll}
          />
          <TodoInfo
            onChangeButton={sortby => this.sortList(sortby)}
            count={this.state.nextId}
          />
          <ul>
            {this.state.newTodos.map(todo => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.id}
                  id={todo.id}
                  removeTodo={this.removeTodo}
                  check={this.check}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
