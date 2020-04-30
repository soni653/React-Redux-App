import React from "react";
import { connect } from "react-redux";

import { getQuote } from "../actions";

const Quotes = ({ getQuote, quote, isFetching, error }) => {
  if (error !== "")
    return (
      <div>
        <h2>{error}</h2>
        <button onClick={getQuote}>Load New Cat Fact</button>
      </div>
    );

  if (isFetching) {
    return <h2>Fetching a quote now :)</h2>;
  } else {
    return (
      <div>
        <h2>Cat Fact: {quote}</h2>
        <button onClick={getQuote}>Load New Cat Fact</button>
      </div>
    );
  }
};

// hook up the connect to our store
const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getQuote }
)(Quotes);
