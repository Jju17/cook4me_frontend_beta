import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";

export default function useCartUserMeals() {
  const [meals, setMeals] = useState(null);
  const {
    user: { uid: userId = "" },
  } = useContext(UserContext);

  useEffect(() => {
    async function getTimelinePhotos() {}

    getTimelinePhotos();
  }, [userId]);

  return { meals };
}
