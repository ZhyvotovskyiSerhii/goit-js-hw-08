import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const currentTime = 'vimeoPlayer-current-time';
player.on('play', playerOnPlay);
// on(event: string, callback: function): void
// Add an event listener for the specified event. Will call the callback with a single parameter, data, that contains the data for that event. See events below for details.

// seeked
// Triggered when the player seeks to a specific time. A timeupdate event will also be fired at the same time.

function updatedTime() {
    player.getCurrentTime().then(seconds => localStorage.setItem(currentTime, seconds))
}

player.on('timeupdate', throttle(updatedTime, 999));
// timeupdate
// Triggered as the currentTime of the video updates. It generally fires every 250ms, but it may vary depending on the browser.

function playerOnPlay() {
     player.setCurrentTime(localStorage.getItem(currentTime))
}
// var onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };
// If later on you decide that you don’t need to listen for play anymore.
// Alternatively, `off` can be called with just the event name to remove all
// listeners.

// player.off('play', playerOnPlay);

