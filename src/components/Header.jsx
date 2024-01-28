import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon';
import WhatsappLogo from '../assets/whatsapp-logo.png'
import { Colors } from '../theme/Colors';

const Header = () => {
  return (
    <View style = {styles.container} className ="p-3 justify-between flex-row" >
     <Image source = {WhatsappLogo} style = {styles.logoStyle}/>
     <View className = "flex-row ">
        <VectorIcon style = {styles.iconStyle} type = "Feather" name="camera" color= {Colors.secondaryColor} size ={22}/>
        <VectorIcon style = {styles.iconStyle} type = "Ionicons" name="search" color= {Colors.secondaryColor} size ={20}/>
        <VectorIcon style = {styles.iconStyle} type = "Entypo" name="dots-three-vertical" color= {Colors.secondaryColor} size ={18}/>
     </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
container:{
backgroundColor: Colors.primaryColor
},
logoStyle:{
    height:25,
    width:110
},
iconStyle:{
marginHorizontal:10
},
})