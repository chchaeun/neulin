import { ChangeEvent } from "react";
import { useStepper } from "../../../shared/hook/useStepper";
import { Info, Meal, Sleep } from "../model/type";
import Stepper from "../../../shared/component/Stepper";
import Button from "../../../shared/component/Button";

const Init = () => {
  const { isFirst, isLast, currentStep, data, updateData, prev, next } =
    useStepper<Info>({
      steps: ["아침", "점심", "저녁", "기상", "취침"],
      stepFilters: [
        (data: Info) => {
          if (data.meal.findIndex((m) => m.name === "아침") > -1) {
            return "기상";
          }
        },
      ],
      initData: {
        meal: [],
        sleep: [],
      },
    });

  const handleInputMealChange = (name: Meal, time: number) => {
    updateData((data) => {
      const origin = data.meal.find((m) => m.name === name);

      if (origin === undefined) {
        data.meal.push({
          name,
          time,
        });
        return;
      }

      origin.name = name;
      origin.time = time;
    });
  };

  const handleInputSleepChange = (name: Sleep, time: number) => {
    updateData((data) => {
      const origin = data.sleep.find((s) => s.name === name);

      if (origin === undefined) {
        data.sleep.push({
          name,
          time,
        });
        return;
      }

      origin.name = name;
      origin.time = time;
    });
  };

  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl text-green">
          {["아침", "점심", "저녁"].includes(currentStep) ? "식사" : "취침"}{" "}
          정보를 알려주세요
        </h1>
        <h2 className="text-lg text-black">
          일상 속 저속노화를 돕기 위해 알림을 드려요
        </h2>
      </div>
      <Stepper currentStep={currentStep}>
        {["아침", "점심", "저녁"].map((meal) => (
          <Stepper.Step
            key={meal}
            name={meal}
            className="flex flex-col gap-10 text-lg"
          >
            <div className="flex flex-col gap-1">
              <label htmlFor={meal}>
                {meal} 식사 시간을 입력해주세요 (24시 기준)
              </label>
              <div className="p-2 border-b-2">
                <input
                  type="number"
                  min={0}
                  max={24}
                  name={meal}
                  className="w-10 focus:outline-none"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    console.log(Number(e.target.value));
                    handleInputMealChange(meal as Meal, Number(e.target.value));
                  }}
                  value={data.meal.find((m) => m.name === meal)?.time}
                />
                시
              </div>
            </div>
            <Button onClick={next}>{meal}은 안 먹어요</Button>
          </Stepper.Step>
        ))}
        {["취침", "기상"].map((sleep) => (
          <Stepper.Step name={sleep} key={sleep}>
            <div className="flex flex-col gap-1 text-lg">
              <label>{sleep} 시간을 입력해주세요 (24시 기준)</label>
              <div className="p-2 border-b-2">
                <input
                  type="number"
                  min={0}
                  max={24}
                  name={sleep}
                  className="w-10 focus:outline-none"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputSleepChange(
                      sleep as Sleep,
                      Number(e.target.value)
                    )
                  }
                  value={data.sleep.find((s) => s.name === "취침")?.time}
                />
                시
              </div>
            </div>
          </Stepper.Step>
        ))}
      </Stepper>

      <div className="flex gap-2">
        {!isFirst && (
          <Button className="bg-black " onClick={prev}>
            이전
          </Button>
        )}
        <Button className="bg-black" onClick={isLast ? handleSubmit : next}>
          다음
        </Button>
      </div>
    </div>
  );
};

export default Init;
