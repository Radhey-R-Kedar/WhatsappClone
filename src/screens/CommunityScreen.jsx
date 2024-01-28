import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import CommunityImg from '../assets/community-img.png';
import {Colors} from '../theme/Colors';

const CommunityScreen = () => {
  return (
    <View
      style={{backgroundColor: Colors.background}}
      className="flex-1 items-center justify-center">
      <Image source={CommunityImg} style={{height: 150, width: 250}} />
      <Text
        style={{
          color: Colors.white,
          fontSize: 26,
          fontWeight: '500',
          marginTop: 40,
        }}>
        Introducing communities
      </Text>
      <Text
        style={{
          color: Colors.textGrey,
          fontSize: 16,
          textAlign: 'center',
          paddingHorizontal: 30,
          marginTop: 5,
          lineHeight: 22,
          letterSpacing: 0.6,
        }}>
        Easily organize your related groups and sent announcements, Now, your
        communities, like neighbour or schools, can have their
      </Text>
      <TouchableOpacity  style={{backgroundColor:Colors.tertiary, marginTop:30, padding:8, borderRadius:30, width:'80%'}}>
        <Text className="text-center" style={{fontSize:14, color:Colors.background}} >Start your Community</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CommunityScreen;
