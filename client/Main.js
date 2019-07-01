import React from 'react';
import axios from 'axios';

//import components here
import Sidebar from './Sidebar';
import Albums from './Albums';
import Player from './Player';
import SingleAlbum from './SingleAlbum';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      selectedAlbum: {},
      currentSong: {},
      songPlaying: false,
    };
    this.clickAlbum = this.clickAlbum.bind(this);
    this.removeAlbum = this.removeAlbum.bind(this);
    this.playMusic = this.playMusic.bind(this);
    this.pauseMusic = this.pauseMusic.bind(this);
    this.playNext = this.playNext.bind(this);
    this.playPrevious = this.playPrevious.bind(this);
  }
  removeAlbum() {
    return this.setState({ selectedAlbum: {} });
  }

  playMusic(src) {
    audio.src = src.audioUrl;
    if (!this.state.currentSong) {
      audio.load();
    }
    audio.play();
    this.setState({
      currentSong: src,
      songPlaying: true,
    });
  }
  pauseMusic() {
    audio.pause();
    this.setState({ songPlaying: false });
  }
  playNext(currentSong) {
    const songs = this.state.selectedAlbum.songs;
    const currentSongIndex = songs.findIndex(s => s === currentSong);
    const nextSongIndex = (currentSongIndex + 1) % songs.length;
    this.playMusic(songs[nextSongIndex]);
  }

  playPrevious(currentSong) {
    const songs = this.state.selectedAlbum.songs;
    const currentSongIndex = songs.findIndex(s => s === currentSong);
    var prevSongIndex = currentSongIndex - 1;
    if (prevSongIndex === -1) {
      prevSongIndex = songs.length - 1;
    }
    this.playMusic(songs[prevSongIndex]);
  }

  async clickAlbum(albumId) {
    try {
      const response = await axios.get(`/api/albums/${albumId}`);
      const selectedAlbum = response.data;
      return this.setState({ selectedAlbum });
    } catch (error) {
      console.error(error);
    }
  }
  async componentDidMount() {
    try {
      const response = await axios.get('/api/albums');
      const albums = response.data;
      this.setState({ albums });
      audio.addEventListener('ended', () => {
        console.log('song ended', this.state.currentSong);
        this.playNext(this.state.currentSong);
      });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div id="main" className="row container">
        <Sidebar removeAlbum={this.removeAlbum} />
        {this.state.selectedAlbum.id ? (
          <SingleAlbum
            selectedAlbum={this.state.selectedAlbum}
            playMusic={this.playMusic}
            pauseMusic={this.pauseMusic}
            currentSong={this.state.currentSong}
            songPlaying={this.state.songPlaying}
          />
        ) : (
          <Albums albums={this.state.albums} clickAlbum={this.clickAlbum} />
        )}
        <Player
          songPlaying={this.state.songPlaying}
          currentSong={this.state.currentSong}
          playMusic={this.playMusic}
          pauseMusic={this.pauseMusic}
          playNext={this.playNext}
          playPrevious={this.playPrevious}
        />
      </div>
    );
  }
}
