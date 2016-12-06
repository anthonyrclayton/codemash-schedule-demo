import { createStore } from 'redux';

import reducer from './reducers/sessions-reducer';

const store = createStore(reducer);

export default store;
