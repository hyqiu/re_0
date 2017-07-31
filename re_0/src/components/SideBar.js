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
  Text, View
} from 'react-native';

import {Content,
  Footer, FooterTab,
  Header, Icon, Thumbnail, Body,
  Card, CardItem,
  List, ListItem,
  Left, Right} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
      <Content style={{backgroundColor:'#636266'}}>
        <Card style={{flex:1, backgroundColor:'#636266'}} >
          <CardItem header>
            <Left>
              <Thumbnail
              source={require('./../img/user.jpg')}
             />
              <Body>
                <Text style = {{fontSize: 12}}>Utilisateur RE!</Text>
                <Text note style = {{fontSize: 10}}>Editer le profil</Text>
              </Body>
            </Left>
            <Right>
              <Icon
              name='ios-close'
              style={{fontSize: 40, color: 'grey'}}
               />
            </Right>
          </CardItem>
        </Card>

        <List>
          <ListItem iconLeft>
              <Icon name="ios-bookmarks" />
              <Text> Ma réservation en cours</Text>
          </ListItem>
          <ListItem iconLeft>
              <Icon name="ios-cash" />
              <Text> Mes avantages fidélité</Text>
          </ListItem>
          <ListItem iconLeft>
              <Icon name="ios-chatbubbles" />
              <Text> Mes commentaires</Text>
          </ListItem>
          <ListItem iconLeft>
              <Icon name="ios-heart" />
              <Text> Mes plats et restaurants préférés</Text>
          </ListItem>
          <ListItem iconLeft>
              <Icon name="ios-restaurant" />
              <Text>  Le top Review Eat!</Text>
          </ListItem>
        </List>
      </Content>

    );
  }
}

module.exports = Sidebar;
