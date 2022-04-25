import { FC } from "react";
import { Spinner } from "react-bootstrap";

interface Props {}

const Loader: FC<Props> = () => {
  return (
    <div className="d-flex justify-content-center m-3">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
