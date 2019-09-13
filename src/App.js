import React, { Component } from "react";
import { Menu, Container, Image } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import Beranda from "./Pages/beranda";
import Kepegawaian from "./Pages/kepegawaian";
import Galeri from "./Pages/galeri";
import Layanan from "./Pages/layanan";

import logoBpn from "./img/logoBpn.png";

import HendrikusBate from "./Pages/PNS/hendrikusbate";
import YusakPunuf from "./Pages/PNS/yusakpunuf";
import GatotPanyol from "./Pages/PNS/gatotpanyol";
import YohanaMereSeme from "./Pages/PNS/yohanamereseme";
import StephanusKakut from "./Pages/PNS/stephanuskakut";
import RahmatAdityanto from "./Pages/PNS/rahmatadityanto";
import EmiliaJaun from "./Pages/PNS/emiliajaun";
import Sumar from "./Pages/PNS/sumar";
import Lusiana from "./Pages/PNS/lusiana";
import Bungsu from "./Pages/PNS/bungsu";
import Richard from "./Pages/PNS/richard";
import Bambang from "./Pages/PNS/bambang";
import Advent from "./Pages/PNS/advent";
import Siska from "./Pages/PNS/siska";
import Hernanda from "./Pages/PNS/hernanda";
import Michael from "./Pages/PNS/michael";
import Andung from "./Pages/PNS/andung";

export default class App extends Component {
  state = { activeItem: "beranda" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Router>
        <div>
          <Container>
            <div className="navbar">
              <Menu secondary>
                <Menu.Item
                  icon="home"
                  as={Link}
                  to="/"
                  name="beranda"
                  active={activeItem === "beranda"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="users"
                  as={Link}
                  to="/kepegawaian"
                  name="kepegawaian"
                  active={activeItem === "kepegawaian"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="photo"
                  as={Link}
                  to="/galeri"
                  name="galeri"
                  active={activeItem === "galeri"}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  icon="book"
                  as={Link}
                  to="/layanan"
                  name="layanan"
                  active={activeItem === "layanan"}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position="right">
                  <div className="avatar">
                    <Image src={logoBpn} avatar />
                    <span>KANTAH KAB. MANGGARAI TIMUR</span>
                  </div>
                </Menu.Menu>
              </Menu>
            </div>
          </Container>
          <Route exact path="/" component={Beranda} />
          <Route path="/kepegawaian" component={Kepegawaian} />
          <Route path="/galeri" component={Galeri} />
          <Route path="/layanan" component={Layanan} />
          <Route path="/profile/yusakpunuf" component={YusakPunuf} />
          <Route path="/profile/gatotpanyol" component={GatotPanyol} />
          <Route path="/profile/hendrikusbate" component={HendrikusBate} />
          <Route path="/profile/yohanamereseme" component={YohanaMereSeme} />
          <Route path="/profile/stephanuskakut" component={StephanusKakut} />
          <Route path="/profile/rahmatadityanto" component={RahmatAdityanto} />
          <Route path="/profile/emiliajaun" component={EmiliaJaun} />
          <Route path="/profile/sumar" component={Sumar} />
          <Route path="/profile/lusiana" component={Lusiana} />
          <Route path="/profile/bungsu" component={Bungsu} />
          <Route path="/profile/richard" component={Richard} />
          <Route path="/profile/bambang" component={Bambang} />
          <Route path="/profile/advent" component={Advent} />
          <Route path="/profile/siska" component={Siska} />
          <Route path="/profile/hernanda" component={Hernanda} />
          <Route path="/profile/michael" component={Michael} />
          <Route path="/profile/andung" component={Andung} />
        </div>
      </Router>
    );
  }
}
