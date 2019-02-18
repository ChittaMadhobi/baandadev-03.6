import moment from 'moment';
//import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

// if you want to show initial data :)
const INITIAL_DATA = [
  {
    id: 0,
    Title: 'Work After School',
    message:
      'Looking to work after school (3PM Mon-Friday) and anytime on weekends. Driver: Need to support my student bills. Main skill: Programming, painting (fine-arts) - but can do all odd jobs.',
    from: 'Seeking Work',
    type: 'service-provider',
    postName: 'Survival-10',
    startDate: moment(),
    invite: true
  },
  {
    id: 1,
    Title: 'Mentor Artist',
    message:
      'Looking to be an apprentice of a master-artist to learn tricks of oil-painting, canvas-preperation, and other crafts of the oil-painting dimension in exchange of serviecs & marginal fee (negotiable).',
    from: 'Seeking Art Mentor:',
    type: 'apprentice',
    postName: 'Passion-AA',
    startDate: moment(),
    invite: false
  }
];
//const INITIAL_DATA = [];

const sxPursuitReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TODO:
      // console.log(
      //   'in reducer :' +
      //     action.text.messageText +
      //     '|| priority:' +
      //     action.text.priority
      // );
      if (action.text.messageText) {
        return [
          ...state,
          {
            id: action.id,
            messageText: action.text.messageText,
            priority: action.text.priority,
            tasknotes: action.text.tasknotes,
            startDate: action.text.startDate,
            completed: false
          }
        ];
      } else {
        return state; // return the same state if messageText is null or blank
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

export default sxPursuitReducer;
