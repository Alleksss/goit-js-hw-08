import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const player = new Player('vimeo-player');

const timeWatching = localStorage.getItem('videoplayer-current-time');
if (timeWatching) player.setCurrentTime(timeWatching);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}
