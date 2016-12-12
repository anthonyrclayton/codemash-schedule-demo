import R from 'ramda'

const INITIAL_STATE = {
  loading: true,
  sessions: []
};

//const normalize = (object, session) => {
//  object[session.Id] = session
//  return object
//}

const byStartTime = R.groupBy((session) => {
  return session.SessionStartTime.toString()
})

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {

  case 'UPDATE_SESSIONS':
    return {
      ...state,
      sessions: byStartTime(action.sessions),
      loading: false
    }
  default:
    return state;
  }
};

export default reducer;
