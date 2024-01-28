import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Colors';
import User1 from '../assets/user1.jpeg';
import VectorIcon from '../utils/VectorIcon';
import { RecentCallsData } from '../data/RecentCallsData';


const RecentCalls = () => {

  return (
    <View>
      <Text style={{color: Colors.textColor, marginVertical: 10}}>Recent </Text>
     {RecentCallsData.map(item =>(
       <View key={item.id} className="flex-row justify-between mb-4">
       <View className="flex-row ">
         <Image
           source={item.profileImg}
           className="h-9 w-9"
           style={{borderRadius: 50}}
         />
         <View className="ml-3">
           <Text style={{color: Colors.textColor}}>{item.name}</Text>
           <View className="flex-row">
             {item.incoming && (
               <VectorIcon
                 name="arrow-down-left"
                 type="Feather"
                 size={20}
                 color={Colors.red}
               />
             )}
             {item.outgoing && (
               <VectorIcon
                 name="arrow-up-right"
                 type="Feather"
                 size={20}
                 color={Colors.tertiary}
               />
             )}
             <Text style={{color: Colors.textColor, fontSize:10, textAlignVertical:'center'}}>{item.time}</Text>
           </View>
         </View>
       </View>
      <View className='justify-around items-center  flex-row'>
      {item.video && (
         <VectorIcon
           name="videocam"
           type="Ionicons"
           size={24}
           color={Colors.tertiary}
           style={{marginLeft:15}}
         />
       )}
       {item.audio && (
         <VectorIcon
           name="phone-alt"
           type="FontAwesome5"
           size={16}
           color={Colors.tertiary}
           style={{marginLeft:15}}
         />
       )}
      </View>
     </View>
     ))}
    </View>
  );
};

export default RecentCalls;

const styles = StyleSheet.create({});
