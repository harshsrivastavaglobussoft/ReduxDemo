import React,{Component} from 'react';
import {
  Text,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {selectUser} from '../Actios/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      DataArray: Array.from(this.props.users),
    };
  }
  render(){
    return(
      <FlatList data={this.state.DataArray}
         keyExtractor ={item => item.id}
         renderItem={({item}) =>(
          <TouchableOpacity
              onPress={() => this.props.selectUser(item)}>
           <View style={styles.rowContainer}>
             <Text style={styles.textContainer}>{item.firstName}</Text>
             <Text style={styles.textContainer}>{item.lastName}</Text>
           </View>
           </TouchableOpacity>
         )}/>
    )
  }
}
const styles = StyleSheet.create({
  rowContainer :{
    flexDirection: 'row',
    height: 50,
  },
  textContainer :{
    height:'100%',
    fontSize: 17,
    marginLeft: 10,
    color: 'black',
    fontStyle: 'italic',
  }
});

function mapStateToProps(state){
  return {
    users: state.users
  };
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({selectUser : selectUser},dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(UserList);
