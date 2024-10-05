import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./diary.css";
import { useState } from "react";
import { useStore } from "../../../app/useStore";
import { checkList } from "../model/check-list";
import { Meal } from "../model/type";
import { formatDate } from "../util/formatDate";
import Modal from "../../../shared/component/Modal";

const Diary = () => {
  const [firstVisit, setFirstVisit] = useStore("firstVisit");
  const [diary] = useStore("diary");
  const [selectedDate, setSelectedDate] = useState<Date>();

  const events = Object.keys(diary);

  const renderEventContent = (eventInfo: {
    event: { id: string; start: Date };
  }) => {
    const handleDateClick = () => {
      setSelectedDate(eventInfo.event.start);
    };
    return (
      <div onClick={handleDateClick}>
        <img src={eventInfo.event.id} />
      </div>
    );
  };

  const renderDayCellContent = (arg: { date: Date }) => {
    return arg.date.getDate();
  };

  const formatDateTitle = (dateObj: Date) => {
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();

    return `${month}월 ${date}일`;
  };

  const getCheckListContent = (title: Meal, content: string) => {
    const [tag, id] = content.split("-");
    return checkList[title].find(
      (value) => value.tag === tag && value.id === id
    )?.content;
  };

  return (
    <>
      {firstVisit && (
        <Modal
          text={
            "습관이 필요한 시간에 알림을 드릴게요. 천천히, 부담없이 저속노화를 실천해요."
          }
          onClose={() => {
            setFirstVisit(false);
          }}
        />
      )}
      <div className="flex flex-col min-h-full gap-10">
        <FullCalendar
          locale="kr"
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          events={events.map((event) => {
            return {
              id: `${process.env.PUBLIC_URL}/public/stamp.png`,
              start: event,
            };
          })}
          eventContent={renderEventContent}
          dayCellContent={renderDayCellContent}
          contentHeight={450}
        />
        {selectedDate && (
          <div className="flex flex-col gap-3">
            <span className="text-xl">{formatDateTitle(selectedDate)}</span>
            {Object.keys(diary[formatDate(selectedDate)]).map((title) => (
              <ul
                key={title}
                className="flex flex-col gap-1 p-3 text-white list-disc list-inside rounded bg-green"
              >
                <span className="text-lg">{title}</span>
                {diary[formatDate(selectedDate)][title].map(
                  (content: string) => (
                    <li key={content}>
                      {getCheckListContent(title as Meal, content)}
                    </li>
                  )
                )}
              </ul>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Diary;
