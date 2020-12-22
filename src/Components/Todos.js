import React, { Component } from 'react';
import TodoIndividual from './TodoIndividual'

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoIndividual key={todo.id} todo={todo} todoUpdate={this.props.todoUpdate} updateOverdue={this.props.updateOverdue} delTodo={this.props.delTodo}/>
    ));
  }
  
}

export default Todos;
