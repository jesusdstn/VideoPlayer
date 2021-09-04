const $video = document.getElementById("video");
const $play = document.getElementById("play");
const $pause = document.getElementById("pause");
const $backward = document.getElementById("backward");
const $forward = document.getElementById("forward");
const $range = document.querySelector("#range");


$play.addEventListener('click', playVideo);
$pause.addEventListener('click', pauseVideo);

function playVideo() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function pauseVideo() {
  $video.pause();
  $play.hidden = false;
  $pause.hidden = true;
}

$backward.addEventListener('click', backwardVideo);

function backwardVideo(){
  $video.currentTime -= 10;
}

$forward.addEventListener('click', forwardVideo);
function forwardVideo(){
  $video.currentTime += 10;
}

$video.addEventListener('loadedmetadata',handleLoaderMetadata);
$video.addEventListener('timeupdate', handleTimeUpdate);
// console.log($video.readyState);
if ($video.readyState >= 2) {
  handleLoaderMetadata();
}

function handleLoaderMetadata(){
  $range.max = $video.duration;
}

function handleTimeUpdate(){
  $range.value = $video.currentTime;
}

$range.addEventListener('input',handleInput);
function handleInput(){
  $video.currentTime = $range.value;
}