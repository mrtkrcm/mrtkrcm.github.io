import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, S,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text, Typeface,
  Table, TableRow, TableItem, Link
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import Cube from "./cube";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../assets/custom.css");

const images = {
  overview: require("../assets/webpack-overview.png"),
  logo: require("../assets/logo.svg"),
  analyz: require("../assets/webpack-analyz.png")
};

preloader(images);

const theme = createTheme({
  primary: "#041322",
  secondary: "white",
  tertiary: "#8dd6f9",
  quartenary: "#CECECE",
  overviewBg: "#2A3A42"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const codeSplittingListFontSize = '32px';
const popularLoadersListFontSize = '25px';
const pluginListFontSize = '25px';

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "fade"]} transitionDuration={500} theme={theme} progress="pacman">

        <Slide transition={["zoom"]} bgColor="primary">
          <Text textColor="quartenary">Making sense of</Text>
          <img src={images.logo} style={{width: '300px'}} />
          <Text textColor="tertiary">A module bundler</Text>
          <Cube />
          <Text margin="10px 0 0" textColor="secondary" size={2}>
            <span style={{ color: "#fff" }}>Murat Karacam</span> @ <span style={{ color: "red" }}>DMI</span> Phnom Penh 2017
          </Text>
        </Slide>

        {/*<!-- Overview -->*/}
        <Slide bgColor="overviewBg">
          <img src={images.overview} style={{width: '100%'}} />
        </Slide>

        {/*<!-- What is Webpack -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">What is <S type="underline">webpack</S>? 🤔</Heading>
          <Text textColor="secondary" margin="20px 0 0">
            <List>
              <ListItem>Like Gulp or Grunt, but different</ListItem>
              <ListItem>Does more with less</ListItem>
              <ListItem>Fairly easy configuration</ListItem>
              <ListItem>Bundles files</ListItem>
              <ListItem>Uses JavaScript modules</ListItem>
              <ListItem>Reduces the amount of (XHR) requests</ListItem>
            </List>
          </Text>
        </Slide>

        {/*<!-- What does webpack do -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">What does <S type="underline">webpack</S> do? 🤔</Heading>
          <List>
            <ListItem>Manage dependencies
              <List>
                <ListItem>Require</ListItem>
                <ListItem>Import (eg. CommonJS, AMD, ES6)</ListItem>
              </List>
            </ListItem>
            <ListItem>Build Tasks | Convert and Preprocess
              <List>
                <ListItem>Minify</ListItem>
                <ListItem>Combine</ListItem>
                <ListItem>Sass / Less conversion</ListItem>
                <ListItem>Babel Transpile</ListItem>
              </List>
            </ListItem>
          </List>
        </Slide>

        {/*<!-- Installation -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">Installation 🔨</Heading>
          <CodePane
            lang="markup"
            source={require("raw-loader!../assets/install1.example")}
            margin="20px auto"
            textSize="25"
          />

          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/install2.example")}
            margin="10px auto"
            textSize="25"
          />
        </Slide>

        {/*<!-- Code Splitting -->*/}
        <Slide notes="It allows you to split your code into various bundles which you can then load on demand — like when a user navigates to a matching route, or on an event from the user. This allows for smaller bundles, and allows you to control resource load prioritization, which if used correctly, can have a major impact on your application load time.">
          <Heading size={3} textColor="tertiary">Code Splitting ✂️</Heading>
          <List>
            <ListItem style={{fontSize: codeSplittingListFontSize}}>Split the dependency tree into chunks and load on demand</ListItem>
            <ListItem style={{fontSize: codeSplittingListFontSize}}>Maintain the dependency tree</ListItem>
            <ListItem style={{fontSize: codeSplittingListFontSize}}>Create chunks of the modules and load them from webpack runtime environment</ListItem>
            <ListItem style={{fontSize: codeSplittingListFontSize}}>Reduce initial loading time</ListItem>
            <ListItem style={{fontSize: codeSplittingListFontSize}}>Reduce the number of HTTP requests / for HTTP 2.0 use plugins to reduce the chunk size to optimize it for caching</ListItem>
            <ListItem style={{fontSize: codeSplittingListFontSize}}>Optimize the combined file so as to reduce the load time, while ensuring avoiding of code redundancy</ListItem>
          </List>
        </Slide>

        {/*<!-- Code Splitting | Example -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">Code Splitting ✂️</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/plugins-commonchunk.example")}
            margin="50px auto"
            textSize="25"
          />
        </Slide>

        {/*<!-- HMR -->*/}
        <Slide notes="-it is like live reload for every module <br /><br /> -edit something on the slide for an example">
          <Heading size={3} textColor="tertiary">Hot Module Replacement 🔥</Heading>
          <Text textSize='25' textColor="secondary" margin="20px 0 0">Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:</Text>
          <List>
            <ListItem>Retain application state which is lost during a full reload.</ListItem>
            <ListItem>Save valuable development time by only updating what's changed.</ListItem>
            <ListItem>Tweak styling faster -- almost comparable to changing styles in the browser's debugger.</ListItem>
          </List>
        </Slide>

        {/*<!-- Loaders -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">Loaders 🎛️</Heading>
          <List>
            <ListItem>Loaders are pieces that transform files</ListItem>
            <ListItem>Used to teach webpack some new tricks</ListItem>
            <ListItem>Much like tasks in other build tools</ListItem>
          </List>
        </Slide>

        {/*<!-- Loaders | Popular -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">Loaders 🎛 Popular ️</Heading>
          <List>
            <ListItem style={{fontSize: popularLoadersListFontSize}}>
              <S type="underline">raw-loader:</S> Loads raw content of a file (utf-8)</ListItem>
            <ListItem style={{fontSize: popularLoadersListFontSize}}>
              <S type="underline">babel-loader:</S> Loads ES2015+ code and transpiles to ES5</ListItem>
            <ListItem style={{fontSize: popularLoadersListFontSize}}>
              <S type="underline">style-loader:</S> Add exports of a module as style to DOM</ListItem>
            <ListItem style={{fontSize: popularLoadersListFontSize}}>
              <S type="underline">css-loader:</S> Loads CSS file with resolved imports and returns CSS code</ListItem>
            <ListItem style={{fontSize: popularLoadersListFontSize}}>
              <S type="underline">sass-loader:</S> Loads and compiles a SASS/SCSS file</ListItem>
            <ListItem style={{fontSize: popularLoadersListFontSize}}>
              <S type="underline">eslint-loader:</S> PreLoader for linting code using ESLint</ListItem>
          </List>
        </Slide>

        {/*<!-- Loaders | sass-loader -->*/}
        <Slide notes="show this slide for raw loader inline usage">
          <Heading size={3} textColor="tertiary">Loaders 🎛 sass-loader ️</Heading>
          <Text textColor="secondary" margin="20px 0 0" textSize='26'>Chain the sass-loader with the css-loader and the style-loader to immediately apply all styles to the DOM.</Text>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/sass-loader-1.example")}
            margin="20px auto"
            textSize="20"
          />
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/sass-loader-2.example")}
            margin="20px auto"
            textSize="15"
          />
        </Slide>

        {/*<!-- Plugins -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">Plugins 🔌️️</Heading>
          <Text textColor="secondary" margin="20px 0 0" textSize='26'>Plugins differ from loaders in the sense that instead of only executing on a certain set of files, and being more of a “pipe”, they execute on all files and perform more advanced actions, that aren’t necessarily related to transformations</Text>
          <List>
            <ListItem style={{fontSize: pluginListFontSize}}>
              <S type="underline">Offline Plugin:</S> This plugin is intended to provide an offline experience for webpack projects.
            </ListItem>
            <ListItem style={{fontSize: pluginListFontSize}}>
              <S type="underline">DefinePlugin:</S> Create global constants which can be configured at compile time.
            </ListItem>
            <ListItem style={{fontSize: pluginListFontSize}}>
              <S type="underline">CommonsChunkPlugin:</S> Generates chunks of common modules shared between entry points and splits them into separate bundles, e.g., vendor.bundle.js && app.bundle.js
            </ListItem>
            <ListItem style={{fontSize: pluginListFontSize}}>
              <S type="underline">ExtractTextWebpackPlugin:</S> Extracts Text (CSS) from your bundles into a separate file (app.bundle.css)
            </ListItem>
          </List>
        </Slide>

        {/*<!-- Plugins | Common Chunk Plugin -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary" textSize='34'>Plugins 🔌️️ Common Chunk Plugin</Heading>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/plugins-commonchunk.example")}
            margin="50px auto"
            textSize="25"
          />
        </Slide>

        {/*<!-- DevServer -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary">DevServer 🖥️</Heading>
          <Text textColor="secondary" margin="20px 0 0">Express.js (NodeJs) server which has a little runtime which is connected to the server via Socket.IO. The server emits information about the compilation state to the client, which reacts to those events.</Text>
          <List>
            <ListItem>Use when you need HTTP</ListItem>
            <ListItem>Sets up webserver</ListItem>
            <ListItem>Serves files virtually (not from disk)</ListItem>
            <ListItem>Reloads browser when files change</ListItem>
          </List>
        </Slide>

        {/*<!-- Dependency Visualization -->*/}
        <Slide>
          <Heading size={3} textColor="tertiary" textSize="36">Dependency Visualization 📊</Heading>
          <img src={images.analyz} style={{width: '1000px'}} />
        </Slide>

        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/thankyou.example")}
            margin="20px auto"
            textSize="36px"
          />
        </Slide>
      </Deck>
    );
  }
}
