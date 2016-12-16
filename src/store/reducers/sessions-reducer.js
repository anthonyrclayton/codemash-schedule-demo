import R from 'ramda'

const INITIAL_STATE = {
  loading: true,
  sessions: [],
  filters: ["Kidz Mash"]
};

const byStartTime = R.groupBy((session) => {
  return session.SessionStartTime.toString()
})

let sessionsData = []

const applyFilters = (sessions, filters) => {
  return R.reject((s) => R.contains(s.SessionType)(filters))(sessions)
}

const toggleFilter = (filter, filters) => {
  if(R.contains(filter)(filters)) {
    return R.without([filter])(filters)
  }

  return R.append(filter, filters)
}

export const applyFilter = (filter) => {
  return { type: 'UPDATE_FILTERS', filter }
}

const reducer = (state = INITIAL_STATE, action = {}) => {
  switch(action.type) {

  case 'UPDATE_FILTERS':
    let filters = toggleFilter(action.filter, state.filters)

    return {
      ...state,
      filters,
      sessions: byStartTime(applyFilters(sessionsData, filters))
    }
  case 'UPDATE_SESSIONS':
    sessionsData  = action.sessions

    return {
      ...state,
      sessions: byStartTime(applyFilters(action.sessions, state.filters)),
      loading: false
    }
  default:
    return state;
  }
};

export default reducer;
