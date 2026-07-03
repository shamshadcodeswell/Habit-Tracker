import { useState } from "react";

const HabitForm = (props) => {
  const [inputName, setInputName] = useState("");
  const { showForm, setHabit, setShowForm, habits } = props;
  const createHabit = () => {
    if (!inputName) return;
    let newHabit = { id: habits.length + 1, name: inputName, completed: false };
    console.log(newHabit);
    setHabit([...habits, newHabit]);
    setInputName("");
  };
  return (
    <div className={` habit-form ${showForm ? "form-open" : "form-closed"} `}>
      <input
        type="text"
        placeholder="Habit Name"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <div className="form-extraInfo">
        <p>Default Frequency - daily</p>
        <p>Default date - Today</p>
        <p>Default completion state - uncompleted</p>
      </div>
      <button
        onClick={() => {
          createHabit();
          setShowForm(!showForm);
        }}
        className="form-addButton"
      >
        Add
      </button>
    </div>
  );
};

export default HabitForm;
