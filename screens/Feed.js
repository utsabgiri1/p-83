import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import PostCard from './PostCard';
let posts = require('./temp_posts.json');
export default class Feed extends Component {
  renderItem = ({ item: posts }) => {
    return <PostCard posts={posts} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <View style={styles.appTitle}>
          <View style={styles.appIcon}>
            <Image
              style={styles.iconImage}
              source={require('../assets/logo.png')}
            />
          </View>
          <View style={styles.appTitleTextContainer}>
            <Text style={styles.appTitleText}>Spectagram App</Text>
          </View>
        </View>
        <View style={styles.cardContainer}>
          <FlatList
            data={posts}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
  appTitle: {
    flex: 0.07,
    flexDirection: 'row',
  },
  appIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  appTitleText: {
    color: 'white',
    fontSize: RFValue(28),
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 0.93,
  },
});
