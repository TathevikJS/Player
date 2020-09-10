var data = {
    title: [
        'polo-pan-canopee',
        "Nemra - Nare",
        "Billie Eilish - everything i wanted",
        "Claud Debussy - Reverie",
        "Tigran Hamasyan - Leaving Paris",
        "Freddie Mercury - Mamma"
    ],
    song: [
        'music/polo-pan-canopee.mp3',
        "music/Nemra - Nare.mp3",
        "music/Billie Eilish - everything i wanted.mp3",
        "music/Debussy Reverie.mp3",
        "music/Tigran Hamasyan Leaving Paris.mp3",
        "music/Freddie Mercury - Mamma (Bohemian Rhapsody).mp3"
    ],
    poster: ["https://i.gifer.com/7d20.gif",
        "https://media2.giphy.com/media/5xtDarmSceWsGyD4VeE/source.gif",
        "https://cdn.dribbble.com/users/1242979/screenshots/7099165/music.gif",
        "https://i.gifer.com/8RWM.gif",
        "https://media2.giphy.com/media/Y0GyZQpjqafoatTvjB/giphy.gif",
        "https://cdn.dribbble.com/users/1921422/screenshots/5511883/freddie.gif"
    ]
}


var currentSong = 0; 

var song = new Audio();
console.log(song);


window.onload = function () {
    playSong()
}

//playSong()
//playOrPauseSong
//next
//prev
//decrease
//muted
//increase
//timing

function playSong() {
    song.src = data.song[currentSong];
    let songTitle = document.getElementById("songTitle");
    songTitle.textContent = data.title[currentSong];
    let img = document.getElementById("row1");
    img.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    let main = document.getElementById("main")
    main.style.backgroundImage = "url(" + data.poster[currentSong] + ")";
    song.play();
}

function playOrPauseSong() {
    let play = document.getElementById("play")
    //console.log(play);

    if (song.paused) {
        song.play();
        play.src = "https://image.flaticon.com/icons/svg/1783/1783239.svg" //pause
    } else {
        song.pause();
        play.src = "https://image.flaticon.com/icons/svg/1262/1262172.svg" //play
    }
}

song.addEventListener("timeupdate", function () {
    //console.log(song.currentTime);
    //console.log(song.duration);
    let fill = document.getElementById("fill")
    //console.log(fill);
    let position = song.currentTime / song.duration;
    fill.style.width = position * 100 + "%"; // fill

    convertTime(song.currentTime) // cur. time

    if (song.ended) {
        next()
    }
})


function convertTime(seconds) {
    let currentTime = document.getElementById("currentTime")
    let min = Math.floor(seconds / 60)
    let sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent = min + ":" + sec
    totalTime(Math.round(song.duration))
};

function totalTime(seconds) {
    var min = Math.floor(seconds / 60)
    var sec = Math.floor(seconds % 60)
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    currentTime.textContent += " / " + min + ":" + sec
};



function next() {
    currentSong++;
    if (currentSong >= data.song.length) {
        currentSong = 0
    }
    playSong();
    play.src = "https://image.flaticon.com/icons/svg/1783/1783239.svg"
    
}

function pre() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = data.song.length - 1;
    }
    playSong();
    play.src = "https://image.flaticon.com/icons/svg/1783/1783239.svg"
}


function muted() {
    var mute = document.getElementById("mute")
    if (song.muted) {
        song.muted = false
        mute.src = "https://image.flaticon.com/icons/svg/1783/1783304.svg" //mute
    } else {
        song.muted = true
        mute.src = "https://image.flaticon.com/icons/svg/1783/1783295.svg" //unmute
    }
}

function increase() {
    song.volume += 0.2;
}

function decrease() {
    song.volume -= 0.2;
}