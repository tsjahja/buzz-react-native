import React from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo';

import baseStyles from '../constants/Styles';
import { colors } from '../constants/Colors';

import SignUpDescriptionHeader from '../components/SignUpDescriptionHeader';
import { OpenSansText, OpenSansLightText, OpenSansLightItalicText } from '../components/StyledText';


export class PasswordScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <SignUpDescriptionHeader navigation={navigation} />
    // tabBarVisible: false,
  })
  render() {
    return (
      <LinearGradient style={styles.container} colors={[colors.skyBlue, colors.turquoise]}>
        <View style={styles.textSection}>
          <View style={styles.textContainer}>
            <View style={styles.textBorderContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name='lock' size={30} style={styles.icon}/>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder='create a password'
                />
            </View>
          </View>
          <View style={styles.textContainer}>
            <View style={styles.textBorderContainer}>
              <View style={styles.iconContainer}>
                <FontAwesome name='lock' size={30} style={styles.icon}/>
              </View>
              <TextInput
                style={styles.textInput}
                placeholder='re-enter password'
                />
            </View>
          </View>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity activeOpacity={0.5} style={[baseStyles.buttonShadow, styles.buttonContainer]} onPress={()=>{this.props.navigation.navigate('Welcome')}} >
            <View style={{flexDirection: 'row'}}>
              <OpenSansText style={styles.buttonText}>Create password</OpenSansText>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/key.png')} style={styles.image} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.skyBlue,
    paddingLeft: 25,
    paddingRight: 25,
  },
  textSection: {
    paddingTop: 50,
  },
  textContainer: {
    paddingTop: 30,
  },
  textBorderContainer: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0,
    opacity: 0.7,
    flexDirection: 'row',
  },
  iconContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    opacity: 0.7,
  },
  textInput: {
    flex: 5,
    height: 30,
  },
  buttonSection: {
    alignItems: 'center',
    paddingTop: 50,
    zIndex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.paleTurquoise,
    flexDirection: 'row',
    zIndex: 1,
    paddingLeft: 20,
    padding: 10,
    paddingRight: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'black',
  },
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: -20,
    right: 0,
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default PasswordScreen;
