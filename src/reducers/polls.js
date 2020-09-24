import {ADD_POLL, RECEIVE_POLLS} from '../actions/polls'

export default function polls ( state = {}, action){
    switch (action.type) {
      case RECEIVE_POLLS:
        return {
          ...state,
          ...action.polls, //spread to previous state
        };
      case ADD_POLL:
        return {
            ...state,
            [action.poll.id]:action.poll
        }
      default:
        return state;
    }
}