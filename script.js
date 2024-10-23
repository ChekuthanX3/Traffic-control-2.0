let musicPlaying = false;
const songs = {
    "03:30": "songs/song1.mp3",
    "04:00": "songs/song2.mp3",
    "07:30": "songs/song3.mp3",
    "10:30": "songs/song4.mp3",
    "12:30": "songs/song5.mp3",
    "17:30": "songs/song6.mp3",
    "19:30": "songs/song7.mp3",
    "21:30": "songs/song8.mp3",
};

const audio = new Audio();

document.getElementById("musicSwitch").addEventListener("click", toggleMusic);

function toggleMusic() {
    musicPlaying = !musicPlaying;
    if (musicPlaying) {
        startPlaying();
    } else {
        audio.pause();
    }
}

function startPlaying() {
    const now = new Date();
    const currentTime = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

    if (songs[currentTime]) {
        audio.src = songs[currentTime];
        audio.play();
    }
    setTimeout(startPlaying, 60000); // Check every minute
}
