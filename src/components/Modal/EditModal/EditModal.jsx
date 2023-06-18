import { useState } from "react";
import styles from "./EditModal.module.css";
import { v4 as uuid } from "uuid";
import { useData } from "../../../context/DataContext";

const EditModal = ({ habit, setShowEdit }) => {
  const {
    data: { allHabits, showNewModal },
    dispatch,
  } = useData();

  const [updateHabit, setUpdateHabit] = useState(habit);

  function handleUpdate(updateHabit) {
    dispatch({ type: "EDIT_HABIT", payload: updateHabit });
    setShowEdit(false);
  }
  return (
    <div className={styles.modalCont}>
      <div>Edit Habit</div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={updateHabit.name}
            onChange={(e) =>
              setUpdateHabit((prev) => ({ ...prev, name: e.target.value }))
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
            value={updateHabit.repeat}
            onChange={(e) =>
              setUpdateHabit((prev) => ({ ...prev, repeat: e.target.value }))
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
            value={updateHabit.goal}
            onChange={(e) =>
              setUpdateHabit((prev) => ({ ...prev, goal: e.target.value }))
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
            value={updateHabit.timeOfDay}
            onChange={(e) =>
              setUpdateHabit((prev) => ({ ...prev, timeOfDay: e.target.value }))
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
            value={updateHabit.startDate}
            onChange={(e) =>
              setUpdateHabit((prev) => ({ ...prev, startDate: e.target.value }))
            }
          >
            <option value="">select</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="nextWeek">Next Week</option>
          </select>
        </div>
      </div>
      <div>
        <button onClick={() => setShowEdit(false)}>Discard</button>
        <button onClick={() => handleUpdate(updateHabit)}>Update</button>
      </div>
    </div>
  );
};

export default EditModal;
