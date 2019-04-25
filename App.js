/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import Form from './app/components/form';

type Props = {};
export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.top}>
                <Image source={require('./app/img/arrow-left.png')}  style={styles.arrow} />
             <Text style={styles.secondHeaderText}>Please enter 6-digit code sent to you</Text>
         </View>

         <View style= {styles.center}>
               <Form />
               <TouchableOpacity style ={styles.button}>
               <Text style= {styles.buttonText}>Verify</Text>
             </TouchableOpacity>
         </View>

         <View style= {styles.bottom}>
             <Image source={require('./app/img/gol.png')}  style={styles.backgroundImage} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'#e8e9ed',
  },
  top: {
   height: '35%',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#12213a',
   borderBottomRightRadius: 50,
   borderBottomLeftRadius: 50,
 },
 center: {
   height: '45%',
   alignItems: 'center',
   justifyContent: 'center',
      },
 bottom: {
   height: '10%',
   },
   secondHeaderText: {
    fontSize: 15,
    color: 'white',
    marginVertical: 10,
    alignItems: 'center',
    paddingBottom: 20
  },
  button: {
    width: 270,
    borderRadius: 25,
    backgroundColor: '#12213a',
    marginBottom:30,
    paddingVertical: 15
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
  },
  arrow: {
    marginBottom: 40,
    marginRight: 270,
    overlayColor: 'white'
  },
});
