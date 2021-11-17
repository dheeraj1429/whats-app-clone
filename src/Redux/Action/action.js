import { actionType } from "../ActionType/actionType";

export const chatUser = (data) => {
  return {
    type: actionType.CHAT_USER,
    payload: data,
  };
};

export const currentUser = (data) => {
  return {
    type: actionType.CURRENT_USER,
    payload: data,
  };
};
