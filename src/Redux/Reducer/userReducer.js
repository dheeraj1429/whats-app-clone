import { actionType } from "../ActionType/actionType";

const initalStae = {
  currentUser: [],
  chatUser: [],
};

const userReducer = (state = initalStae, action) => {
  switch (action.type) {
    case actionType.CHAT_USER:
      return {
        ...state,
        chatUser: action.payload,
      };

    case actionType.CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
