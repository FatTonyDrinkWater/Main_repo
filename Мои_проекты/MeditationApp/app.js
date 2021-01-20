const app = () => {
  const song = document.querySelector(`.song`);
  const playButton = document.querySelector(`.play-button`);
  const outline = document.querySelector(`.moving-outline circle`);
  const video = document.querySelector(`.vid-container video`);

  const sounds = document.querySelectorAll(`.sound-picker button`);

  const timeDisplay = document.querySelector(`.time-display`);
  const timeSelect = document.querySelectorAll(`.time-select button`);
  // Get the length of th outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  //Duration
  let fakeDuration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //Pick diferent sounds
  sounds.forEach((sound) => {
    sound.addEventListener("click", function () {
      song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      checkPlaying(song);
    });
  });

  // Play sound
  playButton.addEventListener("click", () => {
    checkPlaying(song);
  });

  //Select sound
  timeSelect.forEach((option) => {
    option.addEventListener("click", function () {
      fakeDuration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
        fakeDuration % 60
      )}`;
    });
  });

  // Function play and stop the sounds and change icons
  const checkPlaying = (song) => {
    if (song.paused) {
      song.play();
      video.play();
      playButton.src = "./svg/pause.svg";
    } else {
      song.pause();
      video.pause();
      playButton.src = "./svg/play.svg";
    }
  };
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = fakeDuration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    // Animate the circle
    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;

    //AnimateText
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (currentTime >= fakeDuration) {
      song.pause();
      song.currentTime = 0;
      play.src = ".svg/play.svg";
      video.pause();
    }
  };
};

// Animate the circle

app();
