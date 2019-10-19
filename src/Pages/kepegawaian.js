import React, { Component } from "react";
import {
  Card,
  Icon,
  Image,
  Container,
  Grid,
  GridColumn,
  Modal,
  Header,
  List
} from "semantic-ui-react";

import { Link } from "react-router-dom";

import Footer from "./components/footer";

import logokorpri from "../img/logokorpri.png";
import logoBPN from "../img/logoBpn.png";

import fotomichael from "../img/PNS/fotomichael.jpg";
import fotoadvent from "../img/PNS/fotoadvent.jpg";
import fotosiska from "../img/PNS/fotosiska.jpg";
import fotonanda from "../img/PNS/fotonanda.jpeg";

class Kepegawaian extends Component {
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
              <h1 className="kepegawaian-title">Kepegawaian</h1>
            </div>
            <div className="BPN-logo1">
              <Grid centered divided="vertically">
                <Grid.Row columns={3}>
                  <Modal
                    trigger={
                      <GridColumn>
                        <Card link>
                          <Image src={logoBPN} wrapped ui={false} />
                          <Card.Content>
                            <Card.Header>PNS</Card.Header>
                            {/* <Card.Meta>
                              <span className="date">Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                              Matthew is a musician living in Nashville.
                            </Card.Description> */}
                          </Card.Content>
                          <Card.Content extra>
                            <a>
                              <Icon name="user" />
                              17 Orang
                            </a>
                          </Card.Content>
                        </Card>{" "}
                      </GridColumn>
                    }
                  >
                    <Modal.Header>PEGAWAI NEGERI SIPIL</Modal.Header>
                    <Modal.Content image>
                      <Image wrapped size="medium" src={logokorpri} />
                      <Modal.Description>
                        <Header>List Pegawai</Header>
                        <List animated verticalAlign="middle">
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/yusakpunuf"}>
                                Yusak Punuf, SH
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header
                                as={Link}
                                to={"/profile/gatotpanyol"}
                              >
                                Gatot Panyol
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header
                                as={Link}
                                to={"/profile/hendrikusbate"}
                              >
                                Hendrikus Bate, S.Sos
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header
                                as={Link}
                                to={"/profile/yohanamereseme"}
                              >
                                Yohana Mere Seme, ST
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header
                                as={Link}
                                to={"/profile/stephanuskakut"}
                              >
                                Stephanus Kakut
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header
                                as={Link}
                                to={"/profile/rahmatadityanto"}
                              >
                                Rahmat Adityanto, ST
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/emiliajaun"}>
                                Emilia Jaun, A.Md
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/sumar"}>
                                Sumar, AP
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/lusiana"}>
                                Lusiana M. K. Poso Teku, AP
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/bungsu"}>
                                Bungsu A. A. Wajajo, S.Tr
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/richard"}>
                                Richard Willyam Polin, SH
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/bambang"}>
                                Bambang Niaga, AP
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image avatar src={fotoadvent} />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/advent"}>
                                Advent Nugraheni, S.Si
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image avatar src={fotosiska} />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/siska"}>
                                Fransisca Yohanna Manus, S.Sos
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image avatar src={fotonanda} />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/hernanda"}>
                                Hernanda Damantara, SH
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image avatar src={fotomichael} />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/michael"}>
                                Michael Yosavani Putra, A.Md
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header as={Link} to={"/profile/andung"}>
                                Andung Listyarti, AP
                              </List.Header>
                            </List.Content>
                          </List.Item>
                        </List>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                  {/* CARD PNS ===============================================================*/}
                  <Modal
                    trigger={
                      <GridColumn>
                        <Card link>
                          <Image src={logoBPN} wrapped ui={false} />
                          <Card.Content>
                            <Card.Header>PTT</Card.Header>
                            {/* <Card.Meta>
                              <span className="date">Joined in 2015</span>
                            </Card.Meta>
                            <Card.Description>
                              Matthew is a musician living in Nashville.
                            </Card.Description> */}
                          </Card.Content>
                          <Card.Content extra>
                            <a>
                              <Icon name="user" />
                              18 Orang
                            </a>
                          </Card.Content>
                        </Card>{" "}
                      </GridColumn>
                    }
                  >
                    <Modal.Header>PPNPN</Modal.Header>
                    <Modal.Content image>
                      <Image
                        wrapped
                        size="medium"
                        src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
                      />
                      <Modal.Description>
                        <Header>List Pegawai</Header>
                        <List animated verticalAlign="middle">
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Alberto Sera Soka</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>
                                Liberius Desalves Siga, A.Md
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Hendrik W. M. Lodo Hawu</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>
                                Mandhalika Dwi Karmani, ST
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>
                                Modesta Teresia Taimenas
                              </List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Paulus F. H. Gadur</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Ridwan Lay, S.Kom</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Robert T. A. Susar</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Selli A. M. Naji</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Sudirman Moksen</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Yemli Inoriti Punuf</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Archidius M. Ajang</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Elvis Ryaldhy Narahida</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Maria Lastiana Narjun</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Natalia Elisabet Daring</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Maria Agustina Resi</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Fridolin E. Raga</List.Header>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <Image
                              avatar
                              src="https://react.semantic-ui.com/images/avatar/small/helen.jpg"
                            />
                            <List.Content>
                              <List.Header>Melania Jemian</List.Header>
                            </List.Content>
                          </List.Item>
                        </List>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                  {/* CARD PPNPN ===============================================================*/}
                  <GridColumn>
                    <Card link>
                      <Image src={logoBPN} wrapped ui={false} />
                      <Card.Content>
                        <Card.Header>ASK</Card.Header>
                        {/* <Card.Meta>
                          <span className="date">Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                          Matthew is a musician living in Nashville.
                        </Card.Description> */}
                      </Card.Content>
                      <Card.Content extra>
                        <a>
                          <Icon name="user" />4 Orang
                        </a>
                      </Card.Content>
                    </Card>{" "}
                  </GridColumn>
                  {/* CARD ASK ===============================================================*/}
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

export default Kepegawaian;
