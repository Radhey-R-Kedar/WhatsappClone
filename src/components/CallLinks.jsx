import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { Colors } from '../theme/Colors'

const CallLinks = () => {
  return (
    <View className='flex-row items-center' >
      <View style={styles.linkImg} >
      <VectorIcon
          name="link"
          type="Fontisto"
          size={20}
          color={Colors.white}
        />
      </View>
      <View className='ml-3'>
      <Text style={styles.text1}>Create Call Link</Text>
      <Text style={styles.text2}>Share a link for your WhatsApp call</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
  linkImg:{
   backgroundColor:Colors.teal,
   height:40,
   width:40,
   borderRadius:40,
   alignItems:'center',
   justifyContent:'center',
   
  },
  text1:{
    fontSize:12,
    color:Colors.white,
 
  },
  text2:{
    fontSize:11,
    color:Colors.textGrey
  }
})

export default CallLinks