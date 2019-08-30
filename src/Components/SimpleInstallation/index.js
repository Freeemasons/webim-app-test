import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class SimpleInstallation extends Component {
  render() {
    return (
      <section className="Installation-Section u-bgWhite">
        <Grid fluid>
          <Row center="xs" center="xs">
            <Col lg={6} xs={10}>
              <header>
                <h1 className="Installation-h1Header">Простая установка</h1>
              </header>
              <div>
                <p className="Installation-paragraph">
                  Установка онлайн-консультанта Webim займет не более 15 минут.
                </p>
              </div>
            </Col>
          </Row>

          <Row center="xs" className="u-Padding30">

            <Col lg={6} xs={10}>

              <Row start="xs" middle="xs">
                <Col>

                  <ul className="Installation-Navigation">
                    <li className="SimpleInstallation-linkColumn">
                      <img
                        src="./SimpleInstallation1.png"
                        alt=""
                        className="simpleInstImg"
                      />
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Link Navigation-link SimpleInstallation-Link Installation-link u-mRight "
                      >
                        Регистрация
                      </a>
                    </li>

                    <li className="SimpleInstallation-linkColumn">
                      <img
                        src="./SimpleInstallation2.png"
                        alt=""
                        className="simpleInstImg"
                      />
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Link Navigation-link SimpleInstallation-Link Installation-link"
                      >
                        Установка HTML-кода
                      </a>
                    </li>
                  </ul>

                </Col>
              </Row>

            </Col>
          </Row>

        </Grid>
      </section>
    );
  }
}

export default SimpleInstallation;
