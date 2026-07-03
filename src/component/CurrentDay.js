import HABITS from "../../utils/dummy-daily-habits";
import TodayTaskList from "./TodayTaskList";
const CurrentDay = () => {
  const today = new Date();
  console.log(today);
  return (
    <div className="homepage">
      <h1 className="homePage-today">{today.toDateString()}</h1>
      <TodayTaskList></TodayTaskList>
    </div>
  );
};
export default CurrentDay;
