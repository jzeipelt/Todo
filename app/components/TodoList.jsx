import React from 'react'
import {connect} from 'react-redux'
import Todo from 'Todo'
import filterTodos from 'TodoAPI'

export class TodoList extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    var {todos, showCompleted, searchText} = this.props
    var renderTodos = () => {
      var filteredTodos = filterTodos(todos, showCompleted, searchText)
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing to do.</p>
        )
      } else return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        )
      })
    }
    return (
      <div>
        {renderTodos()}
      </div>
    )
  }
}

export default connect(
  (state) => {
    return state
  }
)(TodoList)
