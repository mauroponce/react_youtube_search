import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar    from './components/search_bar.js';
import VideoList    from './components/video_list.js';
import VideoDetail  from './components/video_detail.js';

const API_KEY = 'AIzaSyDV00w5GyyruQJetd4AY23lMB9WaxQ7Xkw';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YouTubeSearch({ key: API_KEY, term: 'Snowboard' }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  handleVideoSelect(selectedVideo) {
    this.setState({selectedVideo});
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={this.handleVideoSelect.bind(this)}
          videos={this.state.videos}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));