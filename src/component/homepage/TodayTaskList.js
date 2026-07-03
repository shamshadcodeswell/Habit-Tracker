import { useState } from "react";
import HABITS from "../../../utils/dummy-daily-habits";
import HabitForm from "./HabitForm";
import IndividualTasks from "./IndividualTasks";
import COMPLETIONS from "../../../utils/COMPLETIONS";
import { useOutletContext } from "react-router-dom";

const TodayTaskList = ({ today }) => {
  const { completions, setCompletions } = useOutletContext();
  // const [todayCompleted, setTodayCompleted] = useState()
  const [habits, setHabit] = useState(HABITS);
  const [showForm, setShowForm] = useState(false);

  const todayCompleted = completions[today];
  console.log(todayCompleted);

  const toggleHabit = (id) => {
    const status = todayCompleted.includes(id);
    let newTodayCompleted;
    if (!status) {
      newTodayCompleted = [...todayCompleted, id];
    } else {
      newTodayCompleted = todayCompleted.filter((habitid) => habitid != id);
    }
    setCompletions({ ...completions, [today]: newTodayCompleted });
  };

  const completed = habits.filter((habit) => todayCompleted.includes(habit.id));
  const incomplete = habits.filter(
    (habit) => !todayCompleted.includes(habit.id),
  );

  return (
    <div className="today-habits">
      <button onClick={() => setShowForm(!showForm)}>Create a habit</button>
      <HabitForm
        showForm={showForm}
        setShowForm={setShowForm}
        setHabit={setHabit}
        habits={habits}
      ></HabitForm>
      {incomplete.length > 0 ? (
        <h2 className="task-status-heading">Incomplete</h2>
      ) : (
        <div></div>
      )}
      {incomplete.map((habit) => {
        return (
          <IndividualTasks
            key={habit.id}
            habit={habit}
            todayCompleted={todayCompleted}
            toggleHabit={toggleHabit}
          ></IndividualTasks>
        );
      })}

      {completed.length > 0 ? (
        <h2 className="task-status-heading">Completed</h2>
      ) : (
        <div></div>
      )}
      {completed.map((habit) => {
        return (
          <IndividualTasks
            key={habit.id}
            habit={habit}
            todayCompleted={todayCompleted}
            toggleHabit={toggleHabit}
          ></IndividualTasks>
        );
      })}
    </div>
  );
};

export default TodayTaskList;
