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

import {Drawer, StyleProvider} from 'native-base';

import AppHeader from './components/Header';
import Sidebar from './components/SideBar';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';

export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
    <StyleProvider style={getTheme(material)}>
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar/>}
        onClose={() => this.closeDrawer()} >

        <AppHeader
            openDrawer={this.openDrawer.bind(this)}
        />
      </Drawer>
    </StyleProvider>
    );
  }
}

module.exports = App;
