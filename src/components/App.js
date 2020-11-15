import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  componentDidMount() {
    this.onSearchSubmit('rugby')
  }
  onSearchSubmit = async term => {
    
    const key = 'AIzaSyBeVwb3Jq1xhzs3geY5-yNHMtupcleyP2Q';
    const response = await youtube.get(`search?q=${term}&key=${key}`, {
      params: {
        part: 'snippet',
        maxResults: '6'
      }
    })
    console.log(response.data.items[0])
    this.setState({
      videos: response.data.items,
      selectedVideo:  response.data.items[0]
    })
  }
  
  onVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return(
      <div className="ui container" style={{marginTop: '20px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="ui stackable grid">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
          </div>

        </div>
      </div>
    )

  }


}

export default App;