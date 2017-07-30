import React, { Component } from 'react';
import {
  Text,
  Image
} from 'react-native';

import {Header,Left,Button,Icon,Right,Body,Title} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
       <Left>
       <Button transparent
              onPress={()=>this.props.openDrawer()}
       >
         <Icon name='menu' />
       </Button>
       </Left>
       <Body>
         <Image
          source={require('./../img/logo.png')}
        />
       </Body>
       <Right>
         <Button transparent>
           <Icon name='search' />
         </Button>
       </Right>
     </Header>
    );
  }
}

module.exports = AppHeader;
