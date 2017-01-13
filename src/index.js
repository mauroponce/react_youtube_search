import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video_list.js';
import YouTubeSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDV00w5GyyruQJetd4AY23lMB9WaxQ7Xkw';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = { videos: [] };

    YouTubeSearch({ key: API_KEY, term: 'Snowboard' }, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));