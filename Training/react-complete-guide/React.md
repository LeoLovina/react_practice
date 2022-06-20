# Concept
- React is a JavaScript library for building user interfaces
- All about components. All user interfaces in the end are made up of components
    - combine HTML, CSS and JavaScript in components
    - combine components together to build user interface. 
- nodejs
    - It isn't directly related to React. It's not the end a runtime for JavaScript which would allow you to run JavaScript code outside of the browser. 
    - Use node.js for development preview server
- use NPM to transform the JSX to javascript code  
- A component in React is just a JavaScript function. A special JavaScript function that use JSX code to return HTML.
- JSX code is just syntactic suger and has transformed two methods called on React object.
- Split an application into smaller building blocks (components). Every component is focused on one core task. 
# props
- are arguments passed into React components.
- are passed to components via HTML attributes
## props.children 
- is a built property. 
- is a reserved name in props
- it is used to display whatever you include between the opening and closing tags when invoking a component.
``` javascript 
<Component name='John' /> 

function Component(props){
    return (<div>Hello {props.name} <div>)
}
```

# sub folder
- general user interface component
- feature specific component




    

