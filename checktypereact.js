//CODE 1

// Import React from 'react'
import React from 'react';

// 1. Define an interface for the component's props.
//    Here, we specify that 'name' should be of type string.
interface GreetingProps {
  name: string;
}

// 2. Convert the functional component to TypeScript by using the React.FC (Function Component) type.
//    This adds type-checking for props and ensures proper typing for the component.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // 3. Return a JSX element that uses the typed prop.
  return <div>Hello, {name}!</div>;
};

// 4. Export the component so it can be imported in other files.
export default Greeting;



//CODE 2

// Import React and the Component class from 'react'
import React, { Component } from 'react';

// 1. Define an interface for the component's state.
//    Here, we declare that state will have a 'count' property of type number.
interface CounterState {
  count: number;
}

// 2. Since there are no props for this component, we use an empty object {} as the prop type.
//    We extend React.Component with two generics: props and state.
class Counter extends Component<{}, CounterState> {
  // 3. Initialize the state with a count value of 0.
  state: CounterState = {
    count: 0
  };

  // 4. Define an arrow function for incrementing the count.
  //    TypeScript infers the types here, but you could add explicit types if needed.
  increment = () => {
    // Use setState to update the state based on the previous state's count.
    this.setState({ count: this.state.count + 1 });
  };

  // 5. Render method returns the JSX structure.
  render() {
    return (
      <div>
        {/* Display the current count */}
        <p>Count: {this.state.count}</p>
        {/* Button to trigger the increment function on click */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// 6. Export the Counter component as the default export.
export default Counter;
