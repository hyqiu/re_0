// // import libraries for making a Component
//
// import React from 'react';
// import {Text, View} from 'react-native';
//
// // Make a component
//
// const Header = (props) => {
//
//   const { textStyle, viewStyle } = styles;
//   return (
//     <View style={viewStyle}>
//       <Text style={textStyle}>{props.headerText}</Text>
//     </View>
//   );
// };
//
// const styles = {
//   viewStyle: {
//     backgroundColor: '#CF3535',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 60,
//     paddingTop: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.2,
//     elevation: 2,
//     position: 'relative'
//   },
//   textStyle: {
//     fontSize: 20
//   }
// };
//
// // Make the component available to other parts of the app
// export {Header};

import React, { Component } from 'react';

import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

class RE_Header extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Review Eat</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

export {RE_Header};
