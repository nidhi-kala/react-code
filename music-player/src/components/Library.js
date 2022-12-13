import LibrarySong from "./LibrarySong.js";

const Library = ({ songs }) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <ul className="library-songs">
        {songs.map((song) => {
          return <LibrarySong song={song} />;
        })}
      </ul>
    </div>
  );
};

export default Library;
