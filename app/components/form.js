import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Header} from 'react-native';


export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>

        <TextInput style={styles.inputBox}
        placeholder='Token'
        placeholderTextColor='#313233'
        value = ''
        keyboardType = 'numeric'
         />
      <TouchableOpacity>
        <Text style = {styles.token}> Resend Token </Text>
      </TouchableOpacity>
  </View>
    );
  }
}

   const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
   borderRadius: 15,
    backgroundColor:'white',
    marginVertical: 0,
    paddingVertical:100,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    height: 10,
    marginLeft: 40,
    marginRight: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 18,
    width: 250,
  },
   token: {
     color: 'blue',
       alignItems: 'flex-end',
       justifyContent: 'center',
       marginVertical: 20
   }
});
