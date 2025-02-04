import React from "react";

const VideoTestimonials = () => {
  const videos = [
    { id: "1", url: "https://www.youtube.com/embed/yNfh_NyIkdE" },
    { id: "2", url: "https://www.youtube.com/embed/oc3g0RElFko" },
    { id: "3", url: "https://www.youtube.com/embed/ECymrx-xsdk" },
    { id: "4", url: "https://www.youtube.com/embed/Gn3dkFJtCg8" },
  ];

  return (
    <div className=" py-10">
      <h2 className="text-white text-3xl text-center font-bold mb-6">
        Customer Testimonials
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {videos.map((video) => (
          <div key={video.id} className="bg-black rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-[300px] h-[500px] sm:w-[250px] sm:h-[400px]"
              src={video.url}
              title={`Video ${video.id}`}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoTestimonials;
