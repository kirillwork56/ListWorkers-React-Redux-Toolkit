import { FC } from "react";
import { Alert } from "react-bootstrap";

interface Props {
  type: "danger" | "info";
  text: string;
}

const ErrorMessage: FC<Props> = ({ type, text }) => {
  return (
    <Alert variant={type}>
      <Alert.Heading>
        Something went wrong, please try again later
      </Alert.Heading>
      {text}
    </Alert>
  );
};

export default ErrorMessage;
