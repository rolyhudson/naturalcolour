import { useEffect, useState, useRef } from "react";
import { Howl, Howler } from "howler";

export default function Audio() {
  const audioContext = new AudioContext();
  let [play, setPlay] = useState(false);
  let track = null;
  let audioElement;
  var audio;

  const sound = useRef(
    new Howl({
      src: ["/sound.mp3"],
    })
  );

  function playTrex() {
    console.log(sound);
    sound.current.play();
  }

  const playClicked = () => {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    audio = new Audio("./dubstep-heavy-sub-bass-one-shot-2_E.wav");
    audio.play();

    // play or pause track depending on state
    if (!play) {
      var playPromise = audioElement.play();
      // In browsers that don’t yet support this functionality,
      // playPromise won’t be defined.
      if (playPromise !== undefined) {
        playPromise
          .then(function () {
            // Automatic playback started!
          })
          .catch(function (error) {
            // Automatic playback failed.
            // Show a UI element to let the user manually start playback.
            console.log(error);
          });
      }
      setPlay(true);
    } else {
      audioElement.pause();
      setPlay(false);
    }
  };

  useEffect(() => {
    console.log("Mounting");
    // get the audio element
    audioElement = document.querySelector("audio");
    console.log(audioElement);

    // if (track === null) {
    //   // pass it into the audio context
    //   track = audioContext.createMediaElementSource(audioElement);
    //   //connect our audio graph from the audio source/input node to the destination.
    //   track.connect(audioContext.destination);
    // }
  }, []);

  return (
    <>
      <audio src="./dubstep-heavy-sub-bass-one-shot-2_E.wav"></audio>
      <button
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={playTrex}
      >
        <span>Play/Pause</span>
      </button>
    </>
  );
}
