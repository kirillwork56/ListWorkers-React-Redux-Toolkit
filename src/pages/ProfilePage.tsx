import ErrorMessage from "components/ErrorMessage";
import Layout from "components/Layout";
import Loader from "components/Loader";
import MyCard from "components/MyCard";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetOneWorkerQuery } from "redux/workersApi";

interface Props {}

const ProfilePage: FC<Props> = () => {
  const params = useParams();

  const { data, error, isError, isLoading } = useGetOneWorkerQuery(params.id!);

  return (
    <Layout>
      {isError && (
        <ErrorMessage
          status={"status" in error! ? error.status : ""}
          dataError={"data" in error! ? JSON.stringify(error.data) : ""}
          type={"danger"}
        />
      )}

      {isLoading && <Loader />}

      <MyCard {...data!} />

      <Link to={`/`}>Return to list</Link>
    </Layout>
  );
};

export default ProfilePage;
