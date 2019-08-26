import React, { Component } from "react";

import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Segment
        inverted="inverted"
        vertical="vertical"
        style={{
          padding: "5em 0em"
        }}
      >
        <Container>
          <Grid divided="divided" inverted="inverted" stackable="stackable">
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted="inverted" as="h4" content="About" />
                <List>
                  <List.Item icon="users" content="Kantah Manggarai Timur" />
                  <List.Item icon="marker" content="Nusa Tenggara Timur" />
                  <List.Item
                    icon="mail"
                    content={
                      <a href="mailto:kantah.matim@ymail.com">
                        kantah.matim@gmail.com
                      </a>
                    }
                  />
                  <List.Item
                    icon="linkify"
                    content={
                      <a href="https://kantahMatim.com/">
                        https://kantahMatim.com/
                      </a>
                    }
                  />
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted="inverted" as="h4" content="Social Media" />
                <List link="link" inverted="inverted">
                  <List.Item
                    icon="facebook official"
                    content={
                      <a
                        target="_blank"
                        href="https://web.facebook.com/bpn.manggaraitimur"
                      >
                        BPN Manggarai Timur
                      </a>
                    }
                  />
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted="inverted">
                  Alamat
                </Header>
                <p>
                  Jalan Ki Hajar Dewantoro, Satar Peot-Borong, Kabupaten
                  Manggarai Timur
                  <br /> Provinsi Nusa Tenggara Timur
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
