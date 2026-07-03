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

  return (
    <div className="today-habits">
      <button onClick={() => setShowForm(!showForm)}>Create a habit</button>
      <HabitForm
        showForm={showForm}
        setShowForm={setShowForm}
        setHabit={setHabit}
        habits={habits}
      ></HabitForm>
      {habits.map((habit) => {
        return (
          <IndividualTasks
            key={habit.id}
            habit={habit}
            toggleHabit={toggleHabit}
          ></IndividualTasks>
        );
      })}
    </div>
  );
};

export default TodayTaskList;
