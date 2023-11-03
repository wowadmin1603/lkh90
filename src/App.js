import { Fragment } from "react";
import Benefit from "./components/Benefit";
import Coach from "./components/Coach";
import Content from "./components/Content";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Organizer from "./components/Organizer";
import Participants from "./components/Participants";
import Plan from "./components/Plan";
import Register from "./components/Register";
import Target from "./components/Target";
import Ticket from "./components/Ticket";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Hero></Hero>
      <Plan></Plan>
      <Participants></Participants>
      <Benefit></Benefit>
      <CTA></CTA>
      <Content></Content>
      <Coach></Coach>
      <Target></Target>
      <Ticket></Ticket>
      <Register></Register>
      <Organizer></Organizer>
      <Footer></Footer>
    </Fragment>
  );
}

export default App;
