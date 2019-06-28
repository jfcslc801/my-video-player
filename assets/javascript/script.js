// Document get element by ID
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButton = document.querySelector('[data-skip]');
const ranges = document.querySelector('.player__slider');

// Play / Pause Toggle 
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]()
}
// update button play / pause icon
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

// event listeners fire with function
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay);