import sessionsReducer from './sessions-reducer';
import R from 'ramda'

it('has a sensible default state.', () => {
  const state = sessionsReducer()

  expect(state.loading).toEqual(true)
});


it('UPDATE_SESSIONS normalizes sessions', () => {
  const initialState = sessionsReducer();

  const action = {
    type: "UPDATE_SESSIONS",
    sessions: [
      {
        Id: 1,
        SessionStartTime: "2017-01-10T12:00:00",
        Title: 'Great'
      },
      {
        Id: 2,
        SessionStartTime: "2017-01-10T12:00:00",
        Title: 'Great'
      },
      {
        Id: 3,
        SessionStartTime: "2017-01-10T10:00:00",
        Title: 'Great'
      }
    ]
  };


  const state = sessionsReducer(initialState, action);

  expect(state.loading).toEqual(false);
  expect(state.sessions[1].Title).toEqual('Great');
  expect(R.keys(state.times).length).toEqual(2)
});
