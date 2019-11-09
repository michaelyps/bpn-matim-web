import React, { Component } from "react";

import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Image,
  Modal,
  Button,
  Icon
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
import gallery10 from "../img/gallery10.jpg";
import gallery11 from "../img/gallery11.jpg";
import gallery12 from "../img/gallery12.jpg";
import gallery13 from "../img/gallery13.jpg";
import gallery14 from "../img/gallery14.jpg";
import gallery15 from "../img/gallery15.jpg";

import Footer from "./components/footer";

import "../App.css";
import { link } from "fs";

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
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery1} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery1} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery2} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery2} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery3} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery3} />
                    </Modal>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery4} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery4} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery5} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery5} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery6} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery6} />
                    </Modal>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery7} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery7} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery8} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery8} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery9} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery9} />
                    </Modal>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery10} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery10} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery11} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery11} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery12} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery12} />
                    </Modal>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery13} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery13} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery14} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery14} />
                    </Modal>
                  </Grid.Column>
                  <Grid.Column>
                    <Modal
                      trigger={<Image wrapped size="medium" src={gallery15} />}
                      basic
                      size="small"
                    >
                      <Image src={gallery15} />
                    </Modal>
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
