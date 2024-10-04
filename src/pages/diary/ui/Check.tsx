import { useSearchParams } from "react-router-dom";
import { checkList } from "../model/check-list";
import Button from "../../../shared/component/Button";
import { Meal } from "../model/type";
import { useState } from "react";
import { FaCheckSquare } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

const Check = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") as Meal;
  const categoryChecklist = checkList[category];

  const [checked, setChecked] = useState<string[]>([]);

  const getId = (tag: string, id: number) => {
    return `${tag}-${id}`;
  };

  const isChecked = (id: string) => {
    if (checked.indexOf(id) > -1) {
      return true;
    }

    return false;
  };

  const toggleChecked = (id: string) => {
    if (isChecked(id)) {
      setChecked((checkedList) =>
        checkedList.filter((checked) => checked !== id)
      );
      return;
    }

    setChecked((checkedList) => [...checkedList, id]);
  };

  const handleCompleteClick = () => {};

  return (
    <div className="flex flex-col gap-14">
      <h1 className="text-2xl text-green">
        오늘 {category}의 실천을 체크해봐요
      </h1>
      <div className="flex flex-col gap-3">
        {categoryChecklist.map(({ content, tag, id }) => (
          <Button
            key={getId(tag, id)}
            className="flex items-center gap-3"
            onClick={() => toggleChecked(getId(tag, id))}
          >
            {isChecked(getId(tag, id)) ? (
              <FaCheckSquare size={20} />
            ) : (
              <FaSquare size={20} />
            )}
            {content}
          </Button>
        ))}
      </div>
      <Button className="text-white bg-black" onClick={handleCompleteClick}>
        완료
      </Button>
    </div>
  );
};

export default Check;
