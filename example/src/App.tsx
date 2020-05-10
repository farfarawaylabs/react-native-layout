import React from 'react';
import { Text } from 'react-native';
import {
  Row,
  Alignment,
  Col,
  Center,
} from '@farfarawaylabs/react-native-layout';

export default function App() {
  return simpleCenter();
}

const colsHorizontalAlignmentAndSize = () => {
  return (
    <Row style={{ marginTop: 50 }}>
      <Col
        size={2}
        style={{ backgroundColor: '#FDB0C0' }}
        horizontalAlign={Alignment.End}
      >
        <Text>One</Text>
      </Col>
      <Col
        style={{ backgroundColor: '#ED0DD9' }}
        horizontalAlign={Alignment.Center}
      >
        <Text>Two</Text>
      </Col>
      <Col
        style={{ backgroundColor: '#FD4659' }}
        horizontalAlign={Alignment.Start}
      >
        <Text>Three</Text>
      </Col>
    </Row>
  );
};

const colsVerticalAlignment = () => {
  return (
    <Row style={{ marginTop: 50 }}>
      <Col
        style={{ backgroundColor: '#FDB0C0', height: 300 }}
        horizontalAlign={Alignment.End}
        verticalAlign={Alignment.Center}
      >
        <Text>One</Text>
      </Col>
      <Col
        style={{ backgroundColor: '#ED0DD9', height: 300 }}
        horizontalAlign={Alignment.Center}
        verticalAlign={Alignment.SpaceAround}
      >
        <Text>Two</Text>
        <Text>Another Two</Text>
        <Text>And another Two</Text>
      </Col>
      <Col
        style={{ backgroundColor: '#FD4659', height: 300 }}
        horizontalAlign={Alignment.Start}
        verticalAlign={Alignment.End}
      >
        <Text>Three</Text>
      </Col>
    </Row>
  );
};

const rowsVerticalAlignmentAndSizing = () => {
  return (
    <Col style={{ marginTop: 50 }}>
      <Row
        style={{ backgroundColor: '#107AB0' }}
        size={2}
        verticalAlign={Alignment.Center}
      >
        <Text>One</Text>
      </Row>
      <Row style={{ backgroundColor: '#FDC1C5' }} verticalAlign={Alignment.End}>
        <Text>Two</Text>
      </Row>
      <Row
        style={{ backgroundColor: '#FD5956' }}
        verticalAlign={Alignment.Start}
      >
        <Text>Three</Text>
      </Row>
    </Col>
  );
};

const rowsHorizontalAlignmentAndHeights = () => {
  return (
    <Col style={{ marginTop: 50 }}>
      <Row
        style={{ backgroundColor: '#107AB0', width: '100%' }}
        height={200}
        verticalAlign={Alignment.Center}
        horizontalAlign={Alignment.Center}
      >
        <Text>One</Text>
      </Row>
      <Row
        style={{ backgroundColor: '#FDC1C5', width: 300 }}
        verticalAlign={Alignment.End}
        horizontalAlign={Alignment.End}
        height={300}
      >
        <Text>Two</Text>
      </Row>
      <Row
        style={{ backgroundColor: '#FD5956', width: 300 }}
        verticalAlign={Alignment.Start}
        horizontalAlign={Alignment.SpaceBetween}
        height={100}
      >
        <Text>Three</Text>
        <Text>Three</Text>
        <Text>Three</Text>
      </Row>
    </Col>
  );
};

const simpleCenter = () => {
  return (
    <Center
      vertical
      horizontal
      style={{ width: '100%', height: '100%', backgroundColor: '#FDC1C5' }}
    >
      <Text>Dead center</Text>
    </Center>
  );
};
