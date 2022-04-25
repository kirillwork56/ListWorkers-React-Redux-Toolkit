import MyCard from "components/MyCard";
import { useAppSelector } from "hooks/hooks";
import { FC } from "react";

interface Props {}

const Cards: FC<Props> = () => {
  const personArr = useAppSelector((state) => state.app.personArr);

  //Todo

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
