import {combineReducers} from 'redux';
import app from './app';
import ui from './ui';

export default combineReducers({
  app: app.reducer,
  ui: ui.reducer,
});
