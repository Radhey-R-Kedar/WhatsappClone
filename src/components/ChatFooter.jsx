import {View, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
import firestore from '@react-native-firebase/firestore';

const ChatFooter = ({userId, chatRef}) => {
  const [message, setMessage] = useState('');
  const [sendEnable, setSendEnable] = useState(false);

  const onChange = value => {
    setMessage(value);
    value.length >0 ? setSendEnable(true):setSendEnable(false);
  };

  const onSend =() => {
    chatRef.collection('messages').add({
      body: message,
      sender: userId,
      timestamp: firestore.FieldValue.serverTimestamp(),
    })
    setSendEnable(false);
    setMessage("");
  };
  return (
    <View
      className="flex-row items-center justify-between pt-2 pb-2"
      style={{backgroundColor: Colors.black}}>
      <View
        className="flex-row items-center ml-2 pl-2 "
        style={{
          backgroundColor: Colors.primaryColor,
          height: 40,
          borderRadius: 30,
          width: '85%',
        }}>
        <VectorIcon
          name="emoji-emotions"
          type="MaterialIcons"
          size={22}
          color={Colors.white}
        />
        <TextInput
          placeholder="Message"
          className="w-52 ml-1"
          placeholderTextColor={Colors.textGrey}
          onChangeText={text => onChange(text)}
          style={{fontSize:17, color:Colors.white}}
          value={message}
        />
        <View className="flex-row-reverse justify-between w-24" >
          {!sendEnable && <>
          <VectorIcon
            name="camera"
            type="FontAwesome"
            size={18}
            color={Colors.white}
          />
        <VectorIcon
            name="rupee"
            type="FontAwesome"
            size={18}
            color={Colors.white}
          />
          </>}
          

          <VectorIcon
            name="attachment"
            type="Entypo"
            size={18}
            color={Colors.white}
          />
         
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.tertiary,
          height: 40,
          width: 40,
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 5,
        }}
        onPress={onSend}
        >
        {sendEnable ? (
          <VectorIcon
            name="send"
            type="MaterialCommunityIcons"
            size={20}
            color={Colors.white}
          />
        ) : (
          <VectorIcon
            name="mic"
            type="Feather"
            size={20}
            color={Colors.white}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ChatFooter;
