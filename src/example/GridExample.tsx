import React, { FC } from "react";

import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

const lightBlue = 'rgba(0, 146, 255, .7)'

const deepBlue = 'rgba(0, 146, 255, 1)'

const GridExample: FC = () => {
  return (
    <>
      {/* <Row style={{ width: '600px', height: '50px' }}>
        <Col style={{ backgroundColor: lightBlue }} span={24}>24</Col>
      </Row>
      <br />
      <Row style={{ width: '600px', height: '50px' }}>
        <Col style={{ backgroundColor: lightBlue }} span={12}>12</Col>
        <Col style={{ backgroundColor: deepBlue }} span={12}>12</Col>
      </Row>
      <br />
      <Row style={{ width: '600px', height: '50px' }}>
        <Col style={{ backgroundColor: lightBlue }} span={8}>8</Col>
        <Col style={{ backgroundColor: deepBlue }} span={8}>8</Col>
        <Col style={{ backgroundColor: lightBlue }} span={8}>8</Col>
      </Row>
      <br />
      <Row style={{ width: '600px', height: '50px' }}>
        <Col style={{ backgroundColor: lightBlue }} span={6}>6</Col>
        <Col style={{ backgroundColor: deepBlue }} span={6}>6</Col>
        <Col style={{ backgroundColor: lightBlue }} span={6}>6</Col>
        <Col style={{ backgroundColor: deepBlue }} span={6}>6</Col>
      </Row>
      <br /> */}
      <Row style={{ width: '600px', height: '50px' }} gutter={16}>
        <Col span={6}><div style={{ backgroundColor: lightBlue, height: '100%' }}>6</div></Col>
        <Col span={6}><div style={{ backgroundColor: deepBlue, height: '100%' }}>6</div></Col>
        <Col span={6}><div style={{ backgroundColor: lightBlue, height: '100%' }}>6</div></Col>
        <Col span={6}><div style={{ backgroundColor: deepBlue, height: '100%' }}>6</div></Col>
      </Row>
    </>
  )
}

export default GridExample