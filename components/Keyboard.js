import React from 'react';
import { StyleSheet, InputAccessoryView, TextInput, View, Button, Dimensions } from 'react-native';

import baseStyles from '../constants/Styles';
import { colors } from '../constants/Colors';


class Keyboard extends React.Component {
  state = {text: ''};
  render() {
    const {width} = Dimensions.get('window');
    return (
      <InputAccessoryView style={styles.inputAccessoryView}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => {
              this.setState({text});
            }}
            value={this.state.text}
            placeholder={'Type a message...'}
            // maxLength = {500}
            multiline = {true}
            numberOfLines = {2}
            enablesReturnKeyAutomatically = {true}
          />
          <Button
            onPress={() => this.setState({text: 'Placeholder Text'})}
            title="Buzz"
            style={styles.button}
          />
        </View>
      </InputAccessoryView>
    );
  }
}

const styles = StyleSheet.create({
  inputAccessoryView: {
    flex: 1,
    flexDirection: 'row',
  },
  headerRight: {
    right: 55,
    alignItems: 'center',
  },
  textInputContainer: {
    backgroundColor: colors.lightBlue,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  },
  textInput: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    borderRadius: 18,
    padding: 10,
    width: '100%',
    // backgroundColor: "blue",

  },
  text: {
    // color: 'white',
  },
  button: {
    padding: 10,
    color: colors.skyBlue,
    // backgroundColor: "purple",
  }
});

export default Keyboard;
