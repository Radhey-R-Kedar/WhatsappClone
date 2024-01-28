import {View,TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChatList from '../components/ChatList';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {getDeviceId} from '../utils/helper';

const ChatListScreen = () => {

  const [userId, setUserId] = useState();

  useEffect(() => {
    getDeviceId().then(id => setUserId(id));
  }, []);

  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate('ContactScreen', {
      userId: userId,
    });
  };
  
  return (
    <View
      style={{
        position: 'relative',
        flex: 1,
        backgroundColor: Colors.background,
      }}>
      <ScrollView>
        <ChatList userId={userId} />
      </ScrollView>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.tertiary,
          height: 50,
          width: 50,
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
        onPress={onNavigate}>
        <VectorIcon
          name="message-reply-text"
          type="MaterialCommunityIcons"
          size={20}
          color={Colors.white}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ChatListScreen;
