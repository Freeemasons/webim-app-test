import React, { Component } from "react";
import { Row, Col, Grid } from "react-flexbox-grid";

// import "./styles.css";
// import "./styles.less";
import "./styles.scss";

class Footer extends Component {
  render() {
    return (

      <footer className="Footer">
        <Grid fluid>
          <Row >
            <Col xs={12} lg={2}>

              <ul className="Footer-Navigation">
                <li className="">
                  <img src="../150x35.png" alt="" className="Footer-Logo Footer-mobileHide" />
                </li>
                <li className=" Footer-smallText">
                  Webim 2018-2017
                </li>
                <li className=" Footer-smallText">
                  Все права защищены
                </li>
              </ul>
            </Col>

            <Col xs={2}>
              <ul className="Footer-Navigation Footer-mobileHide">
                <li className="Footer-liMainNumber"> +7 (800) 500-49-32</li>
                <li className=" Footer-bigText Footer-liMainNumber Footer-liNumber">
                  +7 (499) 322-37-54
                </li>
                <li className=" Footer-smallText Footer-contactsCity">
                  Москва, Серебряническая набережная, 29
                </li>
                <li className=" Footer-bigText Footer-liMainNumber Footer-liNumber">
                  +7 (812) 385-53-37
                </li>
                <li className=" Footer-smallText Footer-contactsCity">
                  Санкт-Петербург, Чкаловский проспект, 15
                </li>
              </ul>
            </Col>

            <Col xsOffset={6} xs={2}>
              <ul className="Footer-Navigation Footer-mobileHide">
                <li className=" Footer-smallText Footer-smallText--emailC u-whiteText">
                  contact@webim.ru
                </li>
                <li className="Footer-smallText Footer-smallText--emailS u-whiteText">
                  sales@webim.ru
                </li>
                <li className="Footer-smallText Footer-schedule">
                  понедельник - пятница с 10.00 - 18.00
                </li>
                <li className="">
                  <img src="../Bino.svg" alt="" className="Footer-Icon" />
                  <img src="../vk.svg" alt="" className="Footer-Icon" />
                  <img src="../Fb.svg" alt="" className="Footer-Icon" />
                  <img src="../Inst.svg" alt="" className="Footer-Icon" />
                </li>
              </ul>
            </Col>

            <Col xsOffset={11} xs={1}>
              <img src="../msn.svg" className="Footer-ChatButton" />
            </Col>
          </Row>

        </Grid>
      </footer>
    );
  }
}

export default Footer;

