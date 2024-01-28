import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
import firestore from '@react-native-firebase/firestore';

const ChatBody = ({chatId, userId}) => {
  const scrollViewRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firestore()
      .collection('chats')
      .doc('' + chatId)
      .collection('messages')
      .orderBy('timestamp')
      .onSnapshot(snapShot => {
        const allMessages = snapShot.docs.map(snap => {
          return snap.data();
        });
        setMessages(allMessages);
      });
  }, []);

  const UserMessageView = ({message, time}) => {
    return (
      <View style={styles.userContainer}>
        <View style={styles.userInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <View className="flex-row mt-1">
          <Text style={styles.time}>{time}</Text>
          <VectorIcon
            name="check-double"
            type="FontAwesome5"
            color={Colors.blue}
            size={12}
            style={styles.doubleCheck}
          />
          </View>
        </View>
      </View>
    );
  };

  const OtherUserMessageView = ({message, time}) => {
    return (
      <View style={styles.otherUserContainer}>
        <View style={styles.otherUserInnerContainer}>
          <Text style={styles.message}>{message}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  };

  const scrollToEnd = () => {
    scrollViewRef.current.scrollToEnd({animated: true});
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToEnd}
        showsVerticalScrollIndicator={false}
        className="p-2">
        {messages.map(item => (
          <>
            {item.sender.userId === userId.userId ? (
              <UserMessageView
              key={item.timestamp?.toDate().toDateString()}
                message={item.body}
                time={
                  item.timestamp?.toDate().toDateString()
                }
              />
            ) : (
              <OtherUserMessageView
              key={item.timestamp?.toDate().toDateString()}
                message={item.body}
                time={
                  item.timestamp?.toDate().toDateString()
                }
              />
            )}
          </>
        ))}
      </ScrollView>
      <View style={styles.scrollIcon}>
        <VectorIcon
          name="angle-dobule-down"
          type="Fontisto"
          size={12}
          color={Colors.white}
          style={styles.scrollDownArrow}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 5,
    
  },
  otherUserContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  userInnerContainer: {
    backgroundColor: Colors.teal,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'flex-end',
    maxWidth:'95%'
  },
  message: {
    fontSize: 13,
    color: Colors.white,
    marginRight:10
  },
  time: {
    fontSize: 9,
    color: Colors.white,
    marginLeft: 5,
  },
  doubleCheck: {
    marginLeft: 5,
  },
  otherUserInnerContainer: {
    backgroundColor: Colors.primaryColor,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    alignItems: 'flex-end',
    maxWidth:'80%'
  },
  scrollDownArrow: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 50,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 15,
    marginBottom: 5,
  },
});

export default ChatBody;
