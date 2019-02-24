//import moment from 'moment';
//import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';
//import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

// if you want to show initial data :)
// const INITIAL_DATA = [
//   {
//     id: 0,
//     Title: 'Work After School',
//     message: 'Interested in your profile. Like to take the next step.',
//     from: 'CBTL-Barrister-123',
//     fromPostName: 'CBTL-Barrister-123',
//     type: 'service-provider',
//     postName: 'Survival-10',
//     startDate: moment(),
//     invite: true
//   },
//   {
//     id: 1,
//     Title: 'Mentor Artist YYY',
//     message:
//       'I see you are studying finearts in SMC and with a strange combination with technology. I like it. Next step?',
//     from: 'Seeking Art Mentor:',
//     fromPostName: 'LA-Art-123',
//     type: 'master',
//     postName: 'Passion-AA',
//     startDate: moment(),
//     invite: false
//   }
// ];
const INITIAL_DATA = [
  {
    id: 0,
    senderPostCaptionName: 'CBTL Barrister Wanted',
    readState: false,
    yourRefPostName: 'survival-10',
    description:
      'Looking for junior barrister in CBTL. Willing to work with students around school times.',
    senderAddress: '829 Wilshire Blvd, Santa Monica, CA 90401',
    skillList: 'Friendly personality, hard-working, responsible',
    workLocationType: 'in-location', // or remote or combination
    workType: 'hourly-work', // project, hourly-work, employment
    datePosted: '2018/11/14', // string for now
    contactType: false, // new or interest ... true=post interest exchange
    messageType: 'text' // audio, video, text
  },
  {
    id: 1,
    senderPostCaptionName: 'Seek Art Prodigy',
    readState: false,
    yourRefPostName: 'Passion-AA',
    description:
      'I am an painter, mostly oil. I have a small gallery in downtown LA. Will mentor in exchange of work.',
    senderAddress: '743 S. Santee St. Unit B, Los Angeles, CA 90014',
    skillList: 'drawing, painting, imagination',
    workLocationType: 'in-location', // remote (false) or in-location (true)
    workType: 'hourly-work', // project, hourly-work, employment
    datePosted: '2018/10/28', // string for now
    contactType: false, // new or interest ... true=post interest exchange
    messageType: 'audio' // audio, video, text
  },
  {
    id: 2,
    senderPostCaptionName: 'Artist for Art-store',
    readState: false,
    yourRefPostName: 'survival-10',
    description:
      'We are looking for art-students to work in art-store, mostly in racking but also adivising customers.',
    senderAddress: '11531 Santa Monica Blvd, Los Angeles, CA 90025',
    skillList: 'understanding of art, painting, friendly, cooperative',
    workLocationType: 'in-location', // remote (false) or in-location (true)
    workType: 'hourly-work', // project, hourly-work, employment
    datePosted: '2018/10/29', // string for now
    contactType: false, // new or interest ... true=post interest exchange
    messageType: 'video' // audio, video, text
  },
  {
    id: 3,
    senderPostCaptionName: 'Artist with Passion',
    readState: true,
    yourRefPostName: 'passion-AA',
    description:
      'We are looking artist interested in co-exhibiting. If you have a scientific mind, it is awesome.',
    senderAddress: '2515 Hawks Next Trail. Topanga, ca 90290',
    skillList: 'Color with details, painting, friendly, imaginative',
    workLocationType: 'combo', // remote (false) or in-location (true)
    workType: 'hourly-work', // project, hourly-work, employment
    datePosted: '2018/10/28', // string for now
    contactType: false, // new or interest ... true=post interest exchange
    messageType: 'dccsReq' // audio, video, text
  },
  {
    id: 4,
    senderPostCaptionName: 'Baanda SX',
    readState: true,
    yourRefPostName: 'survival-10',
    description:
      'We are looking for forward thinking and innovation oriented programmer, particularly with some fullstack MERN background.',
    senderAddress: '2515 Hawks Next Trail. Topanga, ca 90290',
    skillList: 'Programming, React, MongoDB, Javascript etc.',
    workLocationType: 'combo', // remote (false) or in-location (true)
    workType: 'project', // project, hourly-work, employment
    datePosted: '2018/10/28', // string for now
    contactType: false, // new or interest ... true=post interest exchange
    messageType: 'dccsResp' // audio, video, text
  }
];
//const INITIAL_DATA = [];

const sxMessageReducer = (state = INITIAL_DATA, action) => {
  //console.log('sxMessageReducer action:' + JSON.stringify(action));

  switch (action.type) {
    // case ADD_TODO:

    //   if (action.text.messageText) {
    //     return [
    //       ...state,
    //       {
    //         id: action.id,
    //         messageText: action.text.messageText,
    //         priority: action.text.priority,
    //         tasknotes: action.text.tasknotes,
    //         startDate: action.text.startDate,
    //         completed: false
    //       }
    //     ];
    //   } else {
    //     return state; // return the same state if messageText is null or blank
    //   }
    // //break;
    // case TOGGLE_TODO:
    //   return state.map(
    //     todo =>
    //       todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
    //   );

    // case REMOVE_TODO:
    //   const numIndex = parseInt(action.id, 10);
    //   return state.filter(todo => todo.id !== numIndex);
    default:
      return state;
  }
};

export default sxMessageReducer;
