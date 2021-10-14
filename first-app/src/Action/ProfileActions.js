import CHANGE_NAME from "../Store/Types/profileTypes";

export const setName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});