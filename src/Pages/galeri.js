import React, { Component } from "react";

import { Segment, Container, Grid, Header, List } from "semantic-ui-react";

import "../App.css";

class Galeri extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="gallery-menu">
        <Container>
          <div>
            <h1 className="gallery-title">Galeri</h1>
          </div>
          <Grid celled="internally" columns={3}>
            <Grid.Row>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
              <Grid.Column>
                <p />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Galeri;
