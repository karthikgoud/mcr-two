import React from "react";
import styles from "./SingleHabit.module.css";

const SingleHabit = ({ setShowSingleHabit, habit }) => {
  return (
    <div className={styles.singleCont}>
      <h1>Habit Details</h1>
      <h3>Name: {habit.name}</h3>
      <p>Repeat: {habit.repeat}</p>
      <p>Goal: {habit.goal}</p>
      <p>Time Of Day: {habit.timeOfDay}</p>
      <p>Start Date: {habit.startDate}</p>
      <button onClick={() => setShowSingleHabit(false)}>Close</button>
    </div>
  );
};

export default SingleHabit;
