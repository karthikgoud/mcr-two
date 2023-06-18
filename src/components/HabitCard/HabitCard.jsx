import { useState } from "react";
import { useData } from "../../context/DataContext";
import EditModal from "../Modal/EditModal/EditModal";
import styles from "./HabitCard.module.css";
import SingleHabit from "../Modal/SingleHabit/SingleHabit";

const HabitCard = ({ habit }) => {
  const {
    data: { allHabits, showNewModal, showEditModal },
    dispatch,
  } = useData();

  const [showEdit, setShowEdit] = useState(false);
  const [showSingleHabit, setShowSingleHabit] = useState(false);

  function handleDelete(id) {
    dispatch({ type: "DELETE_HABIT", payload: id });
  }

  function handleArchive(habit) {
    // console.log(habit);
    dispatch({ type: "ARCHIVE_HABIT", payload: habit });
    dispatch({ type: "DELETE_HABIT", payload: habit._id });
  }

  return (
    <div>
      <div className={styles.cardCont}>
        <div>{habit.name}</div>
        <button onClick={() => handleArchive(habit)}>Archive</button>
        <button onClick={(e) => setShowEdit(true)}>Edit Habit</button>
        <button onClick={() => handleDelete(habit._id)}>Delete</button>
        <button onClick={(e) => setShowSingleHabit(true)}>
          Show Habit Details
        </button>
      </div>
      {showEdit && <EditModal habit={habit} setShowEdit={setShowEdit} />}
      {showSingleHabit && (
        <SingleHabit habit={habit} setShowSingleHabit={setShowSingleHabit} />
      )}
    </div>
  );
};

export default HabitCard;
