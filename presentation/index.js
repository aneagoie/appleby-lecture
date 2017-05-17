// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  piedpiper: require("../assets/piedpiper.jpg"),
  stackoverflowtrends: require("../assets/stackoverflowtrends.png"),
  javascript: require("../assets/javascript.jpg"),
  torontosalary: require("../assets/torontosalary.png"),
  sanfransalary: require("../assets/sanfransalary.png"),
  conan3000: require("../assets/conan3000.jpg"),
  waymo: require("../assets/waymo.jpg"),
  alphago: require("../assets/alphago.jpg"),
  spacex: require("../assets/spacex.jpg"),
  neuralink: require("../assets/neuralink.png"),
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Adventures of a Software Developer
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>

          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="primary" caps>Part 1. Life of a developer</Heading>
          <Text margin="40px 0 0" textColor="tertiary" size={1} fit bold>

          </Text>
          <Heading size={5} textColor="primary" caps>Part 2. Javascript. Javascript Everywhere</Heading>
          <Text margin="40px 0 0" textColor="tertiary" size={1} fit bold>

          </Text>
          <Heading size={5} textColor="primary" caps>Part 3. Future of Tech</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Life of a developer</Quote>
            <Image src={images.piedpiper.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Cite></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Image src={images.torontosalary.replace("/", "")} margin="0px auto 40px" height="393px"/>
            <Cite></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Image src={images.sanfransalary.replace("/", "")} margin="0px auto 40px" height="393px"/>
            <Cite></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary" caps>17%</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Image src={images.stackoverflowtrends.replace("/", "")} margin="0px auto 40px" height="493px"/>
            <Cite></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <BlockQuote>
            <Quote>Javascript, Javascript everywhere</Quote>
            <Image src={images.javascript.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Cite></Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary" textColor="primary">
          <List>
              <Appear><ListItem>Web</ListItem></Appear>
              <Appear><ListItem>VR</ListItem></Appear>
              <Appear><ListItem>Mobile</ListItem></Appear>
            </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <BlockQuote>
            <Quote textColor="secondary">Future of tech</Quote>
            <Image src={images.conan3000.replace("/", "")} margin="0px auto 40px" height="420px"/>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <BlockQuote>
            <Image src={images.waymo.replace("/", "")} margin="0px auto 40px" height="420px"/>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <BlockQuote>
            <Image src={images.alphago.replace("/", "")} margin="0px auto 40px" height="420px"/>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <BlockQuote>
            <Image src={images.spacex.replace("/", "")} margin="0px auto 40px" height="420px"/>
          </BlockQuote>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <BlockQuote>
            <Image src={images.neuralink.replace("/", "")} margin="0px auto 40px" height="420px"/>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={5} textColor="primary" caps>@andreineagoie</Heading>
          <Heading size={5} textColor="primary" caps>aneagoie1@gmail.com</Heading>
        </Slide>
      </Deck>
    );
  }
}
