import { createContext, useContext, useReducer } from "react";

import { v4 as uuid } from "uuid";

export const DataContext = createContext();

const initialState = {
  allHabits: [
    {
      _id: uuid(),
      name: "Reading",
      repeat: "daily",
      goal: "dailyOnce",
      timeOfDay: "morning",
      startDate: "today",
      archived: false,
    },
    {
      _id: uuid(),
      name: "Playing",
      repeat: "daily",
      goal: "dailyOnce",
      timeOfDay: "morning",
      startDate: "today",
      archived: false,
    },
  ],
  showNewModal: false,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SHOW_NEW_MODAL":
      return { ...state, showNewModal: action.payload };
    case "SHOW_EDIT_MODAL":
      return { ...state, showEditModal: action.payload };

    case "ADD_HABIT":
      return { ...state, allHabits: [...state.allHabits, action.payload] };

    case "EDIT_HABIT":
      const updatedHabit = state.allHabits.map((habit) =>
        habit._id === action.payload._id ? action.payload : habit
      );
      return { ...state, allHabits: updatedHabit };

    case "DELETE_HABIT":
      const deletedHabit = state.allHabits.filter(
        (habit) => habit._id !== action.payload
      );
      return { ...state, allHabits: deletedHabit };

    case "ARCHIVE_HABIT":
      const updatedArr = [...state.allHabits].map((habit) =>
        habit._id === action.payload._id
          ? { ...action.payload, archived: true }
          : habit
      );

      console.log("chsks", updatedArr);
      return { ...state, allHabits: updatedArr };

    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, initialState);

  console.log("asdasd", data);

  return (
    <DataContext.Provider value={{ data, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
