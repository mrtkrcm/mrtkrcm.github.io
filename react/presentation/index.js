import React from "react";
import Clock from "./clock";

import {
  Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit, S,
  Heading, Image, Layout, ListItem, List, Quote, Slide, Text, Typeface,
  Table, TableRow, TableItem
} from "spectacle";
import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  reactLogo: require("../assets/react-logo.svg"),
  lifeCycle: require("../assets/reactLifeCycle.png")
};

preloader(images);

const theme = createTheme({
  primary: "#222222",
  secondary: "white",
  tertiary: "#00D8FF",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="pacman">

        <Slide transition={["zoom"]} bgColor="primary">
          <Text textColor="tertiary" bold>React</Text>
          <Heading size={4} caps lineHeight={1} textColor="secondary">Tech-Talk</Heading>
          <S type="italic" textColor="secondary" textSize="20" lineHeight={1}>A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES</S>
          <Text textColor="tertiary">Web | Mobile | Desktop | VR</Text>
          <Image src={images.reactLogo} style={{ height: "300px", margin: "0 0 50px" }} />
          <Text margin="10px 0 0" textColor="secondary" size={2}>
            <span style={{ color: "#fff" }}>Murat Karacam</span> @ <span style={{ color: "red" }}>DMI</span> Phnom Penh 2017
          </Text>
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">NOT A <S type="strikethrough">FRAMEWORK</S>!</Heading>
          <Text textColor="secondary" margin="20px 0 0">
            React is a JavaScript <S type="underline">library</S>. It’s not a <S type="strikethrough">framework</S>.
            It’s not a complete solution and we’ll often need to use more libraries with React to form any solution.
            React does not assume anything about the other parts in any full solution.
            It focuses on just one thing, and on doing that thing very well.
          </Text>
        </Slide>

        <Slide>
          <Heading size={1} textColor="tertiary">Maturity</Heading>
          <Text textColor="secondary">
            React is developed and maintained by Facebook and used in their own products, including Instagram and WhatsApp.
            It has been around since March 2013, so it’s not exactly new.
            It’s also one of the most popular projects on GitHub with about 65,000 stars (03/05/2017)
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="tertiary">Why React Became So Popular? 🤔</Heading>
          <Text textColor="secondary" textSize="35" margin="20px 0 0">
            Working with the DOM API is hard.
            React basically gives developers the ability to work with a virtual browser that is more friendly than the real browser.
            React’s virtual browser acts like an agent between the developer and the real browser.
            <br /><br />
            React is just JavaScript, there is a very small API to learn, just a few functions and how to use them.
            After that, your JavaScript skills are what make you a better React developer. There are no barriers to entry.
            A JavaScript developer can become a productive React developer in a few hours.
          </Text>
        </Slide>

        <Slide>
          <Heading size={5} textColor="tertiary">Who Is Using It?</Heading>
          <List textSize="30px" textColor="secondary">
            <ListItem>Facebook Website (for sure 😅)</ListItem>
            <ListItem>Facebook Mobile (ReactNative)</ListItem>
            <ListItem>Dropbox 😳</ListItem>
            <ListItem>WhatsApp Web 😱</ListItem>
            <ListItem>Instagram Web & Mobile</ListItem>
            <ListItem>Airbnb</ListItem>
            <ListItem>Netflix (Gibbon)</ListItem>
            <ListItem>Yahoo!’s Mail Client</ListItem>
            <ListItem>Codecademy</ListItem>
            <ListItem>A lot of parts of <em>Khan Academy</em></ListItem>
          </List>
          <Text textColor="secondary" textSize="20">
            ... and many many more: <a href="https://github.com/facebook/react/wiki/sites-using-react">https://github.com/facebook/react/wiki/sites-using-react</a>
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>React is such a good idea that we will spend the rest of the decade continuing to explore its implications and applications</Quote>
            <Cite>Guillermo Rauch, founder of ZEIT</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary">JSX</Heading>
          <BlockQuote>
            <Quote textSize="30px">JSX is a preprocessor step that adds XML syntax to JavaScript.
              You can definitely use React without JSX but JSX makes React a lot more elegant.</Quote>
          </BlockQuote>
          <BlockQuote>
            <Quote textSize="30px">Just like XML, JSX tags have a tag name, attributes, and children.
              If an attribute value is enclosed in quotes, the value is a string.
              Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression.</Quote>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={2} textColor="tertiary">JSX Example</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/jsx.example")}
            margin="20px auto"
            textSize="25"
          />

          <Heading size={2} textColor="tertiary">Compiled</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/jsxCompiled.example")}
            margin="20px auto"
            textSize="25"
          />
        </Slide>

        <Slide>
          <Heading size={1} textColor="tertiary">Components</Heading>

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/funcComponent.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/classComponent.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/declareComponent.example")}
            margin="20px auto"
            textSize="20"
          />
        </Slide>

        <Slide>
          <Heading size={6} bold textColor="quartenary">Components</Heading>
          <Heading size={4} textColor="tertiary">Props</Heading>

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/funcComponentProp.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/classComponentProp.example")}
            margin="20px auto"
            textSize="20"
          />

          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/declareComponentProp.example")}
            margin="20px auto"
            textSize="20"
          />
        </Slide>

        <Slide bgColor="secondary">
          <Heading size={4} bold textColor="quartenary">Components</Heading>
          <Heading size={2} textColor="tertiary">States</Heading>

          <BlockQuote>
            <Quote textSize="30px">
              The heart of every React component is its “state”, an object that determines how that component renders & behaves.
              In other words, “state” is what allows you to create components that are dynamic and interactive.
            </Quote>
          </BlockQuote>

          <Heading size={4} >vs. Props</Heading>
          <Text textSize="30px">
            Properties are defined when components are created, whether by JSX or by pure JavaScript.
            State, on the other hand, is only seen on the inside of component definitions.
            This is the first, and most important difference between the two.
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/clockComponent.example")}
          ranges={[
            { loc: [0, 270], title: "Component States" },
            { loc: [0, 1], title: "Creating Component named Clock" },
            { loc: [3, 4], title: "Setting initial state of the Component" },
            { loc: [7, 11], title: "Creating the timer" },
            { loc: [17, 22], title: "Update the component state",
              note: "This function will run every seconds to update component's state object with current date"
            },
            { loc: [27, 28], title: "Get date from component's state" }
          ]}
        />

        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} textColor="tertiary" style={{ margin: "0 0 30px" }}>VIRTUAL DOM DEMO 🎊</Heading>
          <Clock />
        </Slide>

        <Slide>
          <Heading size={3} textColor="tertiary">Component Lifecycle</Heading>
          <Image src={images.lifeCycle} style={{ height: "600px", margin: "0 0 50px" }} />
        </Slide>

        <CodeSlide
          transition={[]}
          lang="js"
          code={require("raw-loader!../assets/clockComponent.example")}
          ranges={[
            { loc: [0, 0], title: "Component Lifecycle" },
            { loc: [6, 12], title: "componentDidMount",
              note: "The componentDidMount() hook runs after the component output has been rendered to the DOM. " +
              "This is a good place to set up a timer."
            },
            { loc: [13, 16], title: "componentWillUnmount",
              note: "The componentWillUnmount() hook runs when the component removed from the DOM. " +
            "This is a good place to destroy timer."
            },
            { loc: [23, 31], title: "render", note: "The render() hook is a place to prepare component " +
            "output. Runs when component mounted and after \"every\" state changes."
            }
          ]}
        />

        <Slide>
          <Table>
            <tbody>
            <TableRow>
              <TableItem>
                <List>
                  <ListItem textSize="30px">react-dom</ListItem>
                  <ListItem textSize="30px">react-native</ListItem>
                  <ListItem textSize="30px">react-vr</ListItem>
                  <ListItem textSize="30px">react-router</ListItem>
                  <ListItem textSize="30px">react-redux</ListItem>
                  <ListItem textSize="30px">webpack</ListItem>
                  <ListItem textSize="30px">react-helmet</ListItem>
                  <ListItem textSize="30px">react-motion</ListItem>
                  <ListItem textSize="30px">reactide</ListItem>
                  <ListItem textSize="30px">react-datasheet</ListItem>
                  <ListItem textSize="30px">react-modal</ListItem>
                  <ListItem textSize="30px">react-native-windows</ListItem>
                  <ListItem textSize="30px">react-joyride</ListItem>
                </List>
              </TableItem>
              <TableItem>
                <List>
                  <ListItem textSize="30px">preact</ListItem>
                  <ListItem textSize="30px">inferno</ListItem>
                  <ListItem textSize="30px">react-intl</ListItem>
                  <ListItem textSize="30px">react-cookie</ListItem>
                  <ListItem textSize="30px">create-react-native-app</ListItem>
                  <ListItem textSize="30px">react-sketchapp</ListItem>
                  <ListItem textSize="30px">react-dnd</ListItem>
                  <ListItem textSize="30px">react-slick</ListItem>
                  <ListItem textSize="30px">code-push</ListItem>
                  <ListItem textSize="30px">react-lazyload</ListItem>
                  <ListItem textSize="30px">react-md</ListItem>
                  <ListItem textSize="30px">react-styleguidist</ListItem>
                  <ListItem textSize="30px">react-dev-tool</ListItem>
                </List>
              </TableItem>
            </TableRow>
            </tbody>
          </Table>
        </Slide>

        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/thankyou.example")}
            margin="20px auto"
            textSize="40px"
          />
        </Slide>
      </Deck>
    );
  }
}
