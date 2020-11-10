import { REGISTER_SUCCESS } from "./user.action.type";

export function loginUser({userData}) {
    return {
      type: REGISTER_SUCCESS,
      payload: userData.payload
    }
  }