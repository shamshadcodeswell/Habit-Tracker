import { useState } from "react";
import HABITS from "../../utils/dummy-daily-habits";
import HabitForm from "./homepage/HabitForm";
import IndividualTasks from "./homepage/IndividualTasks";

const TodayTaskList = () => {
  const [habits, setHabit] = useState(HABITS);
  const [showForm, setShowForm] = useState(false);

  const toggleHabit = (id) => {
    setHabit(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit,
      ),
    );
  };

  const completed = habits.filter((habit) => habit.completed === true);
  const Incomplete = habits.filter((habit) => habit.completed === false);

  return (
    <div className="today-habits">
      <button onClick={() => setShowForm(!showForm)}>Create a habit</button>
      <HabitForm
        showForm={showForm}
        setShowForm={setShowForm}
        setHabit={setHabit}
        habits={habits}
      ></HabitForm>
      {Incomplete.length > 0 ? (
        <h2 className="task-status-heading">Incomplete</h2>
      ) : (
        <div></div>
      )}
      {Incomplete.map((habit) => {
        if (Incomplete)
          return (
            <IndividualTasks
              key={habit.id}
              habit={habit}
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
        if (habit.completed) {
          return (
            <IndividualTasks
              key={habit.id}
              habit={habit}
              toggleHabit={toggleHabit}
            ></IndividualTasks>
          );
        }
      })}
    </div>
  );
};

export default TodayTaskList;
