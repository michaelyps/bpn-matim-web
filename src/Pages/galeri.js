import React, { Component } from "react";

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Image
} from "semantic-ui-react";

import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";

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
          <div className="isi-galeri">
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column>
                  <Image wrapped size="medium" src={gallery1} />
                </Grid.Column>
                <Grid.Column>
                  <Image wrapped size="medium" src={gallery2} />
                </Grid.Column>
                <Grid.Column>
                  <Image wrapped size="medium" src={gallery3} />
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
          </div>
        </Container>
      </div>
    );
  }
}

export default Galeri;
