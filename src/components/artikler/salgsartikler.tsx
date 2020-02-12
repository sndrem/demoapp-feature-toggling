import React from "react";
import { Item, Image, Grid, Rating } from "semantic-ui-react";

function Salgsartikler() {
  return (
    <Grid columns={3}>
      <Grid.Row divided>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">Fin katt</Item.Header>
                <Item.Meta>En fin katt</Item.Meta>
                <Item.Description>
                  <Image src="https://placekitten.com/400/300" />
                </Item.Description>
                <Rating icon="heart" defaultRating={4} maxRating={5} />
                <Item.Extra>Denne katten er ganske fin.</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">En annen fin katt</Item.Header>
                <Item.Meta>Denne katten er også fin</Item.Meta>
                <Item.Description>
                  <Image src="https://placekitten.com/500/300" />
                </Item.Description>
                <Rating icon="heart" defaultRating={2} maxRating={5} />
                <Item.Extra>Gis bort fordi den er så fin</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">En annen fin katt</Item.Header>
                <Item.Meta>Denne katten er også fin</Item.Meta>
                <Item.Description>
                  <Image src="https://placekitten.com/250/500" />
                </Item.Description>
                <Rating icon="heart" defaultRating={5} maxRating={5} />
                <Item.Extra>Gis bort fordi den er så fin</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">En annen fin katt</Item.Header>
                <Item.Meta>Denne katten er også fin</Item.Meta>
                <Item.Description>
                  <Image src="https://placekitten.com/450/300" />
                </Item.Description>
                <Rating icon="heart" defaultRating={1} maxRating={5} />
                <Item.Extra>Gis bort fordi den er så fin</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">En annen fin katt</Item.Header>
                <Item.Meta>Denne katten er også fin</Item.Meta>
                <Item.Description>
                  <Image src="https://placekitten.com/200/300" />
                </Item.Description>
                <Rating icon="heart" defaultRating={3} maxRating={5} />
                <Item.Extra>Gis bort fordi den er så fin</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as="a">Dette er en bjørn</Item.Header>
                <Item.Meta>Dette er Bjørn, han jobber her</Item.Meta>
                <Item.Description>
                  <Image
                    src="https://placebear.com/640/360
"
                  />
                </Item.Description>
                <Rating icon="heart" defaultRating={5} maxRating={5} />
                <Item.Extra>Bjørn ville bare være på forsiden</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Salgsartikler;
