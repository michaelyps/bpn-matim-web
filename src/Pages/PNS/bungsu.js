import React, { Component } from "react";

import { Image, Grid, Container, Table, Header } from "semantic-ui-react";

import "../../App.css";
import Footer from "../components/footer";

import fotobungsu from "../../img/PNS/fotobungsu.png";

class Bungsu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="kepegawaian-menu">
          <Container>
            <div>
              <h1 className="judul-biodata">Biodata Pegawai</h1>
            </div>
            <div className="isi-biodata">
              <Grid>
                <Grid.Column width={4}>
                  <Image src={fotobungsu} />
                </Grid.Column>
                <Grid.Column width={9}>
                  <Table basic="very" celled collapsing>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell />
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>Nama Lengkap:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>Bungsu A. A. Wajajo, S.Tr</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>NIP:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>19890621 201101 1 004</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>Pangkat/Golongan:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>Penata Muda (III/a)</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <Header as="h4">
                            <Header.Content>Jabatan:</Header.Content>
                          </Header>
                        </Table.Cell>
                        <Table.Cell>
                          Analis Kendali Mutu Survey, Pengukuran dan Pemetaan
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src="https://react.semantic-ui.com/images/wireframe/media-paragraph.png" />
                </Grid.Column>
              </Grid>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bungsu;
