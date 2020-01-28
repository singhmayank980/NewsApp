import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'native-base'
import moment from 'moment';

export default class Time extends Component {
    
    constructor(props){
       super(props);
       this.date = props.time;
    }
    
    render() {
        const time = moment(this.date || moment.now()).fromNow();
        return (
            <View>
            <Text note style={{marginHorizontal:10}}>{time}</Text> 
            </View>
        )
    }
}
