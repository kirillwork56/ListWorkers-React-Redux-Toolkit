import Layout from "components/Layout";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

const ErrorPage: FC<Props> = () => {
  return (
    <Layout>
      <h1 className="text-center">
        404 page not found <Link to={"/"}>Go Home</Link>
      </h1>
    </Layout>
  );
};

export default ErrorPage;
