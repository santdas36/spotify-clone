import React from "react";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import "./SongRow.css";

function SongRow({ track, playSong }) {
  console.log(track);
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <div className="songRow__song">
        <img className="songRow__albumArt" src={track.album.images[0].url} alt="" />
        <div className="songRow__info">
          <h1>{track.name}</h1>
          <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}{track.album.name}
          </p>
        </div>
      </div>
      <FavoriteBorderRoundedIcon className="songRow__favorite"/>
    </div>
  );
}

export default SongRow;