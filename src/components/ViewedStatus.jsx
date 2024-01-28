import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';  
import {Colors} from '../theme/Colors';
import { ViewedStatusData } from '../data/ViewedStatusData';

const ViewedStatus = () => {
  return (
    <View>
      <Text style={styles.recentUpdates}>Viewed Status</Text>
     {
      ViewedStatusData.map(item=>(
        <View key={item.id} className="flex-row mb-2">
        <View style={styles.imgStory}>
          <Image source={item.storyImg} style={styles.statusStyle} />
        </View>
        <View className="ml-3 justify-center">
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
      ))
     }
     
    </View>
  );
};

export default ViewedStatus;

const styles = StyleSheet.create({
  statusStyle: {
    height: 45,
    width: 45,
    borderRadius: 45,
  },
  recentUpdates: {
    fontSize: 14,
    color: Colors.textGrey,
    paddingBottom: 10,
    paddingTop: 20,
  },
  imgStory: {
    height: 50,
    width: 50,
    backgroundColor: Colors.backgroundColor,
    borderColor: Colors.tertiary,
    borderWidth: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontSize: 15,
    color: Colors.white,
    fontWeight: '500',
  },
  time: {
    fontSize: 13,
    color: Colors.textGrey,
  },
});
