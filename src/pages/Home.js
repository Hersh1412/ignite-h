// Components
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

// Custom Components
import { loadGames } from "../actions/gamesAction";

// Function
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  });

  return (
    <div>
      <h1>home</h1>
    </div>
  );
};

export default Home;
