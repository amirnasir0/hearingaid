import React, { useState } from "react";

const VideoTestimonials = () => {
  const videos = [
    { id: "1", videoId: "yNfh_NyIkdE" },
    { id: "2", videoId: "oc3g0RElFko" },
    { id: "3", videoId: "ECymrx-xsdk" },
    { id: "4", videoId: "Gn3dkFJtCg8" },
  ];

  const [loadedVideos, setLoadedVideos] = useState({});

  const loadIframe = (id) => {
    setLoadedVideos((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="py-10">
      <h2 className="text-white text-3xl text-center font-bold mb-6">
        Customer Testimonials
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="relative bg-black rounded-xl overflow-hidden shadow-lg w-[300px] h-[500px] sm:w-[250px] sm:h-[400px] cursor-pointer"
            onClick={() => loadIframe(video.id)}
          >
            {loadedVideos[video.id] ? (
              // Load actual iframe when clicked
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1`}
                title={`Video ${video.id}`}
                allowFullScreen
              ></iframe>
            ) : (
              // Show Thumbnail with Play Button
              <div className="relative w-full h-full">
                <img
                  src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                  alt={`Thumbnail for Video ${video.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 h-16 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
