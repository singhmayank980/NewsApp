import React, { Component } from 'react';
import {Text} from 'react-native'
import { Container, Header, Content ,Tab, Tabs, Left, Body, Right,Title } from 'native-base';
import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';
export default class TabsExample extends Component {
    
     
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#009387'}} hasTabs  >
        <Left/>
          <Body>
            <Title style={{marginLeft:70, fontFamily:'Roboto', marginTop: 15,}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Current News">
            <Tab1 />
          </Tab>
          <Tab heading="Science">
            <Tab2 />
          </Tab>
          <Tab heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}