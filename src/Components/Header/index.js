import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class Header extends Component {
  render() {
    return (
      <header className="Header Header-Navigation">
        <Grid fluid className="u-height100">

          <Row start="xs" className="u-height100">

            <Col lg={2} xs={10} className="u-height100">
              <ul className="Navigation-leftMenu u-height100">
                <li className="Header-mobile-Logo">
                  <img
                    src="./menu-mobile.png"
                    alt=""
                    className="Hamburger-menu"
                  />
                </li>
                <li className="mobile-logo mobile-logoRight">
                  <img
                    src="./2490870.png"
                    alt=""
                    className="Navigation-logo "
                  />
                </li>
                <li className="Navigation-listItem Navigation-listItemFont Navigation-listItemP Header-li " >
                  Вход
                </li>
                <li className="Navigation-listItem Navigation-listItemFont Header-li">Регистрация</li>
              </ul>
            </Col>



            <Col lgOffset={5} mdOffset={5} lg={4} xs={6}>
              <ul className="Navigation-rightMenu u-height100">
                <li className="Navigation-listItem Navigation-listItemFont u-marginRight Header-li">
                  Возможности
              </li>
                <li className="Navigation-listItem Navigation-listItemFont u-marginRight Header-li">Тарифы</li>
                <li className="Navigation-listItem Navigation-listItemFont u-marginRight Header-li">Партнерам</li>
                <li className="Navigation-listItem Navigation-listItemFont u-marginRight Header-li">Помощь</li>
                <li className="Header-logo">
                  <img
                    src="./2490870.png"
                    alt=""
                    className="Navigation-logo Header-li"
                  />
                </li>
              </ul>
            </Col>
          </Row>


        </Grid>
      </header >
    );
  }
}

export default Header;
