# MCH CMS - Frontend

- [Requirements](#requirements)
    - [Node](#node)
    - [Yarn](#yarn)
    - [Verify Installations](#verify-installations)
- [Running the Project & Available Commands/Scripts](#running-the-project--available-commandsscripts)
- [Project Structure](#project-structure)
- [Languages & tools](#languages--tools)
    - [UI Markup](#ui-markup)
    - [JavaScript](#javascript)
    - [CSS](#css)
    - [Static server with Hot Reloading](#static-server-with-hot-reloading)
- [Release & Deployment](#release--deployment)
    - [Releasing and Deploying New Version to Test server](#releasing-and-deploying-new-version-to-test-server)


## Requirements
* node `^10.15.0` (See `/src/package.json engines` field for **most recent** version required)
* Yarn `^1.13.0` (NPM CLI **not** supported)
* Docker `latest stable` *(Optional)*
* Docker Compose (manual install needed for only Linux) *(Optional)*


### Node

There are many ways to install Node and NPM. Recommended way to install is with using [NVM](https://github.com/creationix/nvm) (Node Version Manager) In this way you can easily install and switch between node versions


#### NVM Installation on OS X / Linux

You should run this in your terminal

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

for more details and to get latest version, go: [https://github.com/creationix/nvm](https://github.com/creationix/nvm)


#### NVM Installation on Windows

Just go on [nvm-windows repo](https://github.com/coreybutler/nvm-windows) to see installation instructions
xx


#### Node/NPM Installation

First verify your NVM installation first

    $ command -v nvm
    nvm

which should output 'nvm' if the installation was successful.


### Yarn

Just go on [yarn website](https://yarnpkg.com/en/docs/install) and follow the instructions for your platform

Note: Ensure node already installed in your system and chose Yarn installation without node


### Verify Installations

Run commands below to ensure your installation was successful

    $ node --version
    v10.15.0

    $ yarn --version
    1.13.0


## Running the Project & Available Commands/Scripts

Type this command to install the required packages:

    $ yarn

After completing the installation step, you're ready to start the project!

You should run all yarn related commands inside ./src folder.

    $ yarn dev  # Start the development server

While developing, you will probably rely mostly on `yarn dev` however, there are additional scripts at your disposal:

|Command    |Description|
|-------------------|-----------|
|`yarn dev`              |Serves your app at `localhost:3001` [Development]|
|`yarn build`            |Builds the application to ./src/app/next|
|`yarn start`            |Serves your app at `localhost:3001` [Production]|
|`yarn lint`             |Lints the project for potential errors|
|`BUNDLE_ANALYZE=server yarn build` | Build and analyze the back end server bundle|
|`BUNDLE_ANALYZE=browser yarn build` | Build and analyze the front end browser bundle|
|`BUNDLE_ANALYZE=both yarn build` | Build and analyze both server and browser|

## Project Structure


```
├── container                   # [!] Used in Docker to run health check of hostname and port
├── scripts                     # [!] Docker related scripts. Needed for deployment and running container
├── src                         # Application source code
│   ├── app                     # Website-wise React Component including Global Reusable Components
│   │   └── .next               # Next framework working directory (Auto-generated)
│   │   └── components          # Website-wise React Component
│   │   └── constants           # Constants used in the project
│   │   └── hocs                # High Order Components
│   │   └── lib                 # Libraries
│   │   └── pages               # Reserved route directory for Next.js
│   │   └── services            # API calls used in the project
│   │   └── static              # Reserved asset directory for Next.js
│   │   └── utils               # Helper functions
│   ├── dmi-ui                  # UI components and SASS files
│   ├── server                  # Node Server & Express
│   ├── tools                   # Eslint DMI configuration and other packages

```
*`[!]` DO NOT EDIT - Auto-genrated content or system files

## Languages & tools

### UI Markup

- [Bulma](https://bulma.io/) CSS framework based on Flexbox
- [Rbx](https://dfee.github.io/rbx/) Bulma UI Framework for React

### JavaScript

- [React](http://facebook.github.io/react) A JavaScript library for building user interfaces.
- [React Hooks](https://reactjs.org/docs/hooks-intro.html) Use state and other React features without writing a class.
- [React HOC](https://reactjs.org/docs/higher-order-components.html) Advanced technique in React for reusing component logic.
- [Next.js](https://github.com/zeit/next.js/) is used as a server-side rendered React framework. [[learn]](https://learnnextjs.com/)
- [ESLint](https://eslint.org/) A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [Stylelint](https://stylelint.io/) JS and JSX linting with [AirBnb's Style Guidleline](https://github.com/airbnb/javascript)
- [Webpack](https://webpack.js.org/) for resource bundling (build-in with Next.js -- extra configuration `src/next.config.js` for project needs)
- [Express](https://expressjs.com) custom web server for [compression](https://github.com/expressjs/compression) and [server-side caching](https://www.npmjs.com/package/lru-cache) with API [proxying](https://www.npmjs.com/package/http-proxy-middleware) `src/server.js`

### CSS

- [BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) as a naming methodology of custom/project related CSS/Less files. [More info](https://en.bem.info/)
- [Styled Components](https://www.styled-components.com/) Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.

### Static server with Hot Reloading

The app embed for development a static connect server with Hot Realoding plugged.
So each time you start the app, you get automatic refresh in the browser whenever you update a file.

## Release & Deployment

Developers not allowed to do Stage and Production deployments, please contact with Intl Operations Cambodia <intl.ops.cambodia@dminc.com>

### Releasing and Deploying New Version to Test server

- Go to: <https://jbackend.dminc-gtc.com/job/mch-cms-fe/>
- Click `Build Now`
- BRANCH: `develop`
- Click `Build` button
> This will start the release and deploy it to the Test server automatically by creating chain reaction in Jenkins
> If you wanna see deployment process go to: https://jbackend.dminc-gtc.com/job/mch-stackdeploy project and check recent(most likely the latest) releases or follow triggered Subprojects
- After the task done, Navigate to <https://mch-ab-admin-test.dminc-intl.com>
