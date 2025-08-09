import React, { useRef } from "react";

const App: React.FC = () => {
  // Ref for video element
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Play the video
  const handlePlay = (): void => {
    videoRef.current?.play();
  };

  // Pause the video
  const handlePause = (): void => {
    videoRef.current?.pause();
  };

  // Restart the video
  const handleRestart = (): void => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; // Reset to start
      videoRef.current.pause(); // Pause after reset (or play if needed)
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        width="600"
        src="./tom.mp4"
        controls={false} // Disable default controls
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
};

export default App;
