const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searched: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
      break;
    default:
      return { ...state };
  }
};

export default gamesReducer;
