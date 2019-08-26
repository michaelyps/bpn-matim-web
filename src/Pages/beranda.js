import React, { Component } from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  Image,
  Button,
  Link,
  Icon
} from "semantic-ui-react";

import Typing from "react-typing-animation";

import "../App.css";
import "semantic-ui-css/semantic.min.css";

import richard1 from "../img/richard1.jpg";
import betty2 from "../img/betty2.jpg";

import Footer from "./components/footer";

export default class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Segment
          id="gambarSampul"
          inverted="inverted"
          textAlign="center"
          style={{
            minHeight: 600,
            padding: "1em 0em"
          }}
          vertical="vertical"
        >
          {/* <Container>
            <div>
              <Typing loop speed={150}>
                <div className="header-kata1">Kantah Manggarai Timur</div>
              </Typing>
            </div>
            <div className="header-kata2">Impact Byte Alumni Community :)</div>
            <div>
              {" "}
              <Button
                style={{
                  fontFamily: "Menlo, Monaco, 'Courier New', monospace"
                }}
                as={Link}
                to="/login"
                primary
                size="huge"
              >
                Get Started
                <Icon name="right arrow" />
              </Button>{" "}
            </div>
          </Container> */}
        </Segment>
        <Container>
          <Segment
            style={{
              padding: "8em 0em"
            }}
            vertical="vertical"
          >
            <Grid
              container="container"
              stackable="stackable"
              verticalAlign="middle"
            >
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em"
                    }}
                  >
                    Tahukah Anda Tujuan Diadakannya Pendaftaran Tanah ?
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em",

                      textAlign: "justify"
                    }}
                  >
                    Untuk memberikan kepastian hukum dan perlindungan hukum
                    kepada pemegang hak atas suatu bidang tanah agar dengan
                    mudah dapat membuktikan dirinya sebagai pemegang hak atas
                    tanah yang bersangkutan.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered="bordered"
                    rounded="rounded"
                    size="large"
                    src={richard1}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </Container>
        <div className="middle2">
          <Segment
            style={{
              padding: "0em"
            }}
            vertical="vertical"
          >
            <Grid celled="internally" columns="equal" stackable="stackable">
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{
                    paddingBottom: "5em",
                    paddingTop: "5em"
                  }}
                >
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em"
                    }}
                  >
                    Memberikan Informasi
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em",

                      textAlign: "justify"
                    }}
                  >
                    Untuk menyediakan informasi kepada pihak-pihak yang
                    berkepentingan termasuk pemerintah agar dengan mudah dapat
                    memperoleh data yang diperlukan dalam mengadakan perbuatan
                    hukum mengenai bidang-bidang tanah yang sudah terdaftar dan
                    untuk Untuk terselenggaranya tertib administrasi pertanahan.
                  </p>
                </Grid.Column>
                <Grid.Column
                  style={{
                    paddingBottom: "5em",
                    paddingTop: "5em"
                  }}
                >
                  <Header
                    as="h3"
                    style={{
                      fontSize: "2em"
                    }}
                  >
                    "Pemerintahan saat ini menyadari betapa pentingnya
                    sertipikat tanah untuk rakyat untuk kepastian hukum"
                  </Header>
                  <p
                    style={{
                      fontSize: "1.33em"
                    }}
                  >
                    {/* <Image avatar="avatar" src={ryu} /> */}
                    <b>Sofyan Djalil</b>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        </div>
        <Segment
          id="middle3"
          inverted="inverted"
          textAlign="justify"
          style={{
            minHeight: 600,
            padding: "1em 0em"
          }}
          vertical="vertical"
        >
          {" "}
          {/* <Container>
            <div className="middle3-kata">"First, Solve The Problem.</div>
            <div className="middle3-kata1">Then, Write The Code"</div>
            <div className="middle3-kata2">- John Jhonson</div>
          </Container> */}
        </Segment>
        <Container>
          <Segment
            style={{
              padding: "6em 0em"
            }}
            vertical="vertical"
          >
            <Grid
              container="container"
              stackable="stackable"
              verticalAlign="middle"
            >
              <Grid.Row>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered="bordered"
                    rounded="rounded"
                    size="large"
                    src={betty2}
                    style={{
                      width: "100%"
                    }}
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <p
                    style={{
                      fontSize: "1.33em",

                      textAlign: "justify"
                    }}
                  >
                    Bagi-bagi sertipikat tanah itu bagian dari reforma agraria,
                    demi mengurangi ketimpangan kepemilikan tanah. <br />
                    AGAR MASYARAKAT PUNYA PENGAKUAN HUKUM ATAS TANAH MEREKA.
                  </p>

                  <Header
                    as="h3"
                    style={{
                      fontSize: "1.5em",

                      textAlign: "right"
                    }}
                  >
                    - PRESIDEN JOKO WIDODO
                  </Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row />
            </Grid>
          </Segment>
        </Container>
        <Footer />
      </div>
    );
  }
}
