This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Install Steps
- install React
    - npx create-react-app app_name --typescript
- install Material UI framework
    - npm install @material-ui/core
- install material-ui/icons
    - npm install @material-ui/icons

-- install react-test-renderer 
    - JavaScript version
        - npm install @react-test-renderer   
    - TypeScript version
        - npm install @types/react-test-renderer      

-- install redux
    - npm install --save @types/react-redux
-- How to debug test script
    - https://create-react-app.dev/docs/debugging-tests
    - Add `"test:debug": "react-scripts --inspect-brk test --runInBand --no-cache"` to package.json-> scripts
    - add `debugger` on .test.tsx (or js)
    - run `npm run test:debug`
    - open `about:inspect` on Chrome
    - inspect process

# Note
-  In C#, every property and field without an explicit access modifier is private. In TypeScript it's public, obviously.

- disable `implicitly has an 'any' type. `
https://stackoverflow.com/questions/47848778/parameter-implicitly-has-an-any-type?rq=1
    - edit the tsconfig.js
```
// disable this rule:
// "strict": true,

// enable this rule:
"noImplicitAny": false
```


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

