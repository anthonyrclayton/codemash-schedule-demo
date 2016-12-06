export const updateSessions = (sessions) => {
  console.log('updateSessions action', sessions)

  return {
    type: 'UPDATE_SESSIONS',
    sessions
  };
}
