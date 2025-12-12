import React, { useState, useRef } from 'react';
import '../styles/Demo.css';

export const Demo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const useYouTubeEmbed = false;
  const videoUrl = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
  const youtubeVideoId = 'YOUR_YOUTUBE_VIDEO_ID';
  
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <section className="demo" id="demo">
      <div className="container">
        <h2 className="section-heading">See Lumen in Action</h2>
        <div className="demo-content">
          <div className="demo-video-wrapper">
            {useYouTubeEmbed ? (
              <iframe
                className="demo-video demo-video-iframe"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                title="Lumen smart ambient light demonstration video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                aria-label="Lumen smart ambient light demonstration video"
              />
            ) : hasError ? (
              <div className="demo-error">
                <p>Video failed to load. Please check your connection or use a different video source.</p>
                <p className="demo-error-hint">
                  To use your own video, update the <code>videoUrl</code> in <code>src/components/Demo.tsx</code>
                </p>
              </div>
            ) : (
              <>
                <video
                  ref={videoRef}
                  className="demo-video"
                  controls
                  preload="metadata"
                  poster="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop&q=80"
                  onPlay={handlePlay}
                  onPause={handlePause}
                  onError={handleError}
                  aria-label="Lumen smart ambient light demonstration video"
                >
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {!isPlaying && (
                  <div 
                    className="demo-video-overlay" 
                    aria-hidden="true"
                    onClick={handlePlayClick}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handlePlayClick();
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="demo-play-indicator">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="demo-play-icon"
                      >
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="demo-overlay-text">Click to play</p>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="demo-description">
            <h3>Experience the Magic</h3>
            <p>
              Watch how Lumen adapts to different environments, syncs with music,
              and creates the perfect ambiance for any moment. From morning productivity
              to evening relaxation, Lumen understands what you need.
            </p>
            <ul className="demo-features-list">
              <li>Mood-adaptive lighting</li>
              <li>Music synchronization</li>
              <li>Smart learning AI</li>
              <li>Voice control integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

