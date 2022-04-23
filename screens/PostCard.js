import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostScreen from './PostScreen';
export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('PostScreen', { post: this.props.posts, })
          }>
          <View style={styles.cardContainer}>
            <Image
              style={styles.postImage}
              source={require('../assets/image_2.jpg')}
            />
            <View style={styles.titleContainer}>
              <Text style={styles.postTitleText}>
                {this.props.posts.Caption}
              </Text>
              <Text style={styles.postAuthorText}>
                {this.props.posts.author}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={'heart'} color={'pink'} size={RFValue(30)} />
                <Text style={styles.likeText}>12K</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    marginTop: RFValue(20),
    margin: RFValue(13),
    backgroundColor: 'crimson',
    borderRadius: RFValue(20),
  },
  postImage: {
    resizeMode: 'contain',
    width: '95%',
    alignSelf: 'center',
    height: RFValue(250),
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: 'center',
  },
  postTitleText: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
    color: 'snow',
    fontFamily: 'cursive',
  },
  postAuthorText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'cursive',
  },

  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eb3948',
    borderRadius: RFValue(30),
  },
  likeText: {
    color: 'white',
    fontFamily: 'cursive',
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
