import Layout from "components/Layout";
import { FC } from "react";

interface Props {}

const ErrorPage: FC<Props> = () => {
  return <Layout>404 page not found</Layout>;
};

export default ErrorPage;
