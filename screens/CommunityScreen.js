import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ScrollableTabView, DefaultTabBar, ScrollableTabBar, } from '@valdio/react-native-scrollable-tabview';
import { Constants } from 'expo';


import CardNavigator from '../navigation/CardNavigator';

import baseStyles from '../constants/Styles';
import { colors } from '../constants/Colors'

import { OpenSansText } from '../components/StyledText'
import CommunityHeader from '../components/CommunityHeader';
import Card from '../components/Card';

class CommunityScreen extends React.Component {
  static navigationOptions = {
    // title: 'Home',
    // headerForceInset: { top: 'never', bottom: 'never' }
    // headerStyle: { marginTop: 100 },
    // headerStyle: { marginTop: Constants.statusBarHeight },
    header: <CommunityHeader />,
    // headerStyle: baseStyles.header,
  }

  render() {
    return (
      <ScrollableTabView
        renderTabBar={() => <ScrollableTabBar
          activeTextColor={colors.dark}
          underlineStyle={styles.communityHeaderUnderline}
          tabsContainerStyle={styles.communityHeaderTabsContainer}
          style={{borderWidth: 0}}
          />}
        style={{borderWidth: 0}}
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView tabLabel="Everyone" style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
          <Card text='Bagaimana cara menabung yg benar?' navigation={this.props.navigation} />
          <Card text='Brp sih gaji di Gojek?'/>
          <Card text='Ini app apa ya?'/>
          <Card text='Keren jg nih... \n haloo smua'/>
          <Card text='Bagaimana cara menabung yg benar?'/>
          <Card text='Brp sih gaji di Gojek?'/>
          <Card text='Ini app apa ya?'/>
          <Card text='Keren jg nih... \n haloo smua'/>
        </ScrollView>
        <ScrollView tabLabel="Bank Mandiri" style={{backgroundColor:'white'}} showsVerticalScrollIndicator={false}>
          <Card text='Berapa sih umur rata-rata pegawai Bank mandiri? dnger dnger ktny 20an. gk tau itu bner ato ngga. halo halo'/>
          <Card text='ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk'/>
          <Card text='hai guys?'/>
          <Card text='Berapa sih umur rata-rata pegawai Bank mandiri? dnger dnger ktny 20an. gk tau itu bner ato ngga. halo halo'/>
          <Card text='ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk'/>
          <Card text='hai guys?'/>
          <Card text='Berapa sih umur rata-rata pegawai Bank mandiri? dnger dnger ktny 20an. gk tau itu bner ato ngga. halo halo'/>
          <Card text='ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk. ad yg knal aku gk'/>
          <Card text='hai guys?'/>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  communityHeaderTextStyle: {
    fontFamily: 'open-sans',
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    color: colors.dark,
  },
  communityHeaderUnderline: {
    height: 3,
    backgroundColor: colors.grapefruit50,
  },
  communityHeaderTabsContainer: {
    backgroundColor: colors.paleSalmon,
  },
});


export default CommunityScreen;
