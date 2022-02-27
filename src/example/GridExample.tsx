import React, { FC } from "react";

import Row from "../components/Grid/Row";
import Col from "../components/Grid/Col";

const lightBlue = 'rgba(0, 146, 255, .7)'

const deepBlue = 'rgba(0, 146, 255, 1)'

const wrapStyle = {
  backgroundColor: deepBlue,
  'text-align': 'center',
  padding: '8px 0',
  color: '#fff'
}

const lightWrapStyle = {
  ...wrapStyle,
  backgroundColor: lightBlue,
}

const noPaddingStyle = {
  ...wrapStyle,
  padding: 0,
}
const GridExample: FC = () => {
  return (
    <>
      <div>
        <h3>基本使用</h3>
        <Row style={{ width: '600px' }}>
          <Col style={wrapStyle} span={24}>24</Col>
        </Row>
        <br />
        <Row style={{ width: '600px' }}>
          <Col style={wrapStyle} span={12}>12</Col>
          <Col style={lightWrapStyle} span={12}>12</Col>
        </Row>
        <br />
        <Row style={{ width: '600px' }}>
          <Col style={wrapStyle} span={8}>8</Col>
          <Col style={lightWrapStyle} span={8}>8</Col>
          <Col style={wrapStyle} span={8}>8</Col>
        </Row>
        <br />
        <Row style={{ width: '600px' }}>
          <Col style={wrapStyle} span={6}>6</Col>
          <Col style={lightWrapStyle} span={6}>6</Col>
          <Col style={wrapStyle} span={6}>6</Col>
          <Col style={lightWrapStyle} span={6}>6</Col>
        </Row>
        <br />
      </div>
      <hr />
      <div>
        <h3>区块间隔</h3>
        <h4>Horizontal</h4>
        <Row style={{ width: '600px' }} gutter={16}>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
        </Row>
        <h3>Vertical</h3>
        <Row style={{ width: '600px' }} gutter={[16, 24]}>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
          <Col span={6}><div style={wrapStyle}>col-6</div></Col>
        </Row>
      </div>
      <hr />
      <div>
        <h3>左右偏移 Offset</h3>
        <Row style={{ width: '600px' }} gutter={16}>
          <Col span={8}><div style={wrapStyle}>col-8</div></Col>
          <Col span={8} offset={8}><div style={wrapStyle} >col-8 offset-8</div></Col>
        </Row>
        <br />
        <Row style={{ width: '600px' }} gutter={16}>
          <Col span={6} offset={6}><div style={wrapStyle}>col-8 offset-6</div></Col>
          <Col span={6} offset={6}><div style={wrapStyle} >col-8 offset-6</div></Col>
        </Row>
        <br />
        <Row style={{ width: '600px' }} gutter={16}>
          <Col span={12} offset={6}><div style={wrapStyle}>col-12 offset-6</div></Col>
        </Row>
      </div>
      <hr />
      <div>
        <h3>排版</h3>
        <h4>sub-element align left</h4>
        <Row justify="start" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <h4>sub-element align center</h4>
        <Row justify="center" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <h4>sub-element align end</h4>
        <Row justify="end" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <h4>sub-element align end</h4>
        <Row justify="end" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <h4>sub-element align space-around</h4>
        <Row justify="space-around" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <h4>sub-element align space-between</h4>
        <Row justify="space-between" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <h4>sub-element align space-evenly</h4>
        <Row justify="space-evenly" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={wrapStyle}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <div>
          <h3>栅格排序 push pull</h3>
          <Row justify="space-evenly" style={{ padding: '5px 0', backgroundColor: '#eeeeee' }}>
            <Col span={16} push={8}><div style={wrapStyle}>col-16 push-8</div></Col>
            <Col span={8} pull={16}><div style={lightWrapStyle}>col-8 pull-16</div></Col>
          </Row>
        </div>
      </div>
      <hr />
      <div>
        <h3>子元素垂直对齐</h3>
        <Row justify="center" align="top" style={{ padding: '20px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={{ ...wrapStyle, height: '60px' }}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={{ ...wrapStyle, height: '60px' }}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <br />
        <Row justify="space-around" align="middle" style={{ padding: '20px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={{ ...wrapStyle, height: '60px' }}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={{ ...wrapStyle, height: '60px' }}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
        <br />
        <Row justify="space-between" align="bottom" style={{ padding: '20px 0', backgroundColor: '#eeeeee' }}>
          <Col span={4}><div style={{ ...wrapStyle, height: '60px' }}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
          <Col span={4}><div style={{ ...wrapStyle, height: '60px' }}>col-4</div></Col>
          <Col span={4}><div style={lightWrapStyle}>col-4</div></Col>
        </Row>
      </div>
      <div>
        <h3>通过 order 来改变元素的排序</h3>
        <Row style={{ width: '600px' }}>
          <Col span={6} order={4}><div style={wrapStyle}>1 col-order-4</div></Col>
          <Col span={6} order={3}><div style={lightWrapStyle}>2 order-col-3</div></Col>
          <Col span={6} order={2}><div style={wrapStyle}>3 col-order-2</div></Col>
          <Col span={6} order={1}><div style={lightWrapStyle}>4 col-1</div></Col>
        </Row>
      </div>
      <div>
        <h3>Col 提供 flex 属性以支持填充</h3>
        <h4>Percentage columns</h4>
        <Row style={{ width: '600px' }}>
          <Col flex={2} style={wrapStyle}>2 / 5</Col>
          <Col flex={3} style={lightWrapStyle}>3 / 5</Col>
        </Row>
        <br />
        <h4>Fill rest</h4>
        <Row style={{ width: '600px' }}>
          <Col flex="100px" style={wrapStyle}>100px</Col>
          <Col flex="auto" style={lightWrapStyle}>fill rest</Col>
        </Row>
        <h4>Raw flex style</h4>
        <Row style={{ width: '600px' }}>
          <Col flex="1 1 200px" style={wrapStyle}>1 1 200px</Col>
          <Col flex="0 1 300px" style={lightWrapStyle}>0 1 300px</Col>
        </Row>
        <br />
        <Row style={{ width: '600px' }}>
          <Col flex="none" style={wrapStyle}>none</Col>
          <Col flex="auto" style={lightWrapStyle}>auto</Col>
        </Row>
      </div>
    </>
  )
}

export default GridExample