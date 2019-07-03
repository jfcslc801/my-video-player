// Document get element by ID
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

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

// video skip
function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

// volume and video play rate
function handleRangeUpdate(){
    console.log(this.name)
    console.log(this.value)
    video[this.name] = this.value;
}

// vide scrubber
function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.getElementsByClassName.flexBasis = `${percent}%`
}

// event listeners fire with function
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))