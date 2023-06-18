import { useState } from "react";
import { useData } from "../../context/DataContext";
import styles from "./NewHabitModal.module.css";
import { v4 as uuid } from "uuid";

const NewHabitModal = () => {
  const {
    data: { allHabits, showNewModal },
    dispatch,
  } = useData();

  const [habit, setHabit] = useState({
    _id: uuid(),
    name: "",
    repeat: "",
    goal: "",
    timeOfDay: "",
    startDate: "",
  });

  function handleModal(status) {
    dispatch({ type: "SHOW_NEW_MODAL", payload: status });
  }

  function handleSave(habit) {
    dispatch({ type: "ADD_HABIT", payload: habit });
    dispatch({ type: "SHOW_NEW_MODAL", payload: false });
  }

  console.log(habit);
  return (
    <div className={styles.modalCont}>
      <div>New Habit</div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={habit.name}
            onChange={(e) =>
              setHabit((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </label>
      </div>
      <div className={styles.selectCont}>
        <div>
          <label htmlFor="repeat">Repeat: </label>
          <select
            name=""
            id="repeat"
            value={habit.repeat}
            onChange={(e) =>
              setHabit((prev) => ({ ...prev, repeat: e.target.value }))
            }
          >
            <option value="">select...</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div>
          <label htmlFor="repeat">Goal: </label>
          <select
            name=""
            id="repeat"
            value={habit.goal}
            onChange={(e) =>
              setHabit((prev) => ({ ...prev, goal: e.target.value }))
            }
          >
            <option value="">select</option>
            <option value="dailyOnce">1 times Daily</option>
            <option value="weeklyOnce">1 times Weekly</option>
            <option value="monthyOnce">1 times Monthly</option>
          </select>
        </div>
      </div>
      <div className={styles.selectCont}>
        <div>
          <label htmlFor="repeat">Time Of Day: </label>
          <select
            name=""
            id="repeat"
            value={habit.timeOfDay}
            onChange={(e) =>
              setHabit((prev) => ({ ...prev, timeOfDay: e.target.value }))
            }
          >
            <option value="">select</option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div>
          <label htmlFor="repeat">Start Date: </label>
          <select
            name=""
            id="repeat"
            value={habit.startDate}
            onChange={(e) =>
              setHabit((prev) => ({ ...prev, startDate: e.target.value }))
            }
          >
            <option value="today">Today</option>
            <option value="">select</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="nextWeek">Next Week</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={() => handleModal(false)}>Discard</button>
        <button onClick={() => handleSave(habit)}>Save</button>
      </div>
    </div>
  );
};

export default NewHabitModal;
