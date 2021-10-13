import CHANGE_NAME from "../Store/Types/ProfileTypes";

export const setName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});