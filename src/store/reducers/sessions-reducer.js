const INITIAL_STATE = {
  loading: true,
  sessions: []
};

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {
  case 'UPDATE_SESSIONS':
    return { ...state, sessions: action.sessions, loading: false };
  default:
    return state;
  }
};

export default reducer;
