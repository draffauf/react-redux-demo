import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

class Counter extends React.Component {
  increment = () => {
    this.props.increment();
  };
  
  decrement = () => {
    this.props.decrement();
  };

  reset = () => {
    this.props.reset();
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

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`. 
const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

// First, map the store state to props
// Second, return a function that takes Counter
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
