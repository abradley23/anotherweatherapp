import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." autoComplete="off"/>
    <input type="text" name="country" placeholder="Country..." autoComplete="off"/>
    <button>Get Weather</button>
  </form>
)

export default Form