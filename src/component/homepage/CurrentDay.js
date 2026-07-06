import HABITS from "../../../utils/dummy-daily-habits";
import TodayTaskList from "./TodayTaskList";
const CurrentDay = () => {
  const getToday = (date = new Date()) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  // const today = getToday(); this was original date logic, but commented out  keeping today =""2026-07-03"" at the date of creation of project to keep the program running as the data is hardcoded and Date() will produce the date in which it will run, causing the program to break
  const today = "2026-07-03";
  console.log(today);
  return (
    <div className="homepage">
      <h1 className="homePage-today-date">{today}</h1>
      <h1 className="homePage-today-day">
        {new Date(today).toLocaleDateString("en-IN", { weekday: "long" })}
      </h1>
      <TodayTaskList today={today}></TodayTaskList>
    </div>
  );
};
export default CurrentDay;
