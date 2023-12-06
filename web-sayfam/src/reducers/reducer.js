import { TOGGLE_THEME } from "../actions/actions";

const initialState = {
  darkMode: localStorage.getItem('darkMode') === 'true' || false,
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      const darkMode = !state.darkMode;
      localStorage.setItem('darkMode', darkMode);
      return {
        ...state,
        darkMode: darkMode,
      };
    default:
      return state;
  }
};

export default Reducer;