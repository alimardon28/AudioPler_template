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
  next = document.querySelector(".next");

let trackIndex = 0;
let playMusic = false;
let playRandom = false;

let currentMusic = document.createElement("audio");

let Playlist = [
  {
    img: "",
    isname: "Music 1",
    artist: "Artist 1",
    music: "./music/music1.m4a",
  },
  {
    img: "",
    isname: "Music 2",
    artist: "Artist 2",
    music: "./music/music2.m4a",
  },
  {
    img: "",
    isname: "Music 3",
    artist: "Artist 3",
    music: "./music/music3.m4a",
  },
  {
    img: "",
    isname: "Music 4",
    artist: "Artist 4",
    music: "./music/music4.m4a",
  },
  {
    img: "",
    isname: "Music 5",
    artist: "Artist 5",
    music: "./music/music5.m4a",
  },
];

loadMusic(trackIndex);

function loadMusic() {
  currentMusic.src = Playlist[trackIndex].music;
  artistName.textCotent = Playlist[trackIndex].artist;
  musicName.textContent = Playlist[trackIndex].isname;

  currentMusic.addEventListener("ended", nexMusic);
}

function playPouse() {
  playMusic ? Play() : Pause();
}

function Play() {
  currentMusic.play();
  play.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`;
  playMusic = true;
}

function Pause() {
  currentMusic.pause();
  play.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
  playMusic = true;
}

function nexMusic() {
  if (trackIndex < Playlist.length - 1) {
    trackIndex += 1;
  } else {
    trackIndex = Playlist.length - 1;
  }

  loadMusic(trackIndex);
  playPouse();
}

function prevMusic() {
  if (trackIndex > 0) {
    trackIndex -= 1;
  } else {
    trackIndex = Playlist.length - 1;
  }
  loadMusic(trackIndex);
  playPouse();
}

// events

prev.addEventListener("click", prevMusic);
play.addEventListener("click", playPouse);
next.addEventListener("click", nexMusic);
