//Base _URL
const base_url = "https://rawg.io/api/";

// date

const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDay();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const CurrentYear = new Date().getFullYear();
const CurrentMonth = getCurrentMonth();
const CurrentDay = getCurrentDay();
const CurrentDate = `${CurrentYear}-${CurrentMonth}-${CurrentDay}`;
const lastYear = `${CurrentYear - 1}-${CurrentMonth}-${CurrentDay}`;
const nextYear = `${CurrentYear + 1}-${CurrentMonth}-${CurrentDay}`;

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
