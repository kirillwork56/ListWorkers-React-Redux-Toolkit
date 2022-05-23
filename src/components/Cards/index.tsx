import MyCard from "components/MyCard";
import { FC } from "react";
import { PersonI } from "types/PersonI";

interface Props {
  personArr: PersonI[];
}

const Cards: FC<Props> = ({ personArr }) => {
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
