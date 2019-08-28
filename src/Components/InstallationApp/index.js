import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class InstallationApp extends Component {
  render() {
    return (
      <section className="Installation-Section u-bgWhite">
        <Grid fluid>
          <Row center="xs" center="xs">
            <Col lg={6} xs={12}>
              <header>
                <h1 className="Installation-h1Header InstallationHtml-header">
                  УСТАНОВКА ПРИЛОЖЕНИЯ ДЛЯ ОПЕРАТОРОВ WEBIM DASHBOARD
                </h1>
              </header>
              <p className="Installation-paragraph InstApp">
                Чтобы быть на связи с клиентами всегда, установите приложение
                Webim Dashboard
              </p>
              <ul className="Installation-paragraph Installation-paragraph--htmlSection">
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка приложения Webim Dashboard для iPhone
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по установке дополнительного программного
                    обеспечения для операторов  сервиса Webim, использующих
                    iPhone/iPad/etc от компании Apple.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка приложения Webim Dashboard для Android
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по установке дополнительного программного
                    обеспечения для операторов  сервиса Webim, использующих
                    платформу Google Android.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка приложения Webim Dashboard для Ubuntu
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по установке дополнительного программного
                    обеспечения для операторов  сервиса Webim, использующих
                    платформу Ubuntu.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Установка приложения Webim Dashboard
                  </a>
                  <p className="InstallationHtml-p">
                    Документация по установке дополнительного программного
                    обеспечения для операторов  сервиса Webim под ОС Microsoft
                    Windows.
                  </p>
                </li>
                <li className="InstallationHtml-li">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Link Installation-link"
                  >
                    Создание приложения Webim для Mac OS
                  </a>
                  <p className="InstallationHtml-p">
                    Пошаговая инструкция создания приложения для оператора Webim
                    для Mac OS с помощью Fluid
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

export default InstallationApp;
