// import React, {Component} from 'react';
// import {Text,View} from 'react-native';
//
// class SideBarContent extends Component{
//     constructor() {
//         super();
//     }
//     render()
//     {
//         return(
//             <View>
//                 <Text>Order History</Text>
//                 <Text>Account</Text>
//                 <Text>Basket</Text>
//                 <Text>About us</Text>
//             </View>
//         );
//     }
// }
//
// export {SideBarContent};

import React, { Component } from 'react';
import {
  Text,
} from 'react-native';

import {Content} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Text>Drawer</Text>
          </Content>
    );
  }
}

module.exports = Sidebar;
