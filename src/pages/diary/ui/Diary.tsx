import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./diary.css";
import { useState } from "react";

const Diary = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();

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

  console.log(selectedDate);

  const formatDate = (dateObj: Date) => {
    const month = dateObj.getMonth() + 1;
    const date = dateObj.getDate();

    return `${month}월 ${date}일`;
  };

  return (
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
        events={[
          {
            id: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVSmf93deo4eRDFApavmeDeVQmQw087pvBCg&s",
            start: "2024-10-01",
          },
        ]}
        eventContent={renderEventContent}
        dayCellContent={renderDayCellContent}
        contentHeight={450}
      />
      {selectedDate && (
        <div className="flex flex-col gap-3">
          <span className="text-xl">{formatDate(selectedDate)}</span>
          <ul className="flex flex-col gap-1 p-3 text-white list-disc list-inside rounded bg-green ">
            <span className="text-lg">아침</span>
            <li>6~8시간 잤어요</li>
            <li>일어나서 물 한 잔을 마셨어요</li>
            <li>잡곡밥을 먹었어요</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Diary;
