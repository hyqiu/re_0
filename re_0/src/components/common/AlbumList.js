import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // class level property
  state = {albums: []};


  // borrows functionalities from base Component class
  // must define render method in class

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
//<Text>Album List !</Text>
  render() {

    console.log(this.state);
    return(
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

/* Functional-based view */

// const AlbumList = () => {
//   return(
//     <View>
//       <Text>Album List !</Text>
//     </View>
//   );
// };

export default AlbumList;
