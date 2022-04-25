import ErrorMessage from "components/ErrorMessage";
import MyCard from "components/MyCard";
import MyDropdown from "components/MyDropdown";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FC, useEffect } from "react";
import { fetchWorkersAT } from "redux/reducers/appReducer";

interface Props {}

const Cards: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const personArr = useAppSelector((state) => state.app.personArr);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(fetchWorkersAT());
  }, [dispatch]);

  if (!personArr && !isLoading)
    return <ErrorMessage text={"No data"} type={"info"} />;

  return (
    <>
      {!isLoading && (
        <div className="mb-3">
          <MyDropdown />
        </div>
      )}

      {personArr?.map((person) => (
        <div className="mb-3" key={person.id}>
          <MyCard {...person} />
        </div>
      ))}
    </>
  );
};

export default Cards;
