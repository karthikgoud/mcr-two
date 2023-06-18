import { useData } from "../../context/DataContext";
import HabitCard from "../HabitCard/HabitCard";
import styles from "./Archive.module.css";

const Archive = () => {
  const { data } = useData();

  const renderArchive = data.allHabits.filter((habit) => habit.archived);

  return (
    <div>
      <a href="/">go to home</a>

      {renderArchive.map((habit) => (
        <HabitCard habit={habit} />
      ))}
    </div>
  );
};

export default Archive;
