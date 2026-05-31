const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volume = document.getElementById('volume');
const playbackSpeed = document.getElementById('playbackSpeed');
const skipButtons = document.querySelectorAll('[data-skip]');

// Play / Pause
function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

// Update Play/Pause Button
function updateButton() {
  toggle.textContent = video.paused ? '►' : '❚ ❚';
}

// Update Progress Bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Set Volume
function handleVolume() {
  video.volume = this.value;
}

// Set Playback Speed
function handleSpeed() {
  video.playbackRate = this.value;
}

// Skip Forward / Backward
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Click Progress Bar to Seek
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event Listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);

video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

video.addEventListener('timeupdate', handleProgress);

volume.addEventListener('input', handleVolume);
playbackSpeed.addEventListener('input', handleSpeed);

skipButtons.forEach(button => {
  button.addEventListener('click', skip);
});

progress.addEventListener('click', scrub);
