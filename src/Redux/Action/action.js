import { actionType } from "../ActionType/actionType";

export const chatUser = (data) => {
  return {
    type: actionType.CHAT_USER,
    payload: data,
  };
};
