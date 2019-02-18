const INITIAL_DATA = [
  {
    id: 0,
    engagementName: 'Gallery Co-op',
    description:
      'Gallery coop is an endeavor to host artwork of emerging artists',
    engagementMgr: 'Angelo',
    engagementType: 'co-op',
    status: true, // active
    authorization: 'full' // full, participate, view
  },
  {
    id: 1,
    engagementName: 'CBTLSM Jr.Barista-10',
    description: 'Work in CBTL-SM as jr. barista as after school scheduling',
    engagementMgr: 'Washington',
    engagementType: 'time-based', // project, time-based, coop, apprentice
    status: false, // to be activated
    authorization: 'participate' // full, participate, view
  }
];
//const INITIAL_DATA = [];

const sxProjectReducer = (state = INITIAL_DATA, action) => {
  //console.log('sxProjectReducer action:' + JSON.stringify(action));

  switch (action.type) {
    // case ADD_TODO:

    default:
      return state;
  }
};

export default sxProjectReducer;
