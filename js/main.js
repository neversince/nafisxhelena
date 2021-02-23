window.onload = () => {
  document.oncontextmenu = () => false;
volumeSlider.defaultValue = 100;
player.volume = volumeSlider.value / 1000;
initializePlayer();
}

var songs = [
/* "media/we did it... together.mp3",
"media/repeat.mp3",
"media/from the start.mp3",
"media/gettingtomyhead.mp3",
"media/pave low.mp3",
"media/2022 my year fr.mp3",
"media/professionals.mp3",
"media/burglary.mp3",
"media/head on my shoulders.mp3",
"media/help me.mp3",
"media/its all a waste.mp3",
"media/make u feel.mp3",
"media/impatient.mp3",
"media/velvet.mp3",
"media/angel.mp3", */
"media/saints.mp3",
"media/alone.mp3",
"media/itami.mp3",
"media/angels.mp3",
"media/memory.mp3",
"media/waster.mp3"
];

var songLinks = [
/* "https://soundcloud.com/wido123456789/wedidit",
"https://soundcloud.com/mental/rep",
"https://soundcloud.com/d1vwv/from-the-start-loveboy-prod-with3r",
"https://soundcloud.com/funeral/gtmh",
"https://soundcloud.com/kketamine/pave-low-w-kiryano-1",
"https://soundcloud.com/saturn27/2022-my-year-fr",
"https://soundcloud.com/prodpitfall/professionals-ft-tropes-dltzk",
"https://soundcloud.com/novaganghellsing/burglary",
"https://soundcloud.com/sglily/shoulder",
"https://soundcloud.com/rosesleeves/helpme",
"https://soundcloud.com/ericdoa/iaaw",
"https://soundcloud.com/d1vwv/make-u-feel-prod-skressiankon",
"https://soundcloud.com/rosesleeves/impatient",
"https://soundcloud.com/lil4c/velvet",
"https://soundcloud.com/n_o1se/kketamine-angel-ft-kiryano-prod-maknae" */
];

var playing = Math.floor(Math.random() * songs.length - 1);

function initializePlayer() {
incrementCurrentSong(0)
player.addEventListener('ended', (e) => {
  incrementCurrentSong(1)
  playSong();
}, false);
}

function changeVolume (val) {
player.volume = val / 200;
}

function playPause(el) {
if (el.className == "button fas fa-play")
{
    playSong();
    el.className = "button fas fa-pause";
}
else
{
    player.pause();
    el.className = "button fas fa-play";
}
return false;
}

function incrementCurrentSong(count) {
playing = (playing + count) % songs.length;
if (playing < 0) { playing = songs.length - 1 }
music.src = songs[playing];
player.load();
}

function playSong() {
player.play();
updateMarquee();
}

function updateMarquee() {
nowPlaying.innerHTML = String(songs[playing].substring(6, songs[playing].length - 4));
nowPlaying.href = songLinks[playing];
nowPlaying.target = "_blank"; 
}


/* --------------------------
* GLOBAL VARS
* -------------------------- */
// The date you want to count down to
var targetDate = new Date("2020/08/01 00:00:00");   

// Other date related variables
var days;
var hrs;
var min;
var sec;

/* --------------------------
* ON DOCUMENT LOAD
* -------------------------- */
$(function() {
// Calculate time until launch date
timeToLaunch();
// Transition the current countdown from 0 
numberTransition('#days .number', days, 3000, 'easeOutQuad');
numberTransition('#hours .number', hrs, 3000, 'easeOutQuad');
numberTransition('#minutes .number', min, 3000, 'easeOutQuad');
numberTransition('#seconds .number', sec, 3000, 'easeOutQuad');
// Begin Countdown
setTimeout(countDownTimer,1001);
});

/* --------------------------
* FIGURE OUT THE AMOUNT OF 
TIME LEFT BEFORE LAUNCH
* -------------------------- */
function timeToLaunch(){
// Get the current date
var currentDate = new Date();

// Find the difference between dates
var diff = (currentDate - targetDate)/1000;
var diff = Math.abs(Math.floor(diff));  

// Check number of days until target
days = Math.floor(diff/(24*60*60));
sec = diff - days * 24*60*60;

// Check number of hours until target
hrs = Math.floor(sec/(60*60));
sec = sec - hrs * 60*60;

// Check number of minutes until target
min = Math.floor(sec/(60));
sec = sec - min * 60;
}

/* --------------------------
* DISPLAY THE CURRENT 
COUNT TO LAUNCH
* -------------------------- */
function countDownTimer(){ 

// Figure out the time to launch
timeToLaunch();

// Write to countdown component
$( "#days .number" ).text(days);
$( "#hours .number" ).text(hrs);
$( "#minutes .number" ).text(min);
$( "#seconds .number" ).text(sec);

// Repeat the check every second
setTimeout(countDownTimer,1000);
}

/* --------------------------
* TRANSITION NUMBERS FROM 0
TO CURRENT TIME UNTIL LAUNCH
* -------------------------- */
function numberTransition(id, endPoint, transitionDuration, transitionEase){
// Transition numbers from 0 to the final number
$({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
  duration: transitionDuration,
  easing:transitionEase,
  step: function() {
    $(id).text(Math.floor(this.numberCount));
  },
  complete: function() {
    $(id).text(this.numberCount);
  }
}); 
};