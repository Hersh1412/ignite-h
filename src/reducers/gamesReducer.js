const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames: action.payload.popular,
        upcomingGames: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
      break;
    default:
      return { ...state };
  }
};

const fetchGames = () => {
  return {
    type: "FETCH_GAMES",
  };
};

export default gamesReducer;
