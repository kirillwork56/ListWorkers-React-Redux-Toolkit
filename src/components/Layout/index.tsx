import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Props {
  children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
};

export default Layout;
