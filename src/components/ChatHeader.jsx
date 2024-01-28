import {View, Image, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import VectorIcon from '../utils/VectorIcon';
import {Colors} from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import {getImage} from '../utils/helper';

const ChatHeader = ({contactUserRef}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState();

  const getContactData = async () => {
    const contactSnapshot = await contactUserRef.get();
    const data = contactSnapshot.data();
    const name = data.name;
    const profile = await getImage(data.profile);

    setUser({name, profile});
  };

  useEffect( () => {
   getContactData();
  }, [contactUserRef]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer1}>
        <VectorIcon
          type="Ionicon"
          name="arrow-back"
          size={20}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        {user?.profile && (
          <Image
          source={{uri: user.profile}}
          style={{height: 40, width: 40, borderRadius: 40, marginLeft: 7}}
        />
        )}
        {user?.name && <Text style={styles.username}>{user.name}</Text>}
      </View>
      <View style={styles.innerContainer2}>
        <VectorIcon
          type="Ionicon"
          name="videocam"
          size={22}
          color={Colors.white}
        />
        <VectorIcon
          type="FontAwesome"
          name="phone"
          size={20}
          color={Colors.white}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          size={18}
          color={Colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontSize: 17,
    color: Colors.white,
    marginLeft: 10,
  },
  innerContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '30%',
  },
  innerContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '25%',
  },
});

export default ChatHeader;
