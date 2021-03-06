import axios from "axios";
import { getGameDetailsURL, getGameScreenshotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(getGameDetailsURL(id));
  const screenShotData = await axios.get(getGameScreenshotsURL(id));

  // dispatch({
  //   type: "REFRESH_DETAIL",
  // });
  dispatch({
    type: "LOADING_DETAIL",
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};

export const unLoadDetail = () => async (dispatch) => {
  dispatch({
    type: "REFRESH_DETAIL",
  });
};
