import React, { Component } from 'react';

export class TodoIndividual extends Component {
  todoStyle = () => {
      switch (this.props.todo.todoState) {
        case 'complete':
          return {
            textDecoration: 'line-through'
          }
        case 'overdue':
          return {
            color: 'red'
          }
        default:
      }
  }

  dueHide = () => {
    return {
      display: this.props.todo.todoState === 'complete' ? 'none' : ''
    }
  }

  stateStyle = () => {
    switch (this.props.todo.todoState) {
      case 'complete':
        return {
          color: '#76B947'
        }
      case 'overdue':
        return {
          color: 'red'
        }
      default:
    }
  }
  //updates the state of a todoitem after a checkbox change
  findCheckValue = (e) => {
    this.props.todoUpdate(this.props.todo.id, e.target.checked);
  }
  //updates the state of a todoitem to overdue
  updateOverdue = () => {
    this.props.updateOverdue(this.props.todo.id);
  }

  componentDidMount() {
    //check if task is overdue on creation of component
    if (this.props.todo.due.getTime() < new Date().getTime()) this.updateOverdue();
  }

  render() {
    const { task, todoState, due, id } = this.props.todo;
    let hour = due.getHours()
    let ampm = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12;
    hour = hour ? hour : 12;
    let time = hour + ampm;
    
    return (
      <div className='TodoItem'>
          <input type='checkbox' className='Checkbox' onChange={this.findCheckValue}/>
          <div className='TodoFlexContainer'>
            <span className='TodoTask' style={this.todoStyle()}>{task}</span>
            <span className='TodoDue' style={this.dueHide()}>Due: {due.getDate()}/{due.getMonth()+1} {time} </span>
          </div>
          <div className='TodoStateContainer'>
            <span className='TodoState' style={this.stateStyle()}>{todoState}</span>
            <button className='DeleteButton' onClick={this.props.delTodo.bind(this, id)}>x</button>
          </div>

      </div>
    )
  }
}

export default TodoIndividual