This repository contains the code of four JavaScript projects showing how to create a Web Component and using it across different frameworks. You will find the following projects:

- *auth0-login-button*. This project implements a login button Web Component that authenticates with Auth0
- *secure-angular-app*. This is a basic Angular app using the Auth0 login button
- *secure-react-app*. This is a basic React app using the Auth0 login button
- *secure-vue-app*. This is a basic Vue app using the Auth0 login button

The following article describes the implementation details: **[Beyond JavaScript Frameworks: Build a Universal Login Button as a Web Component](https://auth0.com/blog/beyond-javascript-frameworks-universal-login-web-component)**

## Requirements

- [Node.js](https://nodejs.org) installed on your machine
- An [Auth0](https://auth0.com/) account.
- [Angular CLI](https://cli.angular.io/) installed on your machine (to run the Angular project)
- [Vue CLI](https://cli.vuejs.org/) installed on your machine (to run the Vue project)

## Running the applications

### Preliminary steps

1. Clone this repo: `git clone https://github.com/auth0-blog/auth0-login-button.git`

2. Move into the `auth0-login-button/auth0-login-button` folder

3. Run the following command (it may require admin privileges)

   ```shell
   npm link
   ```

   This command makes the project available as if it was an *npm* package.

4. [Register an Auth0 application](https://manage.auth0.com/) and get the domain and the client id.



### Running the Web Component project

1. Move into the `auth0-login-button` folder
2. Replace the YOUR_DOMAIN and YOUR_CLIENT_ID placeholders in the `/dist/index.html` file with your Auth0 domain and client id
3. Add `http://localhost:8080` as an allowed callback and logout URL in the [Auth0 dashboard](https://manage.auth0.com/)
4. Run `npm install` command
5. Run `npm start` command

### Running the Angular project

1. Move into the `secure-angular-app` folder
2. Replace the YOUR_DOMAIN and YOUR_CLIENT_ID placeholders in the `/src/app/app.component.ts` file with your Auth0 domain and client id
3. Add `http://localhost:4200/` as an allowed callback and logout URL in the [Auth0 dashboard](https://manage.auth0.com/)
4. Run `npm install` command
5. Run `npm link 'auth0-login-button'` command
6. Run `ng serve` command

### Running the React project

1. Move into the `secure-react-app` folder
2. Replace the YOUR_DOMAIN and YOUR_CLIENT_ID placeholders in the `/src/App.js` file with your Auth0 domain and client id
3. Add `http://localhost:3000/` as an allowed callback and logout URL in the [Auth0 dashboard](https://manage.auth0.com/)
4. Run `npm install` command
5. Run `npm link 'auth0-login-button'` command
6. Run `npm start` command

### Running the Vue project

1. Move into the `secure-vue-app` folder
2. Replace the YOUR_DOMAIN and YOUR_CLIENT_ID placeholders in the `/src/App.vue` file with your Auth0 domain and client id
3. Add `http://localhost:8080` as an allowed callback and logout URL in the [Auth0 dashboard](https://manage.auth0.com/)
4. Run `npm install` command
5. Run `npm link 'auth0-login-button'` command
6. Run `npm run serve` command



