export const playAudio = (isPlaying, audioRef) => {
  if (isPlaying) {
    const playPromise = audioRef.current.Play();
    if (playPromise != undefined) {
      playPromise.then((audio) => {
        audioRef.current.Play();
      });
    }
  }
};
