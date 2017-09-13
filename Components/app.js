import React,{Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import UserList from '../Containers/userlist';
import UserDetails from '../Containers/userdetails';

const App = () =>(
  <View style={styles.viewcontainer}>
    <View>
    <Text style = {styles.textContainer}>UserList</Text>
    <UserList/>
    </View>
    <View>
    <Text style = {styles.textContainer}>UserDetails</Text>
    <UserDetails/>
    </View>
  </View>
);

const styles = StyleSheet.create({
  viewcontainer : {
    flex : 1,
    marginTop : 22,
    flexDirection : 'column',
  },
  textContainer :{
    marginLeft : 15,
    height : 60,
    color : 'steelblue',
    fontSize : 25,
  },
});

export default App;
