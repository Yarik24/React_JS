import { STATUSES } from "../Action/quotesAction";
import {GET_QUOTE_REQUEST, GET_QUOTE_SUCCESS, GET_QUOTE_FAILURE} from "./Types/quotesTypes";

const InitialState = {
  quotesList: [],
  loading: false,
  request: STATUSES.IDLE,
  error: null,
};

function quotesReducer(state = InitialState, action) {
  switch (action.type) {
    case GET_QUOTE_REQUEST:
      return {
        ...state,
        request: STATUSES.REQUEST,
        loading: true,
        error: null,
      };

    case GET_QUOTE_SUCCESS:
      return {
        ...state,
        quotesList: [...state.quotesList, action.payload],
        request: STATUSES.SUCCESS,
        loading: false,
      };

    case GET_QUOTE_FAILURE:
      return {
        ...state,
        request: STATUSES.FAILURE,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default quotesReducer;