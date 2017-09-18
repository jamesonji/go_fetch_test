const INITIAL_STATE = [
  {
    id: 0,
    name: 'Song',
  },
  {
    id: 1,
    name: 'Joyce',
  }
];

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
        action.user,
      ];
    default:
      return state
  }
}

export default users