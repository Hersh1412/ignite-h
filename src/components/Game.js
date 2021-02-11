// Components
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Custom Components
import { loadDetail } from "../actions/detailAction";
import { smallImg } from "../util";
// Function
const Game = ({ name, released, id, image }) => {
  const strId = id.toString();

  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={strId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${strId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${strId}`}
          src={smallImg(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  );
};
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
