const IndividualTasks = (props) => {
  //   const habit = props.habit;
  const habit = props.habit;
  return (
    <div className="individual-task">
      <input
        className="task-checkbox"
        type="checkbox"
        checked={habit.completed}
        onChange={() => props.toggleHabit(habit.id)}
      ></input>
      <span>{habit.name}</span>
    </div>
  );
};

export default IndividualTasks;
