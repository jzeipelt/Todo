var expect = require('expect')
var df = require('deep-freeze-strict')
var reducers = require('reducers')

describe('Reducers', () => {
  describe('authReducer', () => {
    it('should store uid in auth on LOGIN', () => {
      const action = {
        type: 'LOGIN',
        uid: '54321'
      }
      const res = reducers.authReducer(undefined, df(action))
      expect(res).toEqual({uid: action.uid})
    })
    it('should wipe auth on LOGOUT', () => {
      const authData = {
        uid: '123def'
      }
      const action = {
        type: 'LOGOUT'
      }
      const res = reducers.authReducer(df(authData), df(action))
      expect(res).toEqual({})
    })
  })

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      }
      var res = reducers.searchTextReducer(df(''), df(action))
      expect(res).toEqual(action.searchText)
    })
  })

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      var res = reducers.showCompletedReducer(df(false), df(action))
      expect(res).toEqual(true)
    })
  })

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Walk the dog',
          completed: false,
          createdAt: 2342342
        }
      }
      var res = reducers.todosReducer(df([]), df(action))
      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
    })
    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]
      var action = {
        type: 'ADD_TODOS',
        todos
      }
      var res = reducers.todosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })
    it('should update a todo', () => {
      var todos = [{
          id: 2,
          text: 'Go in again',
          completed: true,
          createdAt: 1,
          completedAt: 1000
      }]
      var updates = {
        completed: false,
        completedAt: null
      }
      var action = {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
      }
      var res = reducers.todosReducer(df(todos), df(action))
      expect(res.length).toEqual(1)
      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todos[0].text)
    })
    it('should wipe todos on logout', () => {
      var todos = [{
        id: 111,
        text: 'anything',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]
      var action = {
        type: 'LOGOUT'
      }
      var res = reducers.todosReducer(df(todos), df(action))
      expect(res.length).toEqual(0)
    })
  })
})
