const IndividualTasks = (props) => {
  //   const habit = props.habit;
  const { todayCompleted } = props;
  const habit = props.habit;
  const status = todayCompleted.includes(habit.id);

  return (
    <div className="individual-task">
      <input
        className="task-checkbox"
        type="checkbox"
        checked={status}
        onChange={() => props.toggleHabit(habit.id)}
      ></input>
      <span>{habit.name}</span>
    </div>
  );
};

export default IndividualTasks;
