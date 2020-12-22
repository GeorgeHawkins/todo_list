import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

const todoState = {
    COMPLETE: 'complete',
    ONGOING: 'ongoing',
    OVERDUE: 'overdue'

}

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: 'Clean the kitchen',
        todoState: todoState.ONGOING,
        due: new Date(2020, 7, 24, 11)
      },
      {
        id: 2,
        task: 'Walk the dogs',
        todoState: todoState.ONGOING,
        due: new Date(2020, 7, 21, 15)
      },
      {
        id: 3,
        task: 'Go to the gym',
        todoState: todoState.ONGOING,
        due: new Date(2020, 7, 26, 8)
      },
      {
        id: 4,
        task: 'Buy milk',
        todoState: todoState.ONGOING,
        due: new Date(2020, 7, 19)
      }
    ]
  }

  addTodo = (task, due) => {
    const newTodo = {
      id: (this.state.todos.length > 0 ) ? this.state.todos[this.state.todos.length-1].id + 1 : 1,
      task: task,
      todoState: todoState.ONGOING,
      due: due
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }

  delTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  updateOverdue = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.todoState = todoState.OVERDUE
      }
      return todo;
    })});
  }

  todoUpdate = (id, checkValue) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        if (checkValue) {
          todo.todoState = todoState.COMPLETE;
        } else {
          //if the todo is overdue from current time set it to overdue, else ongoing
          (new Date().getTime() > todo.due.getTime()) ? todo.todoState = todoState.OVERDUE : todo.todoState = todoState.ONGOING;
        }
      }
      return todo;
    })});
  }

  render() {
    return (
      <div className='App'>
        <div className='Main'>
          <h1>Todo List</h1>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} todoUpdate={this.todoUpdate} updateOverdue={this.updateOverdue} delTodo={this.delTodo}/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
