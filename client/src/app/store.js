import { configureStore } from '@reduxjs/toolkit';
import reducers from '../utils/reducers'

export const store = configureStore({
  reducer: { reducers
  },
});
