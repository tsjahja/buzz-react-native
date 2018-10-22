import React from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import baseStyles from '../constants/Styles';
import { colors } from '../constants/Colors';

import StatusBarHeader from '../components/StatusBarHeader';
import { OpenSansText, OpenSansLightText, OpenSansLightItalicText } from '../components/StyledText';


export class ResetPasswordScreen extends React.Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={[colors.skyBlue, colors.turquoise]}>
        <View style={styles.statusBarHeader} />
        <View style={styles.title}>
          <OpenSansLightText style={styles.titleText}>We will send an email with a temporary password for you to sign in</OpenSansLightText>
        </View>
        <View style={styles.textContainer}>
          <View style={styles.textBorderContainer}>
            <View style={styles.iconContainer}>
              <MaterialIcons name='mail' size={30} style={styles.icon}/>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder='enter work email'
              onSubmitEditing={() => this.props.navigation.navigate('ResetPasswordSent')}
              />
          </View>

        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/email.png')} style={styles.image} />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  statusBarHeader: {
    height: getStatusBarHeight(),
    borderColor: colors.skyBlue,
    borderWidth: 0,
  },
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.skyBlue,
    paddingLeft: 25,
    paddingRight: 25,
  },
  title: {
    flexDirection: 'column',
    paddingTop: 50,
  },
  titleText: {
    fontSize: 24,
    color: 'white',
  },
  subtitle: {
    flexDirection: 'column',
    paddingTop: 10,
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
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: -20,
  },
  image: {
    height: 250,
    width: 250,
  },
});

export default ResetPasswordScreen;
