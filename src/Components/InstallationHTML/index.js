import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class InstallationHTML extends Component {
  render() {
    return (
      <section className="Installation-Section">
        <Grid fluid>
          <Row center="xs" center="xs">
            <Col lg={6} xs={12}>
              <header>
                <h1 className="Installation-h1Header InstallationWeb-header">Установка HTML-кода</h1>
              </header>
              <ul className="Installation-paragraph Installation-paragraph--htmlSection">
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка HTML-кода Webim для сайтов на Joomla
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по внедрению сервиса Webim на сайтах,
                    построенных на базе CMS Joomla.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка HTML-кода Webim для сайтов на Wordrpess
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по внедрению сервиса Webim на сайтах,
                    построенных на базе Wordrpess.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка HTML-кода Webim для сайтов на uCoz.ru
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по внедрению сервиса Webim на сайтах,
                    построенных на базе uCoz.ru.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка HTML-кода Webim для сайтов на webasyst.ru
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по внедрению сервиса Webim на сайтах,
                    построенных на webasyst.ru.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка HTML-кода Webim для любого сайта
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по внедрению сервиса Webim на сайтах с другой
                    CMS или написанных вручную.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default InstallationHTML;
