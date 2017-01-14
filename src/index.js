import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

import SearchBar    from './components/search_bar.js';
import VideoList    from './components/video_list.js';
import VideoDetail  from './components/video_detail.js';

const YOUTUBE_API_KEY = 'AIzaSyDV00w5GyyruQJetd4AY23lMB9WaxQ7Xkw';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.searchVideos('Patagonia');
  }

  handleVideoSelect(selectedVideo) {
    debugger
    this.setState({selectedVideo});
  }

  searchVideos(term){
    YouTubeSearch({ key: YOUTUBE_API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.searchVideos(term)}/>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo => this.handleVideoSelect(selectedVideo)}
            videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));