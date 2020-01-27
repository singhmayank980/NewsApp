import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";

export default class App extends Component {
  
constructor(props){
  super(props);
  this.state={
    isLoading: true,
    dataSource: null
  }
}

componentDidMount(){
   
  return fetch('http://dummy.restapiexample.com/api/v1/employees')
         .then(response => response.json())
         .then(responseJson =>{
           this.setState({
             isLoading:false,
             dataSource: responseJson.data
           })
         })
         .catch(error=>{
           console.log(error)
         })
  
}

  render() {
  
    if(this.state.isLoading){
      return (
        <View style={styles.container}>
        <ActivityIndicator/>
        </View>
      )
    }
    else{

      let m = this.state.dataSource.map((item)=>{
        return(<View key={item.id}>
          <Text style={{fontSize:24}}>
          {item.employee_name} and my Id is :
          {item.id}
          </Text>
          
          </View>)
      })
     
      
      return (
        <View style={styles.container}>
          {m}
        </View>
      );
    }

   
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }, 
  item:{
    flex:1,
    alignSelf:'stretch',
    margin:8,
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:1,
    borderBottomColor:'#eee'
  }
});
