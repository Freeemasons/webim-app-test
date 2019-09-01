import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class Channels extends Component {
  render() {
    return (
      <section className="Installation-Section u-bgWhite">
        <Grid fluid>
          <Row center="xs" center="xs">
            <Col lg={6} xs={10}>
              <p className="Installation-paragraph ChannelsMobile-p">
                Webim – это не только онлайн-консультант. Интегрируйте и другие
                каналы, чтобы клиенты могли обращаться к вам любым удобным
                способом
              </p>
            </Col>
          </Row>
          <Row center="xs" middle="xs" top="lg">

            <Col xs={10} lg={2}>
              <ul>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./sn.svg" className="imgChannels " />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Социальные сети
                  </a>
                </li>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./msn.svg" className="imgChannels" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Мессенджеры
                  </a>
                </li>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./chatbots.svg" className="imgChannels" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Чатботы
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={10} lg={2} middle="xs">
              <ul>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./feedback.svg" className="imgChannels" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Форма обратной связи
                  </a>
                </li>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./yad.svg" className="imgChannels" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Яндекс диалоги
                  </a>
                </li>
              </ul>
            </Col>

            <Col xs={10} lg={2}>
              <ul>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./app.svg" className="imgChannels" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Чат в вашем приложении
                  </a>
                </li>
                <li className="AfterInst-ListItem Channels-margTop">
                  <img src="./email.svg" className="imgChannels" />
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Navigation-link SimpleInstallation-Link"
                  >
                    Электронная почта
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Channels;
