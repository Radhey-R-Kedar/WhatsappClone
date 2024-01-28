import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CallLinks from '../components/CallLinks'
import RecentCalls from '../components/RecentCalls'
import { Colors } from '../theme/Colors'

const CallListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor:Colors.background, padding:20}}>
      <CallLinks/>
      <RecentCalls/>
    </ScrollView>
  )
}



export default CallListScreen