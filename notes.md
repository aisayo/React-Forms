# React Forms :memo:

## Quick Review

### Components

- Can be functional or class component
- Functional: used to not be able to handle state(until hooks was introduced), does not need render method, props need to be passed in as argument and accessed via props.propName
- Class Components: handles state, needs render method, can access props via this.props

### State

- Initialize state: constructor function, setting class property [docs](https://medium.com/bb-tutorials-and-thoughts/different-ways-to-initialize-state-in-react-e9ecedf1f9fa)
- Accessing state: ```this.state.<property name>```
- Passing state: Use props! 
- Changing state: ```setState()``` [docs](https://reactjs.org/docs/react-component.html#setstate)

### Events

- Similar to HTML events, only difference is camelCase
- Event handlers are invoked inside ```{}``` i.e. ```onClick={eventHandler}```
- Event handlers: Using arrow functions will bind this to the component that owns the method
- 
