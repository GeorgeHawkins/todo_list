import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    task: '',
    due: '',
    time: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.task, new Date(this.state.due + ' ' + this.state.time));
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value});

  render() {
    return (
      <form className='AddForm' onSubmit={this.onSubmit}>
        <input type='text' 
        className='TextInput' 
        name='task' 
        placeholder='Add todo..' 
        value={this.state.task} 
        onChange={this.onChange}
        required={true}
        />
        <div className='FormRow'>
          <input type='date'
          className='DateInput'
          name='due'
          onChange={this.onChange}
          required={true}
          />

          <input type='time'
          className='TimeInput'
          name='time'
          onChange={this.onChange}
          required={true}
          />
          <button type='submit' className='SubmitButton'>Add Todo</button>
        </div>
        
      </form>
    )
  }
}

export default AddTodo
