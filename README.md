## Getting Started :

* Change node & npm version with require version of the project.
* Run npm install to install project dependencies.
* Add require vs code extensions as below.
    * SonarLint
    * Prettier - Code formatter
    * GitLens — Git supercharged
    * Git History
* Follow commitlint rules helps your team adhering to a commit convention. (Refer: commitlint.config.js file)

## Learn More About Folder Structure :
```
└── src
    ├── api
    │   └── apiHandler.js
    ├── components
    │   └── Test
    |         └── index.js
    ├── pages
    │   └── InitialPage.js
    ├── index.js
    ├── reducers
    │   └── index.js
    ├── routes.js
    ├── store.js
    └── utils
        └── index.js
```

## Available Scripts :

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

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

### `npm run start:dev`
Runs the app in the local mode.<br />
app run with development environment.

### `npm run start:staging`
Runs the app in the local mode.<br />
app run with staging environment.

### `npm run start:prod`
Runs the app in the local mode.<br />
app run with production environment.

## Learn More About environments Structure :
```
└── environments
    ├── create ".dev.env" name file & add your development variables in this file.
    ├── create ".prod.env" name file & add your production variables in this file.
    ├── create ".staging.env" name file & add your staging variables in this file.
```