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

export const emogiChatSet = (data) => {
  return {
    type: actionType.EMOGI_CHAR,
    payload: data,
  };
};

export const removeEmogi = () => {
  return {
    type: actionType.REMOVE_EMOGIS,
  };
};
