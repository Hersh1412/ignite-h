// Components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// Custom Components
import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";
import GameDetail from "../components/GameDetail";

// Function
const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // fetch data from api to redux store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get data from redux store
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList>
      {pathId && <GameDetail />}
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcomingGames.map((item) => (
          <Game
            name={item.name}
            released={item.released}
            id={item.id}
            image={item.background_image}
            key={item.id}
          />
        ))}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popularGames.map((item) => (
          <Game
            name={item.name}
            released={item.released}
            id={item.id}
            image={item.background_image}
            key={item.id}
          />
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((item) => (
          <Game
            name={item.name}
            released={item.released}
            id={item.id}
            image={item.background_image}
            key={item.id}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
