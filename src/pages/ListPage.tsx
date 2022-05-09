import Cards from "components/Cards";
import ErrorMessage from "components/ErrorMessage";
import Layout from "components/Layout";
import Loader from "components/Loader";
import { useAppSelector } from "hooks/hooks";
import { FC } from "react";

interface Props {}

const ListPage: FC<Props> = () => {
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const errorStr = useAppSelector((state) => state.app.error);

  return (
    <Layout>
      <h1>List workers</h1>

      {errorStr !== null && <ErrorMessage text={errorStr} type={"danger"} />}

      {isLoading && <Loader />}

      <Cards />
    </Layout>
  );
};

export default ListPage;
