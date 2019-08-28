import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class Installation extends Component {
  render() {
    return (
      <section className="Installation-Section">
        <Grid fluid>

          <Row center="xs" center="xs">
            <Col lg={6} xs={12}>
              <header>
                <h1 className="Installation-h1Header">Установка webim</h1>
              </header>
              <div>
                <p className="Installation-paragraph">
                  Установка онлайн-консультанта Webim на ваш сайт не займет
                  много времени.
                  <p>
                    Вы можете установить онлайн-консультант Webim на ваш сайт и
                    протестировать его в течение 7 дней бесплатно.
                  </p>
                </p>
              </div>
            </Col>
          </Row>


          <Row center="xs" className="u-Padding30">
            <Col lg={6} xs={12}>
              <Row start="xs">
                <Col >
                  <button className="Button Button--standartText Button--marRight20">
                    Попробовать бесплатно
                  </button>
                  <button className="Button Button--standartText Button--standartTextTransparent">
                    Тарифы
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>

        </Grid>
      </section>
    );
  }
}

export default Installation;
