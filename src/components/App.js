import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    //Load the initial video very first time the site starts, as componentDidMount is only called once
    componentDidMount() {                           
        this.onTermSubmit('welcome to youtube');
    }

    //When user enters a video name is search bar and hits enter, this is triggred
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        //Update the list according to search term and the video displayed to be its first term
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    //Update the playing video as per video clicked from the list
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            {/* Pass the video to be played info to the videodetails as a prop */}
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            {/* Set the state as per search term asn sent the recieved info to VideoList as prop */}
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;