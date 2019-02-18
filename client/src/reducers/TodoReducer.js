// // if you want to show initial data :)
// const INITIAL_DATA = [
//   {
//     id: 0,
//     text: 'Walk the Dog'
//   },
//   {
//     id: 1,
//     text: 'learn Redux'
//   }
// ];
import moment from 'moment';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

// if you want to show initial data :)
const INITIAL_DATA = [
  {
    id: 0,
    todotext: 'Respond to Baanda Survey ASAP.',
    priority: 'high',
    tasknotes: '',
    startDate: moment()
  },
  {
    id: 1,
    todotext: 'Broadcast the arrival of cooperation-&-togetherness engine.',
    priority: 'medium',
    tasknotes: '',
    startDate: moment()
  },
  {
    id: 2,
    todotext: 'This is a stupid task of doing nothing. You can delete this.',
    priority: 'low',
    tasknotes: '',
    startDate: moment()
  }
];
//const INITIAL_DATA = [];

const TodoReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log(
      //   'in reducer :' +
      //     action.text.todotext +
      //     '|| priority:' +
      //     action.text.priority
      // );
      if (action.text.todotext.trim()) {
        return [
          ...state,
          {
            id: action.id,
            todotext: action.text.todotext,
            priority: action.text.priority,
            tasknotes: action.text.tasknotes,
            startDate: action.text.startDate,
            completed: false
          }
        ];
      } else {
        return state; // return the same state if todotext is null or blank
      }
    //break;
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case REMOVE_TODO:
      const numIndex = parseInt(action.id, 10);
      return state.filter(todo => todo.id !== numIndex);
    default:
      return state;
  }
};

export default TodoReducer;
