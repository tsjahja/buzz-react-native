import React from 'react';
import { StyleSheet, View, Button, Image, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo';

import baseStyles from '../constants/Styles';
import { colors } from '../constants/Colors';

import SignUpDescriptionHeader from '../components/SignUpDescriptionHeader';
import { OpenSansText, OpenSansLightText, OpenSansLightItalicText } from '../components/StyledText';


export class ResetPasswordSentScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    header: <SignUpDescriptionHeader navigation={navigation} />
    // tabBarVisible: false,
  })

  _onFinishCheckingCode = (isValid) => {
    this.props.navigation.navigate('Welcome');
  }

  render() {
    return (
      <LinearGradient style={styles.container} colors={[colors.skyBlue, colors.turquoise]}>
        <View style={styles.title}>
          <OpenSansText style={styles.titleText}>Email sent!</OpenSansText>
          <OpenSansLightText style={styles.subtitleText}>Please use the temporary password sent to your email to sign in</OpenSansLightText>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.5} style={[baseStyles.buttonShadow, styles.button]} onPress={()=>{this.props.navigation.navigate('SignIn')}} >
              <OpenSansText style={styles.buttonText}>Resend</OpenSansText>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.5} style={[baseStyles.buttonShadow, styles.button]} onPress={()=>{this.props.navigation.navigate('SignIn')}} >
              <OpenSansText style={styles.buttonText}>Back to sign in page</OpenSansText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/sent.png')} style={styles.image} />
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
  title: {
    flexDirection: 'column',
    paddingTop: 50,
  },
  titleText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  subtitleText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {
    flexDirection: 'row',
  },
  buttonsContainer: {
    zIndex: 1,
    paddingTop: 40,
    paddingLeft: 40,
    paddingRight: 40,
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  imageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    bottom: -20,
  },
  image: {
    height: 400,
    width: 400,
  },
});

export default ResetPasswordSentScreen;
