- https://www.valentinog.com/blog/redux/
- state management libraries beautifully keep logic and behaviours abstracted away from the UI. UI testability skyrockets and so developer productivity

# connect 
- connects a React component with the Redux store
- mapStateToProps 
    - it connects a part of the Redux state to the props of a React component. By doing so a connected React component will have access to the exact part of the store it needs
- mapDispatchToProps 
    - it connects Redux actions to the props of a React component. This way a connected React component will be able to dispatch actions.