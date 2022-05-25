"use strict";

const wrapMusic = document.querySelector(".wrapper_music"),
  imgMusic = document.querySelector(".img_nusic"),
  artistName = document.querySelector(".artist"),
  musicName = document.querySelector(".musicName"),
  start = document.querySelector(".start"),
  musicRange = document.querySelector("#input_range"),
  end = document.querySelector(".end"),
  play = document.querySelector(".play"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  vol = document.querySelector("#vol");

let trackIndex = 0;
let playMusic = false;
// let playRandom = false;

let currentMusic = document.createElement("audio");

let Playlist = [
  {
    img: "Tanir & Tyomcha - DA DA DA",
    isname: "Music 1",
    artist: "Artist 1",
    music: "./music/music1.m4a",
  },
  {
    img: "Татарин,Татем ",
    isname: "Music 2",
    artist: "Artist 2",
    music: "./music/music2.m4a",
  },
  {
    img: "Бабек Мамедрзаев",
    isname: "Music 3",
    artist: "Artist 3",
    music: "./music/music3.m4a",
  },
  {
    img: "Текст песни Кукушка ",
    isname: "Music 4",
    artist: "Artist 4",
    music: "./music/music4.m4a",
  },
  {
    img: "Текст песни Кукушка ",
    isname: "Music 5",
    artist: "Artist 5",
    music: "./music/music5.m4a",
  },
];

loadMusic(trackIndex);
// load music

function loadMusic() {
  clearInterval(update);

  currentMusic.src = Playlist[trackIndex].music;
  artistName.textCotent = Playlist[trackIndex].artist;
  musicName.textContent = Playlist[trackIndex].isname;

  currentMusic.addEventListener("ended", nexMusic);

  var update = setInterval(setControl, 1000);
}

function playPouse() {
  playMusic ? Pause() : Play();
}

// Play

function Play() {
  currentMusic.play();
  play.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`;
  playMusic = true;
}

// Paus
function Pause() {
  currentMusic.pause();
  play.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
  playMusic = false;
}

// Next
function nexMusic() {
  if (trackIndex < Playlist.length - 1) {
    trackIndex += 1;
  } else {
    trackIndex = 0;
  }

  loadMusic(trackIndex);
  Play();
}

// PREV

function prevMusic() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    trackIndex = Playlist.length - 1;
  }
  loadMusic(trackIndex);
  Play();
}

// Set select
function setSelect() {
  let select = currentMusic.duration * (musicRange.value / 100);
  currentMusic.currentTime = select;
  setControl(musicRange.currentTime);
}

// Set volume

function setVolume() {
  let volume = currentMusic.volume;
  currentMusic.volume = vol.value / 100;
}

function setControl() {
  let initVolume = 0;
  if (!isNaN(currentMusic.duration)) {
    let initVolume = currentMusic.currentTime * (100 / currentMusic.duration);
    musicRange.value = initVolume;
  }
}

setControl();

// controller

vol.addEventListener("input", setVolume);
musicRange.addEventListener("input", setSelect);

// events

prev.addEventListener("click", prevMusic);
play.addEventListener("click", playPouse);
next.addEventListener("click", nexMusic);
