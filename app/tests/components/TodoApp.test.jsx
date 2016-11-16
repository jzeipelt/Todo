var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(<TodoApp/>).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'Test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].text).toBe(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle incomplete todo when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle complete todo when handleToggle called', () => {
    var todoData = {
      id: 12,
      text: 'Test2',
      completed: true,
      createdAt: 0,
      completedAt: 1
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    todoApp.handleToggle(12);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toBe(undefined);
  });
});
