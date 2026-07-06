import { useOutletContext } from "react-router-dom";
import DayCards from "./DayCards";
const Weekly = () => {
  const { completions, setCompletions } = useOutletContext();
  //   console.log(completions);

  //   const getToday = (date = new Date()) => {
  //     const y = date.getFullYear();
  //     const m = String(date.getMonth() + 1).padStart(2, "0");
  //     const d = String(date.getDate()).padStart(2, "0");
  //     return `${y}-${m}-${d}`;
  //   };
  //   const today = getToday();
  //   console.log(new Date(today).toLocaleDateString("en-US", { weekday: "long" }));

  //   const nearestMonday =
  const dates = Object.keys(completions).sort();
  const lastDay = new Date(dates[dates.length - 1]).getDay();
  const diff = lastDay === 0 ? 6 : lastDay;
  const weekDays = [];

  for (let i = dates.length - diff; i < dates.length; i++) {
    weekDays.push(dates[i]);
  }
  //   console.log(weekDays);
  //   console.log(lastDay);
  //   const lastDate =
  return (
    <div>
      <h1 className="weekly-view-heading">Weekly View</h1>
      <div className="dayCards Container"></div>
      <DayCards weekDays={weekDays}></DayCards>
    </div>
  );
};
export default Weekly;
