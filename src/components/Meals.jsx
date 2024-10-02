import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const res = await axios.get("http://localhost:3000/meals");
      if (res.statusText !== "OK") {
        //Handle Error
      }
      setMeals(res.data);
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {" "}
      {meals.map((m) => (
       <MealItem key={m.id} meal={m}/>
      ))}
    </ul>
  );
}
