import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";

export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });

  // implement the code calling actions for .then and .catch
  axios
    .get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
    .then(res => {
      console.log(res);

      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data.text });
    })
    .catch(err => {
      console.log(err);

      dispatch({
        type: FETCHING_QUOTE_FAILURE,
        payload: `${err.statusText} with response code ${err.status}`
      });
    });
};
