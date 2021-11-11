const InitialState = { checkbox: false };

function Reducer(state = InitialState, action) {
  switch (action.type) {
    case "SET_CHECKBOX":
      return { ...state, checkbox: !state.checkbox };
    default:
      return state;
  }
}

export default Reducer;