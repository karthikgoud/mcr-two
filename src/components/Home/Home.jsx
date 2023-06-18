import { useState } from "react";
import { useData } from "../../context/DataContext";
import HabitCard from "../HabitCard/HabitCard";
import NewHabitModal from "../Modal/NewHabitModal";
import styles from "./Home.module.css";

const Home = () => {
  const {
    data: { allHabits, showNewModal },
    dispatch,
  } = useData();

  function handleModal(status) {
    dispatch({ type: "SHOW_NEW_MODAL", payload: status });
  }

  return (
    <div className={styles.container}>
      <a href="/archive">go to archive</a>
      <div className={styles.addBtn} onClick={(e) => handleModal(true)}>
        +
      </div>
      <div className={styles.cardCont}>
        {allHabits.map((habit) => (
          <HabitCard habit={habit} />
        ))}
      </div>
      {showNewModal && <NewHabitModal />}
    </div>
  );
};

export default Home;
