import Cards from "components/Cards";
import ErrorMessage from "components/ErrorMessage";
import Layout from "components/Layout";
import Loader from "components/Loader";
import MyDropdown from "components/MyDropdown";
import { FC, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { useGetWorkersQuery } from "redux/workersApi";

interface Props {}

const ListPage: FC<Props> = () => {
  const [countElement, setCountElement] = useState(5);

  const { data, error, isError, isLoading } = useGetWorkersQuery(countElement);

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
        <div className="mb-3 d-flex justify-content-between">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Сортировать
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>По опыту</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {
            //TODO Разпилить
          }
          <div>
            <Button
              className={`m-1 ${5 === countElement ? "active" : ""}`}
              variant="outline-secondary"
              onClick={() => setCountElement(5)}
            >
              5
            </Button>
            <Button
              className={`m-1 ${10 === countElement ? "active" : ""}`}
              variant="outline-secondary"
              onClick={() => setCountElement(10)}
            >
              10
            </Button>
            <Button
              className={`m-1 ${15 === countElement ? "active" : ""}`}
              variant="outline-secondary"
              onClick={() => setCountElement(15)}
            >
              15
            </Button>
          </div>
        </div>
      )}

      <Cards personArr={data!} />
    </Layout>
  );
};

export default ListPage;
