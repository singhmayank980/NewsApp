import React,{Component} from 'react';
import {View} from 'react-native'
import TimeAgo from './time'
import {ListItem, Left, Thumbnail, Body, Text,Right, Button} from 'native-base';

export default class DataItem extends Component{

    constructor(props){
       super(props);
       this.data = props.data
    }

    handlePress=()=>{
      const {url, title}= this.data;
      this.props.onPress({url,title})
    }

    render(){
        return(
  
            <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: this.data.urlToImage != null ?
                this.data.urlToImage : 'https://image.shutterstock.com/image-vector/profile-blank-icon-empty-photo-260nw-535853269.jpg' }} />

            </Left>
            <Body>
              <Text numberOfLines={2}>{this.data.title}</Text>
              <Text note numberOfLines={2}>{this.data.description}</Text>
              <View style={{flex: 1, flexDirection: 'row',marginTop: 8,marginLeft: 4 ,}}>
              <Text note>{this.data.source.name}</Text> 
              <TimeAgo time= {this.data.publishedAt}/>             
              </View>
            </Body>
            <Right>
              <Button transparent onPress={this.handlePress}>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        )
    }

}

