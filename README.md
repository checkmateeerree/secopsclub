# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It was designed using [Bootswatch](https://bootswatch.com), [React-Bootstrap](https://react-bootstrap.github.io/), and some [inline CSS](https://www.w3schools.com/Css/).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<<<<<<< HEAD
# Now, On To The Actual Project
=======
# Now, On to the Actual Project!
Disclaimer: This is our scuffed attempt at being full-stack web developers. When you take over you can probably refactor a bunch of the code to make it cleaner.
## Frontend
### Rendered Components
We have divided our frontend side of the project into 2 parts:
  1. Screens
  - These are the Components that actually get rendered to the UI of the website. For example, a homescreen, a loginscreen, etc. 
  - They are in the src/screens folder.
  2. Components
  - These components are compounded together to make the screens. They are the individual parts that get put together after their development. For example, a Header, a Footer, and a Profile component will go together as one Profile screen. 
  - Because we didn't know how else to do this, we split the components into 2 groups: components and LoggedInComponents. The LoggedInComponents are specifically rendered if the user is logged in. (authentication will be covered later). 
  - The components are in the src/components folder and src/LoggedInComponents folder.
### Individual Screens
**All Screens Contain the Header and Footer Components**
- **Not Logged In** HomeScreen
     - Page that is rendered when user intially opens the website. "/"
     - Contains 3 Different Unique Components:
      1. Objective Of Website. This component showcases a general oversight of why our club is important. 
      2. Our Mission. This component displays a preview of our club curriculum and mission statement.
      3. Interested in Joining. 
- LoginScreen
     - A nested numbered list
     - Which is numbered
- DonationScreen
     - A nested numbered list
     - Which is numbered
- RegistrationScreen
     - A nested numbered list
     - Which is numbered
- NotFoundPage
     - Simply a 404 page in case someone types in a non-existent url path or something like that.
- DocumentScreen
     - A nested numbered list
     - Which is numbered


>>>>>>> 03ba2bdfb8127003a97487f2d17caa90821c8fd1
