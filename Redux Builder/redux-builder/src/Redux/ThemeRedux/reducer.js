import { CHANGE_THEME } from "../actionType";

const initialState = {
  theme: "light",
};
export const reducer = (state = initialState, { type,payload }) => {
  switch (type) {
    case CHANGE_THEME:
        return { ...state, theme: payload };
    default:
      return state;
  }
};
