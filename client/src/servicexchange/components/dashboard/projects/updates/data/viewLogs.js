export const viewLogs = [
  {
    id: 0,
    taskName: 'Suspendisse id',
    taskCategory: 'Procure',
    parentTask: 'Art-Gallery',
    description: 'Nam bibendum mollis tellus eget dignissim. Aliquam euismod turpis non orci hendrerit, non ultricies lorem dignissim.',
    beginDate: '01/12/2019',
    endDate: '01/28/2019',
    lastState: 35,  // Percentage complete 
    assignTeam: 'Elephants,',  // If it has been assigned to the whole team  
    assignMembers: 'Angelo',
    deliverable: 'Sed justo tortor, fermentum sed ipsum vitae, elementum convallis elit. Proin egestas lorem vel dui vestibulum, eget consectetur tellus interdum. Cras sapien nibh, scelerisque sit amet tellus at, porta accumsan lorem. ',
    lastUpdatedBy: 'Angelo',
    request: 'Inspect',
    status: 'Work In Progress',
    comments : [
      {
        seq: 1,
        by: 'Steve',
        comment: 'Praesent pulvinar fermentum ligula. Ut tempor sem non lectus lobortis ornare. In libero enim, molestie vel est commodo, dictum malesuada libero.'
      },
      {
        seq: 2,
        by: 'Sapho',
        comment: 'Sed justo tortor, fermentum sed ipsum vitae, elementum convallis elit. Proin egestas lorem vel dui vestibulum, eget consectetur tellus interdum. Cras sapien nibh, scelerisque sit amet tellus at, porta accumsan lorem.'
      }
    ]
  },
  {
    id: 1,
    taskName: 'Praesent pulvinar',
    taskCategory: 'Painting',
    parentTask: 'Elephant',
    description: 'Pellentesque in lobortis ante. Morbi consectetur lobortis metus, et efficitur risus sodales id. Suspendisse potenti. Donec eu nunc tempus, vehicula leo vitae, efficitur magna.',
    beginDate: '01/22/2019',
    endDate: '02/07/2019',
    lastState: 100,  // Percentage complete 
    assignTeam: '',  // If it has been assigned to the whole team
    assignMembers: 'Jane Austin, Angelo',  
    deliverable: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo augue, posuere non turpis sit amet, semper consequat massa.',
    lastUpdatedBy: 'Jane',
    request: '',
    status: 'Completed & Paid',
    comments : [
      {
        seq: 1,
        by: 'Dali',
        comment: 'Praesent pulvinar fermentum ligula. Ut tempor sem non lectus lobortis ornare. In libero enim, molestie vel est commodo, dictum malesuada libero.'
      }
    ]
  },
  {
    id: 2,
    taskName: 'Donec ornare',
    taskCategory: 'Security',
    parentTask: 'Hippos,',
    description: 'Praesent aliquet mattis mauris. Pellentesque non turpis ac lorem mollis convallis. Praesent eget imperdiet purus, a hendrerit sem.',
    beginDate: '01/29/2019',
    endDate: '02/14/2019',
    lastState: 95,  // Percentage complete 
    assignTeam: '',  // If it has been assigned to the whole team
    assignMembers: 'Mercus Orilius, Angelo',  
    deliverable: 'Sed euismod neque vel risus pretium convallis sit amet sed felis. Etiam quis egestas lacus, id tempor augue. Fusce sodales erat eget nisl lobortis, non pretium ex rhoncus.',
    lastUpdatedBy: 'Mercus',
    request: 'Request for Inspection',
    status: 'Completed & Pending Inspection',
    comments : [
      {
        seq: 1,
        by: 'Mercus',
        comment: 'Praesent pulvinar fermentum ligula. Ut tempor sem non lectus lobortis ornare. In libero enim, molestie vel est commodo, dictum malesuada libero.'
      },
      {
        seq: 2,
        by: 'Chang',
        comment: 'Sed justo tortor, fermentum sed ipsum vitae, elementum convallis elit. Proin egestas lorem vel dui vestibulum, eget consectetur tellus interdum. Cras sapien nibh, scelerisque sit amet tellus at, porta accumsan lorem.'
      }
    ]
  },
  {
    id: 3,
    taskName: 'Curabitur accumsan',
    taskCategory: 'Setup',
    parentTask: 'Hawks,',
    description: 'Pellentesque in lobortis ante. Morbi consectetur lobortis metus, et efficitur risus sodales id. Suspendisse potenti. Donec eu nunc tempus, vehicula leo vitae, efficitur magna.',
    beginDate: '02/15/2019',
    endDate: '02/28/2019',
    lastState: 7,  // Percentage complete 
    assignTeam: '',  // If it has been assigned to the whole team
    assignMembers: 'Nelson, Angelo',  
    deliverable: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo augue, posuere non turpis sit amet, semper consequat massa.',
    lastUpdatedBy: 'Nelson',
    request: '',
    status: 'Work in Progress',
    comments : []
  },
  {
    id: 4,
    taskName: 'Quisque gravida',
    taskCategory: 'Setup',
    parentTask: 'Hawks',
    description: 'Sed eu lacinia urna. Donec lacinia facilisis urna, non maximus orci pulvinar accumsan. Sed justo tortor, fermentum sed ipsum vitae, elementum convallis elit.',
    beginDate: '12/15/2018',
    endDate: '01/05/2019',
    lastState: 35,  // Percentage complete 
    assignTeam: '',  // If it has been assigned to the whole team
    assignMembers: 'Neil, Angelo',  
    deliverable: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc justo augue, posuere non turpis sit amet, semper consequat massa.',
    lastUpdatedBy: 'Neil',
    request: '',
    status: 'Cancelled',
    comments : [
      {
        seq: 1,
        by: 'Steve',
        comment: 'Praesent pulvinar fermentum ligula. Ut tempor sem non lectus lobortis ornare. In libero enim, molestie vel est commodo, dictum malesuada libero.'
      },
      {
        seq: 2,
        by: 'Sapho',
        comment: 'Sed justo tortor, fermentum sed ipsum vitae, elementum convallis elit. Proin egestas lorem vel dui vestibulum, eget consectetur tellus interdum. Cras sapien nibh, scelerisque sit amet tellus at, porta accumsan lorem.'
      },
      {
        seq: 3,
        by: 'Einstein',
        comment: 'Praesent pulvinar fermentum ligula. Ut tempor sem non lectus lobortis ornare. In libero enim, molestie vel est commodo, dictum malesuada libero.'
      }
    ]
  },
  
]