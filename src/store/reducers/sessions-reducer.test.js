import sessionsReducer from './sessions-reducer';

it('has a sensible default state.', () => {
  const state = sessionsReducer()

  expect(state.loading).toEqual(true)
});


it('UPDATE_SESSIONS replaces sessions', () => {
  const initialState = sessionsReducer();
  const action = {
    type: "UPDATE_SESSIONS",
    sessions: [{a: 1}]
  };

  const state = sessionsReducer(initialState, action);

  expect(state.loading).toEqual(false);
  expect(state.sessions).toEqual(action.sessions);
});
