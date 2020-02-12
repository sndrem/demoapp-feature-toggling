import React from "react";
import { Header, Container, Message } from "semantic-ui-react";
import Comments from "./components/comments/comments";
import Salgsartikler from "./components/artikler/salgsartikler";
import "./App.css";
import EmbedVideo from "./components/youtube/embed";

const App = () => {
  return (
    <div className="App">
      <Container>
        <Header as="h1">Nettbutikken nettbutikk AS</Header>
        <Message>
          <Message.Header>Salg salg salg</Message.Header>
          <p>Alt av katter skal ut! 🐈</p>
        </Message>
        <EmbedVideo />
        <Header as="h2">Se våre katter</Header>
        <Salgsartikler />
        <Header as="h2">Kommentarfelt</Header>
        <Comments />
      </Container>
    </div>
  );
};

export default App;
