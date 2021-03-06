import * as fromAuthentication from '../actions/authentication-state.actions';
import { fromUser } from '@labdat/user';
import { StatusState } from '../states/status.state';

const initialStatusState: StatusState = {
  user: undefined
};

export function statusReducer(state = initialStatusState, action: fromAuthentication.Actions | fromUser.Actions): StatusState {
  switch (action.type) {
    case fromAuthentication.USER_LOAD_SUCCESS:
    case fromAuthentication.REGISTER_SUCCESS:
    case fromAuthentication.LOGIN_SUCCESS: {

      return {
        ...state,
        user: action.payload.user
      };
    }
    case fromAuthentication.LOGOUT: {

      return {
        ...state,
        ...initialStatusState
      };
    }
    case fromAuthentication.USER_UPDATE_SUCCESS: {
      return {
        ...state,
        user: action.payload.user
      };
    }
    case fromUser.UPDATE_SUCCESS: {
      return {
        ...state,
        user: action.payload.user.changes
      };
    }
    default: {
      return state;
    }
  }
}
