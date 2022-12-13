import LibrarySong from "./LibrarySong.js";

const Library = ({ songs, setCurrentSong, audioRef }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <ul className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              song={song}
              setCurrentSong={setCurrentSong}
              songs={songs}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Library;
