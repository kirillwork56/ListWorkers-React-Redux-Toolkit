import ErrorMessage from "components/ErrorMessage";
import Layout from "components/Layout";
import Loader from "components/Loader";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FC, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchOneWorkerAT } from "redux/reducers/appReducer";

interface Props {}

const ProfilePage: FC<Props> = () => {
  const params = useParams();

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector((state) => state.app.isLoading);
  const errorStr = useAppSelector((state) => state.app.error);
  const person = useAppSelector((state) => state.app.person);

  useEffect(() => {
    const id = params.id;
    if (typeof id === "string") dispatch(fetchOneWorkerAT(+id));
  }, [dispatch, params]);

  return (
    <>
      <Layout>
        {errorStr !== null && <ErrorMessage text={errorStr} type={"danger"} />}
        {isLoading && <Loader />}
        <h2>{person?.name}</h2>
        <h4>{person?.jobTitle}</h4>
        Profile id: {params.id}:
        <ul>
          <li>
            Email: <a href={`mailto:${person?.email}`}>{person?.email}</a>
          </li>
          <li>Work experience: {person?.experience} years</li>
          <li>Country: {person?.country}</li>
        </ul>
        <Link to={`/`}>Return to list</Link>
      </Layout>
      ;
    </>
  );
};

export default ProfilePage;
