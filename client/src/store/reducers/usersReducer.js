import {REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS} from '../actions/usersActions';

const initialState = {
  registerLoading: false,
  registerError: null,
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {...state, registerLoading: true};
    case REGISTER_USER_SUCCESS:
      return {...state, registerLoading: false, user: action.user};
    case REGISTER_USER_FAILURE:
      return {...state, registerLoading: false, registerError: action.error};
    default:
      return state;
  }
};

export default usersReducer;