// Components
import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

// Custom Components

import { smallImg } from "../util";
import { unLoadDetail } from "../actions/detailAction";

// Function
const GameDetail = ({ pathId }) => {
  const dispatch = useDispatch();
  const { screen, game, isLoading } = useSelector((state) => state.detail);
  const history = useHistory();

  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
      //
      //  dispatch(unLoadDetail());
    }
  };

  return (
    <>
      {!isLoading && (
        <StyledCardShadow className="shadow" onClick={exitDetailHandler}>
          <StyledDetail layoutId={pathId}>
            <StyledStats>
              <div className="rating">
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating: {game.rating}</p>
              </div>
              <StyledInfo>
                <h3>Platforms: </h3>
                <StyledPlatform>
                  {game.platforms.map((item) => (
                    <h3 key={item.platform.id}>{item.platform.name}</h3>
                  ))}
                </StyledPlatform>
              </StyledInfo>
            </StyledStats>
            <StyledMedia>
              <motion.img
                layoutId={`image ${pathId}`}
                src={smallImg(game.background_image, 1280)}
                alt={game.background_image}
              />
            </StyledMedia>
            <StyledDesc>
              <p>{game.description_raw}</p>
            </StyledDesc>
            <div className="gallery">
              {screen.results.map((item) => (
                <img
                  src={smallImg(item.image, 1280)}
                  alt={item.id}
                  key={item.id}
                />
              ))}
            </div>
          </StyledDetail>
        </StyledCardShadow>
      )}
    </>
  );
};

const StyledCardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
const StyledDetail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  left: 10%;
  color: black;
  position: absolute;
  img {
    width: 100%;
  }
`;

const StyledMedia = styled(motion.div)`
  margin-top: 2.5rem;
  img {
    width: 100%;
  }
`;
const StyledDesc = styled(motion.div)`
  margin: 3rem 0rem;
`;
const StyledStats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const StyledInfo = styled(motion.div)`
  text-align: center;
`;
const StyledPlatform = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
export default GameDetail;
