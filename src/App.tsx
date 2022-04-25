import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "components/Cards";
import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Props {}

const App: FC<Props> = () => {
  return (
    <Container>
      <Row>
        <Col>Hello world</Col>
        <Cards />
      </Row>
    </Container>
  );
};

export default App;
