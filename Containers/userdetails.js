import React,{Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';

class  UserDetails extends Component {
  render(){
    if (!this.props.ActiveUser) {
      return(
        <View style={styles.viewContainer}>
          <Text style={styles.textContainer}>Please select a user</Text>
        </View>
      );
    }
    else {
      return(
        <View style={styles.viewContainer}>
         <Text style={styles.textContainer}>{this.props.ActiveUser.firstName} {this.props.ActiveUser.lastName}</Text>
         <Text style={styles.textContainer}>comapany: {this.props.ActiveUser.comapany}</Text>
         <Text style={styles.textContainer}>department :{this.props.ActiveUser.department}</Text>
         <Text style={styles.textContainer}>email id: {this.props.ActiveUser.emailId}</Text>
        </View>
      );
    }
  }
}
function mapStateToProps(state){
  return {
    ActiveUser: state.ActiveUser
  };
}

const styles = StyleSheet.create({
  viewContainer :{
    flexDirection: 'column',
    height: '50%',
  },
  textContainer :{
    height:30,
    fontSize: 15,
    marginLeft: 10,
    color: 'black',
    fontStyle: 'italic',
  }
});
export default connect(mapStateToProps)(UserDetails);
