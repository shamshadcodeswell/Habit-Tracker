import { useOutletContext } from "react-router-dom";
import HABITS from "../../../utils/dummy-daily-habits";

const DayCards = ({ weekDays }) => {
  const { completions, setCompletions } = useOutletContext();
  console.log(weekDays);
  console.log(completions);

  function dayData(day) {
    console.log(day);

    const daySummary = completions[day];
    const habitsCompleted = HABITS.filter((habit) =>
      daySummary.includes(habit.id),
    );
    const habitsIncomplete = HABITS.filter(
      (habit) => !daySummary.includes(habit.id),
    );

    return (
      <div>
        {habitsCompleted.length > 0 ? (
          <div className="day-status-change">
            <h3>Completed Habits</h3>
          </div>
        ) : (
          <div></div>
        )}
        {habitsCompleted.map((habit) => (
          <h4 key={habit.id} className="habit-name">
            {habit.name}
          </h4>
        ))}
        {habitsIncomplete.length > 0 ? (
          <div className="incomplete Habits">
            <h3>Incomplete Habits </h3>
          </div>
        ) : (
          <div></div>
        )}
        {habitsIncomplete.map((habit) => (
          <h4 key={habit.id} className="habit-name">
            {habit.name}
          </h4>
        ))}
      </div>
    );
  }

  return (
    <div className="daycardsContainer">
      {weekDays.map((day, i) => {
        return (
          <div key={i} className="individual card">
            <h2 className="day-Title">
              {new Date(day).toLocaleDateString("en-IN", {
                weekday: "long",
              })}
            </h2>
            {dayData(day)}
          </div>
        );
      })}
    </div>
  );
};
export default DayCards;
