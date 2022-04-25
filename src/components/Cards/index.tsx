import MyCard from "components/MyCard";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FC, useEffect } from "react";
import { fetchWorkersAT } from "redux/reducers/appReducer";

interface Props {}

const Cards: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const personArr = useAppSelector((state) => state.app.personArr);

  useEffect(() => {
    dispatch(fetchWorkersAT());
  }, [dispatch]);

  if (!personArr) return <p>No data(</p>;
  return (
    <>
      {personArr?.map((person) => (
        <div className="mb-3" key={person.id}>
          <MyCard {...person} />
        </div>
      ))}
    </>
  );
};

export default Cards;
