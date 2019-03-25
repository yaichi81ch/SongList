import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Hey Brother", duration: "4:19" },
    { title: "Waiting For Love", duration: "3:51" },
    { title: "The Nights", duration: "3:11" },
    { title: "Broken Arrows", duration: "4:15" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songsReducer,
  selectedSongReducer
});
