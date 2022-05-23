import { FC } from "react";
import { Alert } from "react-bootstrap";

interface Props {
  type: "danger" | "info";
  status: string | number;
  dataError: string;
}

const ErrorMessage: FC<Props> = ({ type, status, dataError }) => {
  return (
    <Alert variant={type}>
      <Alert.Heading>
        Something went wrong, please try again later
      </Alert.Heading>
      Status: {status} {dataError}
    </Alert>
  );
};

export default ErrorMessage;
