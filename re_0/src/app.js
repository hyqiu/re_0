// import React from 'react';
// import {View, Text} from 'react-native';
// import DrawerExample from './components/Sidebar';
//
// const App = () => {
//   return (
//     <View>
//       {/*<RE_Header />*/}
//       <DrawerExample />
//     </View>
//   );
// };
//
// export default App;

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import {Drawer} from 'native-base';

import AppHeader from './components/Header';
import Sidebar from './components/SideBar';

export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
    <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={<Sidebar/>}
      onClose={() => this.closeDrawer()} >

      <AppHeader
          openDrawer={this.openDrawer.bind(this)}
      />

      </Drawer>
    );
  }
}

module.exports = App;
