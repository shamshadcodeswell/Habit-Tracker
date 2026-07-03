import HABITS from "../../../utils/dummy-daily-habits";
import TodayTaskList from "./TodayTaskList";
const CurrentDay = () => {
  const getToday = (date = new Date()) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const today = getToday();
  console.log(today);
  return (
    <div className="homepage">
      <h1 className="homePage-today">{today}</h1>
      <TodayTaskList today={today}></TodayTaskList>
    </div>
  );
};
export default CurrentDay;
