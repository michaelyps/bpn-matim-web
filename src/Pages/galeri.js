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
import gallery4 from "../img/gallery4.jpg";
import gallery5 from "../img/gallery5.jpg";
import gallery6 from "../img/gallery6.jpg";
import gallery7 from "../img/gallery7.jpg";
import gallery8 from "../img/gallery8.jpg";
import gallery9 from "../img/gallery9.jpg";

import Footer from "./components/footer";

import "../App.css";

class Galeri extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
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
                    <Image wrapped size="medium" src={gallery4} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image wrapped size="medium" src={gallery5} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image wrapped size="medium" src={gallery6} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Image wrapped size="medium" src={gallery7} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image wrapped size="medium" src={gallery8} />
                  </Grid.Column>
                  <Grid.Column>
                    <Image wrapped size="medium" src={gallery9} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Galeri;
