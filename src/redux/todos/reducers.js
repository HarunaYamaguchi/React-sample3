import * as Actions from './actions';
import initialState from '../store/initialState';
// import { makeStyles } from '@material-ui/core';

export const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
      case Actions.ADD_TODO:
        return {
          ...state,
          todos:[...action.payload],
        };
      default:
        return state
    }
}