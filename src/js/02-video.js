import Player from '@vimeo/player';
const _ = require('lodash');

const iframe = document.querySelector('iframe');

const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const previousVideoProgress = localStorage.getItem(LOCALSTORAGE_KEY);

if (previousVideoProgress) {
  player.setCurrentTime(Number(previousVideoProgress));
}

player.on('play', function (e) {
  //console.log();
});

player.on('timeupdate', _.throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(e.seconds));
}

