# React Forms :memo:

## Quick Review

### Components

- Can be functional or class component
- Functional: used to not be able to handle state(until hooks was introduced), does not need render method, props need to be passed in as argument and accessed via props.propName
- Class Components: handles state, needs render method, can access props via this.props

### State

- Reserved for data that changes and is visible in our UI
- Initialize state: constructor function, setting class property [docs](https://medium.com/bb-tutorials-and-thoughts/different-ways-to-initialize-state-in-react-e9ecedf1f9fa)
- Accessing state: ```this.state.<property name>```
- Passing state: Use props! 
- Changing state: ```setState()``` [docs](https://reactjs.org/docs/react-component.html#setstate)

### Events

- React has its own SyntheticEvent system for cross-browser compatibility
- Similar to HTML events, only difference is camelCase
- Event handlers are invoked inside ```{}``` i.e. ```onClick={eventHandler}```
- Event handlers: Using arrow functions will bind this to the component that owns the method
- Provide an event listener in elements initial render
- Common pattern: Event handler defined as a method on class
- Class fields used to bind call backs/ Arrow functions [Class Fields Article](https://dev.to/ascorbic/class-fields-are-coming-heres-what-that-means-for-react--3a87)

## Forms

- [ReactJS Docs - Forms](https://reactjs.org/docs/forms.html)
- Maintains internal state
- Controlled components: The component that owns the form, controls what happens in that form on user input
- ```onChange``` - Event listener added to `input` elements, will be invoked upon users input
- 

### Good to know! :brain:

- NPM vs Yarn [doc](https://stackshare.io/stackups/npm-vs-yarn)
- Strict Mode [doc](https://reactjs.org/docs/strict-mode.html)
- Super(props) [doc](https://dev.to/voralagas/super-props-in-react-5h7i)
- Conditional rendering [doc](https://reactjs.org/docs/conditional-rendering.html)
- Changing state of a child component from parent component [doc](https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/)
- Lifting State Up [doc](https://reactjs.org/docs/lifting-state-up.html)
- Spread operator [doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
