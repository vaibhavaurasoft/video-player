// import React, { useState } from "react";
// import ReactPlayer from "react-player";
// // import video1 from "../../public/videos/video.mp4"
// import video1 from "../videos/video1.mp4"

// function V() {
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const videoUrls = [
//     video1,
//     "https://media.w3.org/2010/05/sintel/trailer.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
//     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//   ];

//   return (
//     <>
//       <div>
//         <ReactPlayer
//           url={videoUrls[currentVideoIndex]}
//           playing={true} // Autoplay the videos
//           // controls={true}
//           onEnded={() =>
//             setCurrentVideoIndex(
//               (prevIndex) => (prevIndex + 1) % videoUrls.length
//             )
//           }
//         />
//       </div>
//     </>
//   );
// }

// export default V;


import React, { useState } from "react";
import ReactPlayer from "react-player";
import video1 from "../videos/video1.mp4"
import videoUrls from "./videos";

function V() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  return (
    <>
      <div>
        <ReactPlayer
          url={videoUrls[currentVideoIndex]}
          playing={true} // Autoplay video
          muted={true} // Mute video
          onEnded={() =>
            setCurrentVideoIndex(
              (prevIndex) => (prevIndex + 1) % videoUrls.length
            )
          }
        />
      </div>
    </>
  );
}

export default V;
