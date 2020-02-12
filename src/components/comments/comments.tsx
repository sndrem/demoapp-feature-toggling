import React from "react";
import { Comment, Header, Form, Button } from "semantic-ui-react";

function Comments() {
  return (
    <>
      <Comment.Group>
        <Header as="h3" dividing>
          Kommentarer fra andre katteeiere
        </Header>

        <Comment>
          <Comment.Avatar src="https://www.fillmurray.com/200/200" />
          <Comment.Content>
            <Comment.Author as="a">Kristine</Comment.Author>
            <Comment.Metadata>
              <div>I dag kl. 07.45</div>
            </Comment.Metadata>
            <Comment.Text>Wow, for noen fine katter</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Svar</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://www.fillmurray.com/200/200" />
          <Comment.Content>
            <Comment.Author as="a">Petra</Comment.Author>
            <Comment.Metadata>
              <div>I går kl. 18.56</div>
            </Comment.Metadata>
            <Comment.Text>
              <p>Vi fikk katten vår levert i går, og wow. Den er såå myk!</p>
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Svar</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
          <Comment.Group>
            <Comment>
              <Comment.Avatar src="https://www.fillmurray.com/200/200" />
              <Comment.Content>
                <Comment.Author as="a">Morten Aas</Comment.Author>
                <Comment.Metadata>
                  <div>For to år siden</div>
                </Comment.Metadata>
                <Comment.Text>
                  Vår katt beveger seg ikke lenger, hva skal vi gjøre? Kan man
                  kjøpe nye batterier?
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Svar</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Comment.Group>
        </Comment>

        <Comment>
          <Comment.Avatar src="https://www.fillmurray.com/200/200" />
          <Comment.Content>
            <Comment.Author as="a">Ole Roger</Comment.Author>
            <Comment.Metadata>
              <div>4 år siden</div>
            </Comment.Metadata>
            <Comment.Text>
              Disse kattene er jo ekte! Det var ikke det jeg trodde når jeg
              kjøpte en. Skikkelig skuffet 😿
            </Comment.Text>
            <Comment.Actions>
              <Comment.Action>Svar</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button
            content="Skriv til oss"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </Comment.Group>
    </>
  );
}

export default Comments;
