const playBtn = document.getElementById("playBtn");
const progress = document.getElementById("progress");
const songs = document.querySelectorAll(".song");

let audio = new Audio();
let isPlaying = false;

songs.forEach(song => {
  song.addEventListener("click", () => {
    audio.src = song.dataset.src;
    audio.play();
    playBtn.textContent = "⏸";
    isPlaying = true;
  });
});

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = "▶";
  } else {
    audio.play();
    playBtn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});