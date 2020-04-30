import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS,
    FETCHING_QUOTE_FAILURE
  } from "../actions";
  
  const initialState = {
    quote: null,
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_QUOTE_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_QUOTE_SUCCESS:
        return {
          ...state,
          isFetching: false,
          quote: action.payload
        };
      case FETCHING_QUOTE_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: "There was an error."
        };
      default:
        return state;
    }
  };
  