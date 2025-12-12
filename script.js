let songs = [
  { title: "Tum he ho bandu", src: "song/song1.mp3", cover: "image/meme.png" },
  { title: "Tu tu tu meri", src: "song/song2.mp3", cover: "image/photo.jpg" }
];

let index = 0;
let audio = document.getElementById("audio");
let title = document.getElementById("title");
let cover = document.getElementById("cover");
let playBtn = document.getElementById("play");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
let progress = document.getElementById("progress");

function loadSong(i) {
  audio.src = songs[i].src;
  title.textContent = songs[i].title;
  cover.src = songs[i].cover;
}

loadSong(index);

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
    cover.style.animationPlayState = "running";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
    cover.style.animationPlayState = "paused";
  }
});

prevBtn.onclick = () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);
  audio.play();
  cover.style.animationPlayState = "running";
  playBtn.textContent = "⏸️";
};

nextBtn.onclick = () => {
  index = (index + 1) % songs.length;
  loadSong(index);
  audio.play();
  cover.style.animationPlayState = "running";
  playBtn.textContent = "⏸️";
};

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});
