import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "components/Cards";
import MyDropdown from "components/MyDropdown";
import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Props {}

const App: FC<Props> = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>List workers</h1>
          <div className="mb-3">
            <MyDropdown />
          </div>
          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
