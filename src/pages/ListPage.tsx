import Cards from "components/Cards";
import ErrorMessage from "components/ErrorMessage";
import Layout from "components/Layout";
import Loader from "components/Loader";
import MyDropdown from "components/MyDropdown";
import { FC } from "react";
import { useGetWorkersQuery } from "redux/workersApi";

interface Props {}

const ListPage: FC<Props> = () => {
  const { data, error, isError, isLoading } = useGetWorkersQuery(10);

  return (
    <Layout>
      <h1>List workers</h1>

      {isError && (
        <ErrorMessage
          status={"status" in error! ? error.status : ""}
          dataError={"data" in error! ? JSON.stringify(error.data) : ""}
          type={"danger"}
        />
      )}

      {isLoading && <Loader />}

      {!isLoading && !isError && (
        <div className="mb-3">
          <MyDropdown />
        </div>
      )}

      <Cards personArr={data!} />
    </Layout>
  );
};

export default ListPage;
