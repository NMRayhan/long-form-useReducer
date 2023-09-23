import { actionType } from "./actionType";

export const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  count: 0,
  feedback: "",
  term: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case actionType.TOGGLE:
      return { ...state, term: !state.term };

    case actionType.INCREMENT:
      return { ...state, count: state.count + 1 };

    case actionType.DECREMENT:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };

    default:
      return state;
  }
};
