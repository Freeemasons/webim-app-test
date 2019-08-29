import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

import "./styles.css";

class AfterInstallationSteps extends Component {
  render() {
    return (
      <section className="Installation-Section">
        <Grid fluid>
          <Row center="xs">
            <Col lg={6} xs={10}>
              <header>
                <h1 className="Installation-h1Header">
                  ЧТО ВАС ЖДЕТ ПОСЛЕ УСТАНОВКИ
                </h1>
              </header>
              <p className="Installation-paragraph firstInstAfterPar">
                Идейные соображения высшего порядка, а также сложившаяся
                структура организации позволяет
              </p>
              <ul className="Installation-paragraph Installation-paragraph--htmlSection">
                <li className="AfterInst-ListItem">
                  <img src="../step_01.svg" className="imgAfter" />
                  <div className="step-1">
                    <h3 className="AfterInstListItem--h3">Шаг 1.</h3>
                    <p className="Installation-paragraph Installationparagraph--after">
                      Создание учетной записи компании и администратора
                  </p>
                  </div>
                </li>
                <li className="AfterInst-ListItem">
                  <img src="../step_02.svg" className="imgAfter" />
                  <h3 className="AfterInstListItem--h3">Шаг 2.</h3>
                  <p className="Installation-paragraph Installationparagraph--after">
                    Активация учетной записи
                  </p>
                </li>
                <li className="AfterInst-ListItem">
                  <img src="../step_03.svg" className="imgAfter" />
                  <h3 className="AfterInstListItem--h3">Шаг 3.</h3>
                  <p className="Installation-paragraph Installationparagraph--after">Начальная настройка</p>
                </li>
                <li className="AfterInst-ListItem">
                  <img src="../step_04.svg" className="imgAfter" />
                  <h3 className="AfterInstListItem--h3">Шаг 4.</h3>
                  <p className="Installation-paragraph Installationparagraph--after">
                    Установка кнопки Webim на сайт
                  </p>
                </li>
                <li className="AfterInst-ListItem">
                  <img src="../step_05.svg" className="imgAfter" />
                  <h3 className="AfterInstListItem--h3">Шаг 5.</h3>
                  <p className="Installation-paragraph Installationparagraph--after">
                    Регистрация оператора
                  </p>
                </li>
                <li className="AfterInst-ListItem">
                  <img src="../step_06.svg" className="imgAfter" />
                  <h3 className="AfterInstListItem--h3">Шаг 6.</h3>
                  <p className="Installation-paragraph Installationparagraph--after">Тест сервиса</p>
                </li>
              </ul>
            </Col>
          </Row>

          <Row center="xs" className="u-Padding30">
            <Col lg={6} xs={10}>
              <Row start="xs">
                <Col >
                  <button className="Button Button--standartText Button--marRight20">
                    Все возможности Webim
                </button>
                  <button className="Button Button--standartText Button--standartBgBlue">
                    Протестировать бесплатно
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

export default AfterInstallationSteps;
