import { useEffect } from "react";
import { playAudio } from "../util";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  audioRef,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo,
  songs,
  setSongs,
  setCurrentSong,
}) => {
  //useEffect
  useEffect(() => {
    //add active state to current song after skip-back or forward
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
  }, [currentSong]);

  //EventHandler
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const skipSongHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-back") {
      if (currentIndex === 0) {
        setCurrentSong(songs[songs.length - 1]);
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    playAudio(isPlaying, audioRef);
  };
  const animationPercentage = (songInfo.currentTime / songInfo.duration) * 100;
  //adding styles
  // const trackAnim = {
  //   transform: `translateX(${songInfo.animationPercentage}%)`,
  // };
  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div className="track">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div
            style={{
              transform: `translateX(${animationPercentage}%)`,
            }}
            className="animate-track"
          ></div>
        </div>
        <p>{getTime(songInfo.duration || 0)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler("skip-back")}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("skip-forward")}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    </div>
  );
};

export default Player;
