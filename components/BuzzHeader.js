import React from 'react';
import { StyleSheet, View , Button} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-material-dropdown';
import _ from 'lodash';

import { colors } from '../constants/Colors'
import baseStyles from '../constants/Styles'

import { postBuzz } from "../api/buzz.js";


class BuzzHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      community: 'Everyone',
    };
  };

  _postBuzz(communitiesByCompanyName) {
    postBuzz(this.props.navigation.getParam('text'),
             this._getCompanyId(this.state.community, communitiesByCompanyName),
             this._getUserEmailId(this.state.community, communitiesByCompanyName),
             this.props.navigation.getParam('anonymous'))
      .then((response) => {
        this.props.navigation.navigate('Community', {posted: true});
        this.props.refetch();
      })
  }

  _toObject(arr) {
    const data = [];
    for (var i = 0; i < arr.length; ++i)
      data.push({'value': arr[i]});
    return data;
  }

  _getCompanyId(name, communitiesByCompanyName) {
    return communitiesByCompanyName[name].company.id;
  }

  // pick the next userEmail if name is `Everyone`
  // assuming everyone has other company than `Everyone`
  _getUserEmailId(name, communitiesByCompanyName) {
    if (name == 'Everyone') {
      for(var companyName in communitiesByCompanyName) {
        if(companyName !== name)
          return communitiesByCompanyName[companyName].id;
      }
    }
    return communitiesByCompanyName[name].id;
  }

  render() {
    const userEmails = this.props.navigation.getParam('userEmails');
    const communities = _.map(userEmails, 'company.name')
    const communitiesByCompanyName = _.keyBy(userEmails, 'company.name');

    return (
      <View style={[styles.container, baseStyles.header]}>
        <View style={styles.statusHeader} />
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft} >
            <MaterialCommunityIcons
              name="window-close"
              size={25}
              color={colors.skyBlue}
              onPress={() => this.props.navigation.goBack()} />
          </View>
          <View style={styles.headerCenter}>
            <Dropdown
              containerStyle={styles.dropdownContainer}
              pickerStyle={styles.pickerContainer}
              itemTextStyle={styles.itemText}
              fontSize={16}
              dropdownPosition={0}
              dropdownOffset={{top: 10, left: 0}}
              data={this._toObject(communities)}
              onChangeText={community => {
                this.setState({community});
              }}
              value={this.state.community}
            />
          </View>
          <View style={styles.headerRight}>
            <View style={[styles.buzzButtonContainer, baseStyles.buttonShadow]}>
              <Button
                title="Buzz"
                color='white'
                disabled={this.props.navigation.getParam('text') == ''}
                onPress={() => this._postBuzz(communitiesByCompanyName)} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderBottomWidth: 0.2,
    borderColor: baseStyles.grey,
  },
  statusHeader: {
    backgroundColor: 'white',
    height: getStatusBarHeight(),
    borderColor: colors.skyBlue,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    left: 10,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerCenter: {
    flex: 3,
  },
  dropdownContainer: {
  },
  pickerContainer: {
  },
  itemText: {
    textAlign: 'center',
  },
  headerRight: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: 10,
    padding: 5,
  },
  buzzButtonContainer: {
    backgroundColor: colors.skyBlue,
    borderRadius: 20,
    alignItems: 'center',
    width: 70,
  },
});

export default BuzzHeader;
