var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    it('should toggle a todo', () => {
      var todos = [
        {
          id: 1,
          text: 'Go out sometime',
          completed: false,
          createdAt: 1,
          completedAt: undefined
        },
        {
          id: 2,
          text: 'Go in again',
          completed: true,
          createdAt: 1,
          completedAt: 1000
        }
      ]
      var action = {
        type: 'TOGGLE_TODO',
        id: 2
      }
      var res = reducers.todosReducer(df(todos), df(action));
      expect(res.length).toEqual(2);
      expect(res[1].completed).toEqual(false);
      expect(res[1].completedAt).toEqual(undefined);
    });
  });
});
