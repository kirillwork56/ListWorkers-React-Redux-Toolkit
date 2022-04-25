import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { FC } from "react";
import { Dropdown } from "react-bootstrap";
import { sortPersonArr } from "redux/reducers/appReducer";

interface Props {}

const MyDropdown: FC<Props> = () => {
  const dispatch = useAppDispatch();

  const sortByExp = () => {
    dispatch(sortPersonArr("exp"));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Сортировать
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={sortByExp}>По опыту</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MyDropdown;
