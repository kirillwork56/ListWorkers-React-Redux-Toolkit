import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "components/Cards";
import ErrorMessage from "components/ErrorMessage";
import Loader from "components/Loader";
import { useAppSelector } from "hooks/hooks";
import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Props {}

const App: FC<Props> = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const errorStr = useAppSelector((state) => state.app.error);

  return (
    <Container>
      <Row>
        <Col>
          <h1>List workers</h1>

          {errorStr !== null && (
            <ErrorMessage text={errorStr} type={"danger"} />
          )}

          {isLoading && <Loader />}

          <Cards />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
