const INITIAL_STATE = [
  {
    id: 1505769707425,
    content: 'Return books',
    completed: false,
    userId: 1,
  }, {
    id: 1505769768202,
    content: 'Email John',
    completed: true,
    userId: 0,
  },  {
    id: 1505769776114,
    content: 'Pay bills',
    completed: false,
    userId: 0,
  }, {
    id: 1505769783459,
    content: 'House cleaning',
    completed: false,
    userId: 1,
  },
];


const tasks = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.task,
      ];
    case 'TOGGLE_TASK':
      return state.map(task =>
        (task.id === action.taskId)
          ? {...task, completed: !task.completed}
          : task
      );

    case 'REMOVE_TASK':
      return state.filter(task =>
        task.id !== action.taskId
      );
    default:
      return state
  }
};

export default tasks