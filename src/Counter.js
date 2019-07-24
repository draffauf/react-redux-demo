import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from './actions';

class Counter extends React.Component {
  increment = () => {
    this.props.dispatch({ type: INCREMENT });
  };
  
  decrement = () => {
    this.props.dispatch({ type: DECREMENT });
  };

  reset = () => {
    this.props.dispatch({ type: RESET });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// First, map the store state to props
// Second, return a function that takes Counter
export default connect(mapStateToProps)(Counter);
